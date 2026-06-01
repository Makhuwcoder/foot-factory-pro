// FOOT FACTORY PRO — ffp-stripe.js
// Payment Links Stripe — configurés le 01/06/2026

var FFP_STRIPE = {

  // ── Liens de paiement ──────────────────────────────────────────
  links: {
    club_base:        'https://buy.stripe.com/4gM4gz8Zf3s52fX8SE97G08',
    club_coach:       'https://buy.stripe.com/aFaaEX0sJ4w93k15Gs97G09',
    joueur_solo:      'https://buy.stripe.com/7sYdR9grH0fT6wdc4Q97G0a',
    parent_solo:      'https://buy.stripe.com/5kQ5kDejz8Mpf2J0m897G0b',
    parent_joueur:    'https://buy.stripe.com/8x28wPb7n7Il6wdc4Q97G0c',
    agent_solo:       'https://buy.stripe.com/cNi8wPgrH7Il1bTecY97G0d',
    agent_joueur:     'https://buy.stripe.com/3cI5kDgrHfaN2fX1qc97G0f',
    agent_joueur_supp:'https://buy.stripe.com/4gM00j2AR0fT7Ahgl697G0e',
    scout_solo:       'https://buy.stripe.com/8x2dR95N31jX07Pd8U97G0g',
    scout_multi5:     'https://buy.stripe.com/28E6oHdfvfaNf2J3yk97G0h',
    scout_premium:    'https://buy.stripe.com/7sY14n3EVbYB8Elc4Q97G0i'
  },

  // ── Catalogue des plans ────────────────────────────────────────
  plans: [
    {
      key: 'club_base',
      nom: 'Club Starter',
      prix: '29,90€/mois',
      desc: 'Jusqu\'à 1 coach · 30 joueurs · Tous les modules',
      cible: 'club',
      couleur: '#D4AF37',
      features: ['1 coach inclus','30 joueurs maximum','Évaluations IA','Messagerie parents','Convocations']
    },
    {
      key: 'club_coach',
      nom: 'Coach supplémentaire',
      prix: '0,99€/mois',
      desc: 'Ajouter un coach à un club existant',
      cible: 'club',
      couleur: '#FBCB57',
      features: ['Par coach additionnel','Accès complet','Même club']
    },
    {
      key: 'joueur_solo',
      nom: 'Joueur Solo',
      prix: '19,90€/an',
      desc: 'Accès individuel pour un joueur',
      cible: 'joueur',
      couleur: '#4BC88A',
      features: ['Fiche personnelle','Suivi de progression','Export PDF','Accès 1 an']
    },
    {
      key: 'parent_solo',
      nom: 'Parent',
      prix: '19,90€/an',
      desc: 'Suivi complet de votre enfant',
      cible: 'parent',
      couleur: '#A060E0',
      features: ['Fiche joueur complète','Radar IA','Messages coach','Événements & convocations']
    },
    {
      key: 'parent_joueur',
      nom: 'Parent + Joueur',
      prix: '24,90€/an',
      desc: 'Pack famille — parent et joueur réunis',
      cible: 'parent',
      couleur: '#C080FF',
      badge: 'Meilleure valeur',
      features: ['Accès parent complet','Accès joueur complet','1 seul abonnement','Économisez 14,90€']
    },
    {
      key: 'agent_solo',
      nom: 'Agent',
      prix: '29,90€/mois',
      desc: 'Gestion et suivi de vos joueurs',
      cible: 'agent',
      couleur: '#60A8D0',
      features: ['Suivi multi-joueurs','Rapports agents','Export confidentiel','Dashboard dédié']
    },
    {
      key: 'agent_joueur',
      nom: 'Agent + 1 Joueur',
      prix: '39,90€/mois',
      desc: 'Agent avec un joueur inclus',
      cible: 'agent',
      couleur: '#80C8F0',
      features: ['Tout Agent Solo','1 joueur inclus','Fiche complète','Accès IA']
    },
    {
      key: 'agent_joueur_supp',
      nom: 'Agent + 2 Joueurs ou plus',
      prix: 'Sur devis',
      desc: 'Pour les agents avec plusieurs joueurs',
      cible: 'agent',
      couleur: '#A0D8FF',
      features: ['Tout Agent + Joueur','Joueurs supplémentaires','Tarif dégressif','Contact personnalisé']
    },
    {
      key: 'scout_solo',
      nom: 'Recruteur Solo',
      prix: '29,90€/mois',
      desc: 'Accès recrutement 1 club',
      cible: 'scout',
      couleur: '#D4AF37',
      features: ['1 club accessible','30 profils filtrables','Shortlist illimitée','Export PDF confidentiel']
    },
    {
      key: 'scout_multi5',
      nom: 'Recruteur Multi',
      prix: '99,90€/mois',
      desc: 'Accès recrutement jusqu\'à 5 clubs',
      cible: 'scout',
      couleur: '#FBCB57',
      badge: 'Populaire',
      features: ['5 clubs accessibles','Comparaison multi-clubs','Filtres avancés','Rapports hebdo']
    },
    {
      key: 'scout_premium',
      nom: 'Recruteur Premium',
      prix: '159,90€/mois',
      desc: 'Accès recrutement jusqu\'à 10 clubs',
      cible: 'scout',
      couleur: '#D4AF37',
      badge: 'Premium',
      features: ['10 clubs accessibles','API accès données','Support dédié','Statistiques avancées']
    }
  ],

  // ── Fonction d'accès au lien ───────────────────────────────────
  getLink: function(key) {
    return this.links[key] || null;
  },

  // ── Redirection vers paiement ──────────────────────────────────
  pay: function(key, params) {
    var url = this.getLink(key);
    if (!url) { console.warn('Plan introuvable:', key); return; }
    // Passer email/nom si disponible (prefill Stripe)
    if (params && params.email) {
      url += (url.indexOf('?') >= 0 ? '&' : '?') + 'prefilled_email=' + encodeURIComponent(params.email);
    }
    window.location.href = url;
  },

  // ── Plan par cible ─────────────────────────────────────────────
  getPlansByCible: function(cible) {
    return this.plans.filter(function(p) { return p.cible === cible; });
  }
};
