// ══════════════════════════════════════════════════════
// ONE SPORT — SERVICE WORKER
// Offline support + cache management
// ══════════════════════════════════════════════════════

var CACHE_NAME = 'ffp-v1';
var CACHE_FILES = [
  'ffp-accueil.html',
  'ffp-login.html',
  'ffp-coach.html',
  'ffp-parents.html',
  'ffp-vie-club.html',
  'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700;800;900&family=Raleway:wght@300;400;500;600&family=Cormorant+Garamond:ital,wght@1,400;1,500&display=swap'
];

// Install: cache core files
self.addEventListener('install', function(event){
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache){
      return cache.addAll(CACHE_FILES.filter(function(url){
        return !url.startsWith('http'); // only cache local files on install
      }));
    })
  );
  self.skipWaiting();
});

// Activate: clean old caches
self.addEventListener('activate', function(event){
  event.waitUntil(
    caches.keys().then(function(names){
      return Promise.all(names.filter(function(name){
        return name !== CACHE_NAME;
      }).map(function(name){
        return caches.delete(name);
      }));
    })
  );
  self.clients.claim();
});

// Fetch: cache-first for local files, network-first for external
self.addEventListener('fetch', function(event){
  var url = event.request.url;
  // For local HTML files: cache first, network fallback
  if(url.includes('ffp-') && url.endsWith('.html')){
    event.respondWith(
      caches.match(event.request).then(function(cached){
        var networkFetch = fetch(event.request).then(function(response){
          if(response && response.status===200){
            var clone = response.clone();
            caches.open(CACHE_NAME).then(function(cache){ cache.put(event.request, clone); });
          }
          return response;
        }).catch(function(){ return cached; });
        return cached || networkFetch;
      })
    );
    return;
  }
  // For Google Fonts and CDN: network first, cache fallback
  if(url.includes('fonts.googleapis') || url.includes('gstatic')){
    event.respondWith(
      fetch(event.request).then(function(response){
        var clone = response.clone();
        caches.open(CACHE_NAME).then(function(cache){ cache.put(event.request, clone); });
        return response;
      }).catch(function(){
        return caches.match(event.request);
      })
    );
    return;
  }
  // Everything else: network only (Firebase, API calls)
});
