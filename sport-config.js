// ══════════════════════════════════════════════════════
// ONE SPORT — RÉFÉRENTIEL MULTI-SPORT
// Source unique de vérité : postes, critères d'évaluation,
// exercices, terminologie match, branding. Un seul fichier
// à modifier pour ajouter un sport ou ajuster un référentiel.
// ══════════════════════════════════════════════════════

var SPORT_CONFIG = {

  football: {
    id: 'football',
    label: 'Football',
    logo: '/logo-one-sport-football-white.png',
    logoLight: '/logo-one-sport-football.png',
    accent: '#1565C0',
    ballIcon: '⚽',

    postes: ['Gardien','Défenseur Central','Latéral Droit','Latéral Gauche','Milieu Défensif','Milieu Central','Milieu Offensif','Ailier Droit','Ailier Gauche','Avant-Centre'],
    postesShort: {'Gardien':'GK','Défenseur Central':'DC','Latéral Droit':'LD','Latéral Gauche':'LG','Milieu Défensif':'MD','Milieu Central':'MC','Milieu Offensif':'MO','Ailier Droit':'AD','Ailier Gauche':'AG','Avant-Centre':'AC'},

    criteres: {
      technique: {controle:'Contrôle',dribble:'Dribble',frappe:'Frappe',passe:'Passe',tete:'Tête'},
      physique:  {vitesse:'Vitesse',endurance:'Endurance',force:'Force',coordination:'Coordination',souplesse:'Souplesse'},
      tactique:  {positionnement:'Positionnement',lecture:'Lecture du jeu',pressing:'Pressing'},
      mental:    {motivation:'Motivation',concentration:'Concentration',combativite:'Combativité',leadership:'Leadership',stress:'Gestion stress'},
      culture:   {reglesFIFA:'Règles FIFA',nutrition:'Nutrition',scolaire:'Scolaire',ethique:'Éthique'}
    },

    exercices: {
      controle:['Jongle + réception pied plat 15min/j','Passes contre mur rythme croissant'],
      dribble:['Slalom 10 piquets, 5x chaque pied','1v1 couloir 5m×10m'],
      frappe:['Frappes statiques 7m→16m','Finitions après dribble sur cône'],
      passe:['Triangles 3 joueurs à 10-15m','Passes longues + retournement'],
      tete:['Têtes ballon suspendu variable','Duo progressif'],
      vitesse:['Sprint 10m départ couché 8 séries','Poursuite 20×20m'],
      endurance:['Footing 20min modéré','Possession 4v4 réduit'],
      force:['Gainage planche 3×30s','Squats 3×15'],
      coordination:['Échelles rythme 5 patterns','Jongle + déplacement'],
      souplesse:['Étirements 15min post','Yoga sport 2×/sem'],
      positionnement:['Sans ballon : couvrir espaces','Vidéo match + analyse'],
      lecture:['Rondo 5v2 appels balle','Nommer partenaire libre avant réception'],
      pressing:['Pressing à 3 sur signal','Récup. haute 4v4'],
      motivation:['Journal objectifs hebdo','Visionnage matchs pros'],
      concentration:['Passes miroir yeux fermés','Jongle avec distracteur'],
      combativite:['Duels 1v1 chronométrés','Situation 0-2 à remonter'],
      leadership:['Capitanat 1 exercice/séance','Débriefing collectif'],
      stress:['Simulation penalty pression','Respiration 4-4-4'],
      reglesFIFA:['Quiz 10 questions/sem','1 grand match/semaine'],
      nutrition:['Repas pré-match appris','Fiche hydratation quotidienne'],
      scolaire:['Agenda sport-école tenu','30min étude avant entraîn.'],
      ethique:['Discussion valeurs fair-play','Rédiger charte personnelle']
    },

    match: {
      label: 'Match',
      periodeLabel: 'Mi-temps',
      nbPeriodes: 2,
      dureePeriode: 45,
      effectifTitulaires: 11,
      effectifMin: 7,
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
    ballIcon: '🏉',

    postes: ['Pilier','Talonneur','Deuxième Ligne','Troisième Ligne Aile','Troisième Ligne Centre','Demi de Mêlée','Demi d\'Ouverture','Centre','Ailier','Arrière'],
    postesShort: {'Pilier':'PI','Talonneur':'TA','Deuxième Ligne':'2L','Troisième Ligne Aile':'3LA','Troisième Ligne Centre':'3LC','Demi de Mêlée':'DM','Demi d\'Ouverture':'DO','Centre':'CE','Ailier':'AI','Arrière':'AR'},

    criteres: {
      technique: {plaquage:'Plaquage',passe:'Passe',jeuAuPied:'Jeu au pied',prise:'Prise de balle',melee:'Mêlée / Touche'},
      physique:  {vitesse:'Vitesse',endurance:'Endurance',force:'Force',explosivite:'Explosivité',robustesse:'Robustesse'},
      tactique:  {positionnement:'Positionnement',lecture:'Lecture du jeu',soutien:'Soutien / Placement'},
      mental:    {motivation:'Motivation',concentration:'Concentration',combativite:'Combativité',leadership:'Leadership',discipline:'Discipline (cartons)'},
      culture:   {reglesWorldRugby:'Règles World Rugby',nutrition:'Nutrition',scolaire:'Scolaire',ethique:'Éthique'}
    },

    exercices: {
      plaquage:['Plaquage sur sac 3x10 (haut/bas)','Technique cuisse-épaule en binôme, faible intensité'],
      passe:['Passes courtes en mouvement 5m, les 2 mains','Passe sous pression 2v1'],
      jeuAuPied:['Coups de pied vissés 10x chaque pied','Chandelles + course au ballon'],
      prise:['Réception de haut en mouvement 15min','Rucking : sécuriser le ballon au sol'],
      melee:['Position basse + poussée sur sac 4x20s','Séquence touche : saut + réception'],
      vitesse:['Sprint 10-20m départ varié 8 séries','Navettes courtes changement de direction'],
      endurance:['Fractionné 400m x 6, récup active','Possession/rucks enchaînés 15min'],
      force:['Squats + tirage 3x10','Gainage anti-rotation 3x30s'],
      explosivite:['Bondissements + sprint 6 séries','Départs plaqué-relevé-sprint'],
      robustesse:['Contact progressif en binôme','Circuit contact 4 ateliers'],
      positionnement:['Placement défensif en ligne, glisser sans se croiser','Vidéo match + repères de couloir'],
      lecture:['Jeu réduit 5v5 lecture d\'espace','Anticiper l\'appui du soutien avant le contact'],
      soutien:['Course de soutien systématique après chaque porteur','2v1 puis 3v2 avec soutien obligatoire'],
      motivation:['Journal d\'objectifs hebdo','Visionnage matchs internationaux'],
      concentration:['Répétition de gammes techniques sous fatigue','Consignes tactiques rappelées à voix haute'],
      combativite:['Duels de plaquage chronométrés','Situation infériorité numérique à défendre'],
      leadership:['Capitanat tournant à l\'entraînement','Débriefing collectif après chaque séquence'],
      discipline:['Analyse vidéo des fautes concédées','Simulation arbitrage strict à l\'entraînement'],
      reglesWorldRugby:['Quiz règles 10 questions/sem','1 match arbitré en autonomie/mois'],
      nutrition:['Repas pré-match appris','Fiche hydratation quotidienne'],
      scolaire:['Agenda sport-école tenu','30min étude avant entraîn.'],
      ethique:['Discussion valeurs du rugby (respect, camaraderie)','Rédiger charte personnelle']
    },

    match: {
      label: 'Match',
      periodeLabel: 'Mi-temps',
      nbPeriodes: 2,
      dureePeriode: 40,
      effectifTitulaires: 15,
      effectifMin: 10,
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
    ballIcon: '🏀',

    postes: ['Meneur','Arrière','Ailier','Ailier Fort','Pivot'],
    postesShort: {'Meneur':'MN','Arrière':'AR','Ailier':'AI','Ailier Fort':'AF','Pivot':'PI'},

    criteres: {
      technique: {tir:'Tir',dribble:'Dribble',passe:'Passe',rebond:'Rebond',defense:'Défense individuelle'},
      physique:  {vitesse:'Vitesse',detente:'Détente',endurance:'Endurance',coordination:'Coordination',force:'Force'},
      tactique:  {positionnement:'Positionnement',lecture:'Lecture du jeu',placement:'Placement défensif'},
      mental:    {motivation:'Motivation',concentration:'Concentration',combativite:'Combativité',leadership:'Leadership',stress:'Gestion stress'},
      culture:   {reglesFIBA:'Règles FIBA',nutrition:'Nutrition',scolaire:'Scolaire',ethique:'Éthique'}
    },

    exercices: {
      tir:['Tirs en catch-and-shoot 5 spots x10','Lancers-francs 2x20 en fin de séance fatigué'],
      dribble:['Maniement 2 ballons 10min','1v1 changements de direction cônes'],
      passe:['Passes à 2 mains poitrine/rebond en mouvement','Contre-attaque 3v2 passes rapides'],
      rebond:['Boxe-out en binôme 3x10','Rebonds offensifs répétés sur tir raté'],
      defense:['Glissades défensives ligne à ligne','1v1 défense sans faute 5x30s'],
      vitesse:['Sprints ligne à ligne 8 séries','Transition défense-attaque chronométrée'],
      detente:['Squats sautés 3x10','Sauts sur banc + réception équilibrée'],
      endurance:['Suicides (sprints progressifs) 6 séries','Match 4v4 terrain réduit 15min'],
      coordination:['Échelle de rythme + dribble simultané','Jonglage 2 balles en déplacement'],
      force:['Squats + gainage 3x12','Tirage + pompes 3x10'],
      positionnement:['Placement sans ballon : démarquage','Vidéo match + lecture des espaces'],
      lecture:['3v3 lecture du surnombre','Reconnaître la défense (homme à homme / zone)'],
      placement:['Rotation défensive sur aide','Fermeture de la ligne de passe'],
      motivation:['Journal objectifs hebdo','Visionnage matchs NBA/EuroLigue'],
      concentration:['Lancers-francs sous distraction sonore','Répétition de systèmes sous fatigue'],
      combativite:['1v1 chronométré intensité match','Situation de retard à combler'],
      leadership:['Capitanat tournant à l\'entraînement','Appels et communication défensive systématiques'],
      stress:['Lancers-francs en situation de match simulée','Respiration 4-4-4 avant tir décisif'],
      reglesFIBA:['Quiz règles 10 questions/sem','1 match arbitré en autonomie/mois'],
      nutrition:['Repas pré-match appris','Fiche hydratation quotidienne'],
      scolaire:['Agenda sport-école tenu','30min étude avant entraîn.'],
      ethique:['Discussion fair-play et respect arbitral','Rédiger charte personnelle']
    },

    match: {
      label: 'Match',
      periodeLabel: 'Quart-temps',
      nbPeriodes: 4,
      dureePeriode: 10,
      effectifTitulaires: 5,
      effectifMin: 5,
      unite: 'points'
    },

    joueurExtra: { pied: null }
  }

};

var SPORT_LIST = ['football', 'rugby', 'basketball'];

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

// Construit les 5 catégories {technique:{}, physique:{}, ...} remplies avec une valeur par défaut (ex: 0 ou 5.0)
function buildDefaultCriteres(sportId, val) {
  var cfg = getSportConfig(sportId);
  var out = {};
  ['technique','physique','tactique','mental','culture'].forEach(function(cat){
    out[cat] = {};
    Object.keys(cfg.criteres[cat] || {}).forEach(function(k){ out[cat][k] = val; });
  });
  return out;
}

// Construit les structures ECATS (catégories + icônes + couleurs + params) et ELBL (libellés à plat)
// utilisées par les pages d'évaluation coach pour un sport donné.
function buildEvalMeta(sportId) {
  var cfg = getSportConfig(sportId);
  var catDefs = [
    {key:'technique', lbl:'Technique', ico:cfg.ballIcon || '⚽', col:'#D4AF37'},
    {key:'physique',  lbl:'Physique',  ico:'💪', col:'#60A8D0'},
    {key:'tactique',  lbl:'Tactique',  ico:'♟',  col:'#8080D0'},
    {key:'mental',    lbl:'Mental',    ico:'🧠', col:'#C89020'},
    {key:'culture',   lbl:'Culture',   ico:'🎓', col:'#70C870'}
  ];
  var ecats = catDefs.map(function(c){
    return { key:c.key, lbl:c.lbl, ico:c.ico, col:c.col, params: Object.keys(cfg.criteres[c.key] || {}) };
  });
  var elbl = {};
  catDefs.forEach(function(c){
    var keys = cfg.criteres[c.key] || {};
    Object.keys(keys).forEach(function(k){ elbl[k] = keys[k]; });
  });
  return { ecats: ecats, elbl: elbl };
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { SPORT_CONFIG: SPORT_CONFIG, SPORT_LIST: SPORT_LIST, getSportConfig: getSportConfig, emptyCriteresFor: emptyCriteresFor, buildDefaultCriteres: buildDefaultCriteres, buildEvalMeta: buildEvalMeta };
}
