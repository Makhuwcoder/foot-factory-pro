// ONE SPORT — ffp-auth.js v3
// Chargé en premier sur toutes les pages protégées
// La démo passe par ffp-demo.html qui set la session AVANT de rediriger

var FFP = (function() {

  var LS = 'ffp_session';
  var LS_SC = 'ffp_scout_session';
  var LS_DEMO = 'ffp_demo_mode';

  function getSession() {
    try {
      var raw = localStorage.getItem(LS);
      if (!raw) return null;
      var d = JSON.parse(raw);
      if (!d) return null;
      if (d._exp && Date.now() > d._exp) { localStorage.removeItem(LS); return null; }
      return d;
    } catch(e) { return null; }
  }

  function getScoutSession() {
    try {
      var raw = localStorage.getItem(LS_SC);
      if (!raw) return null;
      var d = JSON.parse(raw);
      if (!d) return null;
      if (d._exp && Date.now() > d._exp) { localStorage.removeItem(LS_SC); return null; }
      return d;
    } catch(e) { return null; }
  }

  function isDemo() {
    try { return localStorage.getItem(LS_DEMO) === '1'; } catch(e) { return false; }
  }

  // Bannière démo — affichée si session._demo est true
  function showDemoBanner() {
    if (document.getElementById('ffp-demo-banner')) return;
    var b = document.createElement('div');
    b.id = 'ffp-demo-banner';
    b.style.cssText = 'position:fixed;bottom:0;left:0;right:0;z-index:99999;'
      + 'background:rgba(8,6,0,.98);border-top:2px solid rgba(212,175,55,.35);'
      + 'padding:9px 18px;display:flex;align-items:center;'
      + 'justify-content:space-between;flex-wrap:wrap;gap:8px;'
      + 'font-family:Montserrat,sans-serif;backdrop-filter:blur(8px)';
    b.innerHTML = '<div style="display:flex;align-items:center;gap:10px">'
      + '<span style="background:rgba(75,200,138,.15);border:1px solid rgba(75,200,138,.4);'
      + 'border-radius:5px;padding:3px 10px;font-size:9px;font-weight:700;'
      + 'color:#4BC88A;letter-spacing:1.5px;text-transform:uppercase">⚡ MODE DÉMO</span>'
      + '<span style="font-size:11px;color:#888">Données fictives · AS Voltaire Paris</span>'
      + '</div>'
      + '<div style="display:flex;gap:8px;align-items:center">'
      + '<a href="ffp-demo.html" style="font-size:10px;font-weight:700;color:#1565C0;'
      + 'text-decoration:none;border:1px solid rgba(0,0,0,.15);'
      + 'border-radius:5px;padding:4px 10px">← Changer de profil</a>'
      + '<a href="ffp-pricing.html" style="font-size:10px;font-weight:800;'
      + 'background:linear-gradient(135deg,#0D1B3E,#1565C0);color:#000;'
      + 'border-radius:5px;padding:4px 11px;text-decoration:none">Créer un compte →</a>'
      + '<button onclick="FFP.exitDemo()" style="background:transparent;'
      + 'border:1px solid rgba(255,255,255,.1);border-radius:5px;'
      + 'color:#666;padding:4px 9px;cursor:pointer;font-size:13px">✕</button>'
      + '</div>';
    document.body.appendChild(b);
    // Ajouter padding bas pour ne pas masquer le contenu
    var pb = parseInt(document.body.style.paddingBottom) || 0;
    document.body.style.paddingBottom = (pb + b.offsetHeight + 4) + 'px';
  }

  // Guard — appeler en tête de chaque page protégée
  // roles: tableau de rôles autorisés, ex: ['coach','directeur']
  function guard(roles) {
    var sess = getSession();

    // Scout peut aussi utiliser ffp_scout_session
    if (!sess && roles && roles.indexOf('scout') >= 0) {
      sess = getScoutSession();
      if (sess) { try { localStorage.setItem(LS, JSON.stringify(sess)); } catch(e) {} }
    }

    // Pas de session → login
    if (!sess) {
      // Ne pas rediriger si mode démo avec ?demo= dans l'URL
      if (typeof window !== 'undefined' && window.location.search.indexOf('demo=') >= 0) return null;
      window.location.replace('ffp-login.html');
      return null;
    }

    // Rôle non autorisé → login
    if (roles && roles.length > 0 && roles.indexOf(sess.role) < 0) {
      window.location.replace('ffp-login.html');
      return null;
    }

    // Session démo → afficher bannière après DOM
    if (sess._demo || isDemo()) {
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', showDemoBanner);
      } else {
        setTimeout(showDemoBanner, 100);
      }
    }

    return sess;
  }

  function logout() {
    try {
      [LS, LS_SC, LS_DEMO, 'ffp_events', 'ffp_messages',
       'ffp_demo_events_set', 'ffp_eval', 'ffp_players']
      .forEach(function(k) { localStorage.removeItem(k); });
    } catch(e) {}
    window.location.href = 'ffp-accueil.html';
  }

  function exitDemo() {
    logout();
  }

  // Raccourci — alias pour compatibilité
  function require(roles) { return guard(roles); }

  return {
    guard:        guard,
    require:      require,
    getSession:   getSession,
    getScoutSession: getScoutSession,
    isDemo:       isDemo,
    showDemoBanner: showDemoBanner,
    logout:       logout,
    exitDemo:     exitDemo
  };

})();
