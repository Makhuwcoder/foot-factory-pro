// ══════════════════════════════════════════════════════
// ONE SPORT — RÉFÉRENTIEL MULTI-SPORT
// Source unique de vérité : postes, critères d'évaluation,
// terminologie match, branding. Un seul fichier à modifier
// pour ajouter un sport ou ajuster un référentiel existant.
// ══════════════════════════════════════════════════════

var SPORT_CONFIG = {

  football: {
    id: 'football',
    label: 'Football',
    logo: '/logo-one-sport-football-white.png',
    logoLight: '/logo-one-sport-football.png',
    accent: '#1565C0',

    postes: ['Gardien','Défenseur Central','Latéral Droit','Latéral Gauche','Milieu Défensif','Milieu Central','Milieu Offensif','Ailier Droit','Ailier Gauche','Avant-Centre'],
    postesShort: {'Gardien':'GK','Défenseur Central':'DC','Latéral Droit':'LD','Latéral Gauche':'LG','Milieu Défensif':'MD','Milieu Central':'MC','Milieu Offensif':'MO','Ailier Droit':'AD','Ailier Gauche':'AG','Avant-Centre':'AC'},

    criteres: {
      technique: {controle:'Contrôle',dribble:'Dribble',frappe:'Frappe',passe:'Passe',tete:'Jeu de tête'},
      physique:  {vitesse:'Vitesse',endurance:'Endurance',force:'Force',coordination:'Coordination',souplesse:'Souplesse'},
      tactique:  {positionnement:'Positionnement',lecture:'Lecture du jeu',pressing:'Pressing'},
      mental:    {motivation:'Motivation',concentration:'Concentration',combativite:'Combativité',leadership:'Leadership',stress:'Gestion du stress'},
      culture:   {reglesFIFA:'Règles FIFA',nutrition:'Nutrition',scolaire:'Suivi scolaire',ethique:'Éthique sportive'}
    },

    match: {
      label: 'Match',
      periodeLabel: 'Mi-temps',
      nbPeriodes: 2,
      dureePeriode: 45,
      effectifTitulaires: 11,
      unite: 'buts'
    },

    joueurExtra: { pied: { label: 'Pied fort', options: ['Droit','Gauche','Ambidextre'] } }
  },

  rugby: {
    id: 'rugby',
    label: 'Rugby',
    logo: '/logo-one-sport-rugby.png',
    logoLight: '/logo-one-sport-rugby.png',
    accent: '#2E7D32',

    postes: ['Pilier','Talonneur','Deuxième Ligne','Troisième Ligne Aile','Troisième Ligne Centre','Demi de Mêlée','Demi d\'Ouverture','Centre','Ailier','Arrière'],
    postesShort: {'Pilier':'PI','Talonneur':'TA','Deuxième Ligne':'2L','Troisième Ligne Aile':'3LA','Troisième Ligne Centre':'3LC','Demi de Mêlée':'DM','Demi d\'Ouverture':'DO','Centre':'CE','Ailier':'AI','Arrière':'AR'},

    criteres: {
      technique: {plaquage:'Plaquage',passe:'Passe',jeuAuPied:'Jeu au pied',prise:'Prise de balle',melee:'Mêlée / Touche'},
      physique:  {vitesse:'Vitesse',endurance:'Endurance',force:'Force',explosivite:'Explosivité',robustesse:'Robustesse'},
      tactique:  {positionnement:'Positionnement',lecture:'Lecture du jeu',soutien:'Soutien / Placement'},
      mental:    {motivation:'Motivation',concentration:'Concentration',combativite:'Combativité',leadership:'Leadership',discipline:'Discipline (cartons)'},
      culture:   {reglesWorldRugby:'Règles World Rugby',nutrition:'Nutrition',scolaire:'Suivi scolaire',ethique:'Éthique sportive'}
    },

    match: {
      label: 'Match',
      periodeLabel: 'Mi-temps',
      nbPeriodes: 2,
      dureePeriode: 40,
      effectifTitulaires: 15,
      unite: 'points'
    },

    joueurExtra: { pied: null }
  },

  basketball: {
    id: 'basketball',
    label: 'Basketball',
    logo: '/logo-one-sport-basketball.png',
    logoLight: '/logo-one-sport-basketball.png',
    accent: '#E65100',

    postes: ['Meneur','Arrière','Ailier','Ailier Fort','Pivot'],
    postesShort: {'Meneur':'MN','Arrière':'AR','Ailier':'AI','Ailier Fort':'AF','Pivot':'PI'},

    criteres: {
      technique: {tir:'Tir',dribble:'Dribble',passe:'Passe',rebond:'Rebond',defense:'Défense individuelle'},
      physique:  {vitesse:'Vitesse',detente:'Détente',endurance:'Endurance',coordination:'Coordination',force:'Force'},
      tactique:  {positionnement:'Positionnement',lecture:'Lecture du jeu',placement:'Placement défensif'},
      mental:    {motivation:'Motivation',concentration:'Concentration',combativite:'Combativité',leadership:'Leadership',stress:'Gestion du stress'},
      culture:   {reglesFIBA:'Règles FIBA',nutrition:'Nutrition',scolaire:'Suivi scolaire',ethique:'Éthique sportive'}
    },

    match: {
      label: 'Match',
      periodeLabel: 'Quart-temps',
      nbPeriodes: 4,
      dureePeriode: 10,
      effectifTitulaires: 5,
      unite: 'points'
    },

    joueurExtra: { pied: null }
  }

};

var SPORT_LIST = ['football','rugby','basketball'];

// ── Helpers ──────────────────────────────────────────
function getSportConfig(sportId) {
  return SPORT_CONFIG[sportId] || SPORT_CONFIG.football;
}

// Construit un objet vide {critere_key: null} prêt à être rempli, pour une categorie donnée (technique/physique/...)
function emptyCriteresFor(sportId, categorie) {
  var cfg = getSportConfig(sportId);
  var out = {};
  var keys = (cfg.criteres[categorie] || {});
  Object.keys(keys).forEach(function(k){ out[k] = null; });
  return out;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { SPORT_CONFIG: SPORT_CONFIG, SPORT_LIST: SPORT_LIST, getSportConfig: getSportConfig, emptyCriteresFor: emptyCriteresFor };
}
