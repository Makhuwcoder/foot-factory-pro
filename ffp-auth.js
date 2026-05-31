// ══════════════════════════════════════════════════════════════════
// FOOT FACTORY PRO — MODULE AUTH v2 (ROBUSTE)
// Chargé en PREMIER sur toutes les pages protégées
// Usage: var SESS = FFP.require(['coach','parent']);
// Démo:  page.html?demo=coach  → accès direct sans login
// ══════════════════════════════════════════════════════════════════

var FFP = (function() {

  var LS_SESS  = 'ffp_session';
  var LS_DEMO  = 'ffp_demo_mode';
  var LS_SCOUT = 'ffp_scout_session';

  // ── Données démo fixes ─────────────────────────────────────────
  var DEMO_CLUB = 'a0000000-0000-0000-0000-000000000001';

  function _demoSessions() {
    var exp = Date.now() + 7200000; // 2h
    return {
      coach: {
        role:'coach', prenom:'Ahmed', nom:'Benali',
        club_id: DEMO_CLUB, category_id:'U12',
        _demo:true, _exp:exp
      },
      parent: {
        role:'parent', player_code:'1003',
        prenom:'Parent de', nom:'Kylian Faure',
        _demo:true, _exp:exp
      },
      recruteur: {
        role:'scout', prenom:'Pierre', nom:'Marchetti',
        club:'AS Monaco Academy', _demo:true, _exp:exp
      },
      directeur: {
        role:'directeur', prenom:'Jean-Marc', nom:'Roussel',
        club_id: DEMO_CLUB, _demo:true, _exp:exp
      }
    };
  }

  function _demoEvents() {
    function futur(j) {
      var d = new Date(); d.setDate(d.getDate() + j);
      return d.toISOString().slice(0,10);
    }
    return [
      {id:'dv1',type:'match',       titre:'AS Voltaire vs FC Belleville', date:futur(3),  heure:'18h00',lieu:'Terrain Voltaire',    obligatoire:true},
      {id:'dv2',type:'entrainement',titre:'Entraînement technique',        date:futur(1),  heure:'17h30',lieu:'Terrain annexe',      obligatoire:false},
      {id:'dv3',type:'tournoi',     titre:'Tournoi Ligue Paris U12',       date:futur(10), heure:'09h00',lieu:'Stade Charléty',      obligatoire:true},
      {id:'dv4',type:'reunion',     titre:'Réunion parents de saison',     date:futur(18), heure:'19h00',lieu:'Salle Voltaire',      obligatoire:false},
      {id:'dv5',type:'match',       titre:'AS Voltaire vs ES Ménilmontant',date:futur(24), heure:'15h00',lieu:'Terrain adverse',     obligatoire:true},
      {id:'dv6',type:'stage',       titre:'Stage Présaison 3 jours',       date:futur(30), heure:'08h30',lieu:'Centre national',    obligatoire:true}
    ];
  }

  function _demoMessages() {
    return [
      {id:'dm1',from:'coach',from_name:'Coach Ahmed Benali',to:'1003',
       subject:'Bilan mi-saison — Kylian Faure',
       body:'Bonjour,\n\nKylian progresse très bien cette saison.\n\nPoints forts : technique (8,4), leadership naturel.\nPoint à améliorer : endurance en fin de match.\n\nCordialement,\nCoach Ahmed Benali',
       ts:Date.now()-86400000, read_by:['coach'], priority:'normale', tag:'bilan'},
      {id:'dm2',from:'coach',from_name:'Coach Ahmed Benali',to:'all',
       subject:'Convocation — Match vs FC Belleville',
       body:'Votre enfant est convoqué samedi.\nRDV : 17h15 vestiaires.\nTenue officielle obligatoire.',
       ts:Date.now()-7200000, read_by:['coach'], priority:'haute', tag:'convocation'}
    ];
  }

  // ── Session ────────────────────────────────────────────────────
  function getSession() {
    try {
      var raw = localStorage.getItem(LS_SESS);
      if (!raw) return null;
      var d = JSON.parse(raw);
      if (!d) return null;
      if (d._exp && Date.now() > d._exp) {
        localStorage.removeItem(LS_SESS);
        return null;
      }
      return d;
    } catch(e) { return null; }
  }

  function setSession(data) {
    try { localStorage.setItem(LS_SESS, JSON.stringify(data)); } catch(e) {}
  }

  function clearSession() {
    try {
      [LS_SESS, LS_SCOUT, LS_DEMO, 'ffp_demo_events_set'].forEach(function(k) {
        localStorage.removeItem(k);
      });
    } catch(e) {}
  }

  // ── Détection mode démo via URL ────────────────────────────────
  function getDemoRole() {
    try {
      var m = window.location.search.match(/[?&]demo=([^&]+)/);
      return m ? m[1] : null;
    } catch(e) { return null; }
  }

  function injectDemoData() {
    // N'injecter qu'une seule fois par session
    if (localStorage.getItem('ffp_demo_events_set')) return;
    try {
      localStorage.setItem('ffp_events', JSON.stringify(_demoEvents()));
      localStorage.setItem('ffp_messages', JSON.stringify(_demoMessages()));
      localStorage.setItem('ffp_demo_events_set', '1');
    } catch(e) {}
  }

  // ── Bannière démo ──────────────────────────────────────────────
  function renderDemoBanner() {
    if (document.getElementById('ffp-demo-banner')) return;
    var b = document.createElement('div');
    b.id = 'ffp-demo-banner';
    b.style.cssText = (
      'position:fixed;bottom:0;left:0;right:0;z-index:99999;' +
      'background:rgba(10,8,0,.97);border-top:2px solid rgba(212,175,55,.4);' +
      'padding:8px 16px;display:flex;align-items:center;' +
      'justify-content:space-between;flex-wrap:wrap;gap:8px;' +
      'font-family:Montserrat,sans-serif'
    );
    b.innerHTML = (
      '<div style="display:flex;align-items:center;gap:10px">' +
        '<span style="background:rgba(75,200,138,.15);border:1px solid rgba(75,200,138,.4);' +
               'border-radius:6px;padding:3px 10px;font-size:9px;font-weight:700;' +
               'color:#4BC88A;letter-spacing:1px;text-transform:uppercase">' +
          '⚡ MODE DÉMO' +
        '</span>' +
        '<span style="font-size:11px;color:#888">Données fictives · AS Voltaire Paris</span>' +
      '</div>' +
      '<div style="display:flex;gap:8px">' +
        '<a href="ffp-demo.html" style="font-size:10px;font-weight:700;color:#D4AF37;' +
           'text-decoration:none;border:1px solid rgba(212,175,55,.25);' +
           'border-radius:5px;padding:4px 10px">' +
          '← Changer de profil' +
        '</a>' +
        '<a href="ffp-pricing.html" style="font-size:10px;font-weight:800;' +
           'background:linear-gradient(135deg,#D4AF37,#FBCB57);color:#000;' +
           'border-radius:5px;padding:4px 11px;text-decoration:none">' +
          'Créer un compte →' +
        '</a>' +
        '<button onclick="FFP.exitDemo()" style="background:transparent;' +
           'border:1px solid rgba(255,255,255,.1);border-radius:5px;' +
           'color:#666;padding:4px 9px;cursor:pointer;font-size:11px">✕</button>' +
      '</div>'
    );
    document.body.appendChild(b);
    document.body.style.paddingBottom = (b.offsetHeight + 8) + 'px';
  }

  // ── require() — fonction principale ────────────────────────────
  // Appeler en tête de page: var SESS = FFP.require(['coach','parent']);
  function require(allowedRoles, options) {
    options = options || {};
    var redirectTo = options.redirect || 'ffp-login.html';

    // 1. Vérifier si mode démo (URL ?demo=...)
    var demoRole = getDemoRole();
    if (demoRole) {
      var sessions = _demoSessions();
      var sess = sessions[demoRole];
      if (sess) {
        setSession(sess);
        localStorage.setItem(LS_DEMO, '1');
        if (demoRole === 'recruteur') {
          localStorage.setItem(LS_SCOUT, JSON.stringify(sess));
        }
        injectDemoData();
        // Afficher bannière après chargement DOM
        if (document.readyState === 'loading') {
          document.addEventListener('DOMContentLoaded', renderDemoBanner);
        } else {
          setTimeout(renderDemoBanner, 0);
        }
        return sess;
      }
    }

    // 2. Vérifier session existante
    var sess = getSession();

    // 3. Si session démo active (navigation entre pages)
    if (sess && sess._demo) {
      localStorage.setItem(LS_DEMO, '1');
      injectDemoData();
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', renderDemoBanner);
      } else {
        setTimeout(renderDemoBanner, 0);
      }
    }

    // 4. Pas de session → login
    if (!sess) {
      window.location.replace(redirectTo + '?next=' + encodeURIComponent(window.location.pathname));
      return null;
    }

    // 5. Vérifier le rôle
    if (allowedRoles && allowedRoles.length > 0) {
      if (allowedRoles.indexOf(sess.role) < 0) {
        // Scout peut aussi être authentifié via ffp_scout_session
        if (allowedRoles.indexOf('scout') >= 0) {
          try {
            var scRaw = localStorage.getItem(LS_SCOUT);
            if (scRaw) {
              var sc = JSON.parse(scRaw);
              if (sc && (!sc._exp || Date.now() < sc._exp)) return sc;
            }
          } catch(e) {}
        }
        window.location.replace(redirectTo);
        return null;
      }
    }

    return sess;
  }

  // ── Logout ────────────────────────────────────────────────────
  function logout() {
    clearSession();
    window.location.href = 'ffp-accueil.html';
  }

  function exitDemo() {
    clearSession();
    window.location.href = 'ffp-accueil.html';
  }

  // ── Exposer l'API publique ────────────────────────────────────
  return {
    require:      require,
    getSession:   getSession,
    setSession:   setSession,
    clearSession: clearSession,
    logout:       logout,
    exitDemo:     exitDemo,
    renderDemoBanner: renderDemoBanner
  };

})();
