// ══════════════════════════════════════════════════════
// FOOT FACTORY PRO — MODULE STRIPE
// Clé publishable intégrée — Payment Links + Checkout
// ══════════════════════════════════════════════════════

var FFP_STRIPE_PK = 'pk_live_51NIpIDFrZ51E91QlnREDH6F18d0S02ZO5QL9NnXQiwLOBDcEhxbzZJoSJSDByxpdz7mfWY7LEZDzRaSxnbWSiXsz00K7MCvKRK';

// ── Payment Links (à renseigner après création dans Stripe) ──────
// Dashboard Stripe → Payment Links → Create
// Format URL: https://buy.stripe.com/XXXXXXXXXX
var FFP_PAYMENT_LINKS = {
  club_base:       '', // Club Starter 29,90€/mois — À RENSEIGNER
  club_coach:      '', // Coach supplémentaire 0,99€/mois — À RENSEIGNER
  joueur_solo:     '', // Joueur 19,90€/an — À RENSEIGNER
  parent_solo:     '', // Parent 19,90€/an — À RENSEIGNER
  parent_joueur:   '', // Parent + Joueur 24,90€/an — À RENSEIGNER
  agent_solo:      '', // Agent 29,90€/mois — À RENSEIGNER
  agent_joueur:    '', // Agent + Joueur 39,90€/mois — À RENSEIGNER
  scout_solo:      '', // Recruteur Solo 29,90€/mois — À RENSEIGNER
  scout_multi5:    '', // Recruteur Multi 99,90€/mois — À RENSEIGNER
  scout_premium:   '', // Recruteur Premium 159,90€/mois — À RENSEIGNER
};

// ── Rediriger vers Payment Link Stripe ───────────────────────────
function stripeRedirect(plan, email, options) {
  options = options || {};
  var link = FFP_PAYMENT_LINKS[plan];

  if (!link) {
    console.warn('Payment Link non configuré pour le plan:', plan);
    alert('Ce plan n\u0027est pas encore disponible. Contactez contact@footfactorypro.com');
    return;
  }

  var url = link;
  var params = [];

  // Pré-remplir l'email si disponible
  if (email) params.push('prefilled_email=' + encodeURIComponent(email));

  // Pré-remplir le nom du club si disponible
  if (options.clubName) params.push('prefilled_promo_code=');

  // Métadonnées custom (passées via URL)
  if (options.clubId)    params.push('client_reference_id=' + encodeURIComponent(options.clubId));
  if (options.planExtra) params.push('quantity=' + (options.planExtra || 1));

  if (params.length) url += '?' + params.join('&');

  window.location.href = url;
}

// ── Vérifier si un plan a son Payment Link configuré ─────────────
function stripeIsConfigured(plan) {
  return !!(FFP_PAYMENT_LINKS[plan] && FFP_PAYMENT_LINKS[plan].length > 0);
}

// ── Afficher le statut de configuration dans l'admin ─────────────
function stripeStatusReport() {
  var configured = 0;
  var total = Object.keys(FFP_PAYMENT_LINKS).length;
  Object.keys(FFP_PAYMENT_LINKS).forEach(function(plan) {
    if (FFP_PAYMENT_LINKS[plan]) configured++;
  });
  return { configured: configured, total: total, ready: configured === total };
}
