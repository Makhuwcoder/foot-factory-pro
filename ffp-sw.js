// ══════════════════════════════════════════════════════
// ONE SPORT — SERVICE WORKER v2
// Offline support renforcé + cache management
// ══════════════════════════════════════════════════════

var CACHE_NAME = 'ffp-v3';

// App shell : pages et fichiers essentiels pour un fonctionnement hors-ligne réel
var APP_SHELL = [
  '/',
  '/index.html',
  '/ffp-accueil.html',
  '/ffp-login.html',
  '/ffp-dashboard.html',
  '/ffp-coach.html',
  '/ffp-parents.html',
  '/ffp-joueur.html',
  '/ffp-vie-club.html',
  '/ffp-demo.html',
  '/ffp-pricing.html',
  '/ffp-bilan.html',
  '/ffp-match.html',
  '/ffp-convocations.html',
  '/ffp-messagerie.html',
  '/ffp-media.html',
  '/ffp-guide.html',
  '/ffp-register-club.html',
  '/ffp-subscribe.html',
  '/ffp-bienvenue.html',
  '/shop/index.html',
  '/i18n.js',
  '/fb-i18n.js',
  '/ffp-stripe.js',
  '/ffp-supabase.js',
  '/ffp-auth.js',
  '/ffp-coach.js',
  '/logo.png',
  '/favicon.png',
  '/ffp-icon-192.png',
  '/ffp-icon-512.png',
  '/apple-touch-icon.png',
  '/logo-one-sport-shop.png',
  '/logo-one-sport-football.png',
  '/ffp-manifest.json'
];

// Install: mise en cache de l'app shell (fichier par fichier, tolérant aux 404)
self.addEventListener('install', function(event){
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache){
      return Promise.all(APP_SHELL.map(function(url){
        return cache.add(url).catch(function(){
          // fichier absent ou en erreur : on l'ignore, ça ne bloque pas l'install
        });
      }));
    })
  );
  self.skipWaiting();
});

// Activate: nettoyage des anciens caches (ffp-v1, etc.)
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

// Fetch
self.addEventListener('fetch', function(event){
  var req = event.request;

  // Ne jamais intercepter les requêtes non-GET (paiements Stripe, écritures Supabase, etc.)
  if (req.method !== 'GET') return;

  var url = req.url;
  var isSameOrigin = url.indexOf(self.location.origin) === 0;

  // Pages HTML (app shell) : cache-first, mise à jour réseau en arrière-plan
  if (isSameOrigin && (req.mode === 'navigate' || url.endsWith('.html') || url.endsWith('/'))) {
    event.respondWith(
      caches.match(req).then(function(cached){
        var networkFetch = fetch(req).then(function(response){
          if (response && response.status === 200) {
            var clone = response.clone();
            caches.open(CACHE_NAME).then(function(cache){ cache.put(req, clone); });
          }
          return response;
        }).catch(function(){ return cached; });
        return cached || networkFetch;
      }).then(function(response){
        // Filet de sécurité ultime : si vraiment rien (première visite hors-ligne
        // sur une page jamais mise en cache), on retombe sur l'accueil football.
        return response || caches.match('/ffp-accueil.html');
      })
    );
    return;
  }

  // JS et images locales : cache-first, mise à jour réseau en arrière-plan
  if (isSameOrigin && (url.endsWith('.js') || /\.(png|jpg|jpeg|webp|svg)$/.test(url))) {
    event.respondWith(
      caches.match(req).then(function(cached){
        var networkFetch = fetch(req).then(function(response){
          if (response && response.status === 200) {
            var clone = response.clone();
            caches.open(CACHE_NAME).then(function(cache){ cache.put(req, clone); });
          }
          return response;
        }).catch(function(){ return cached; });
        return cached || networkFetch;
      })
    );
    return;
  }

  // Google Fonts / CDN : network-first, cache en secours
  if (url.indexOf('fonts.googleapis') !== -1 || url.indexOf('fonts.gstatic') !== -1) {
    event.respondWith(
      fetch(req).then(function(response){
        var clone = response.clone();
        caches.open(CACHE_NAME).then(function(cache){ cache.put(req, clone); });
        return response;
      }).catch(function(){
        return caches.match(req);
      })
    );
    return;
  }

  // Tout le reste (Supabase, Stripe, API externes) : réseau uniquement, jamais de cache
});
