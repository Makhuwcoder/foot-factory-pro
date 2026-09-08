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
  },

  handball: {
    id: 'handball', label: 'Handball',
    logo: '/logo-one-sport-handball.png', logoLight: '/logo-one-sport-handball.png',
    accent: '#C0392B', ballIcon: '🤾',
    postes: ['Gardien','Ailier Droit','Ailier Gauche','Arrière Droit','Arrière Gauche','Demi-Centre','Pivot'],
    postesShort: {'Gardien':'GB','Ailier Droit':'AD','Ailier Gauche':'AG','Arrière Droit':'ArD','Arrière Gauche':'ArG','Demi-Centre':'DC','Pivot':'PV'},
    criteres: {
      technique: {tir:'Tir',passe:'Passe',dribble:'Dribble',feinte:'Feinte',defense:'Défense'},
      physique:  {vitesse:'Vitesse',detente:'Détente',endurance:'Endurance',force:'Force',coordination:'Coordination'},
      tactique:  {positionnement:'Positionnement',lecture:'Lecture du jeu',transition:'Transition / Contre-attaque'},
      mental:    {motivation:'Motivation',concentration:'Concentration',combativite:'Combativité',leadership:'Leadership',stress:'Gestion stress'},
      culture:   {reglesIHF:'Règles IHF',nutrition:'Nutrition',scolaire:'Scolaire',ethique:'Éthique'}
    },
    exercices: {
      tir:['Tirs en appui puis en suspension 5x10'],
      passe:['Passes à une main en course, les 2 côtés'],
      dribble:['Dribble de progression + feinte de corps'],
      feinte:['1c1 feinte de corps face à un défenseur'],
      defense:['Placement défensif 6-0 en glissade'],
      vitesse:['Sprints 15m départ varié 8 séries'],
      detente:['Squats sautés 3x10'],
      endurance:['Fractionné contre-attaques enchaînées'],
      force:['Gainage + tirage 3x12'],
      coordination:['Échelle de rythme + réception passe'],
      positionnement:['Placement sans ballon, appels de balle'],
      lecture:['Jeu réduit 4v4 lecture des intervalles'],
      transition:['Contre-attaque systématique après récupération'],
      motivation:['Journal d\'objectifs hebdo'],
      concentration:['Répétition gestes sous fatigue'],
      combativite:['Duels 1c1 chronométrés'],
      leadership:['Capitanat tournant à l\'entraînement'],
      stress:['Tirs de 7m en situation de pression'],
      reglesIHF:['Quiz règles 10 questions/sem'],
      nutrition:['Fiche hydratation quotidienne'],
      scolaire:['Agenda sport-école tenu'],
      ethique:['Discussion fair-play et respect arbitral']
    },
    match: { label:'Match', periodeLabel:'Mi-temps', nbPeriodes:2, dureePeriode:30, effectifTitulaires:7, effectifMin:5, unite:'buts' },
    joueurExtra: { pied: null }
  },

  volleyball: {
    id: 'volleyball', label: 'Volleyball',
    logo: '/logo-one-sport-volleyball.png', logoLight: '/logo-one-sport-volleyball.png',
    accent: '#1A6FBF', ballIcon: '🏐',
    postes: ['Passeur','Central','Réceptionneur-Attaquant','Pointu','Libéro'],
    postesShort: {'Passeur':'PA','Central':'CE','Réceptionneur-Attaquant':'RA','Pointu':'PO','Libéro':'LB'},
    criteres: {
      technique: {service:'Service',passe:'Passe',attaque:'Attaque',bloc:'Bloc',reception:'Réception'},
      physique:  {detente:'Détente',vitesse:'Vitesse',endurance:'Endurance',coordination:'Coordination',force:'Force'},
      tactique:  {positionnement:'Positionnement',lecture:'Lecture du jeu',placementBloc:'Placement au bloc'},
      mental:    {motivation:'Motivation',concentration:'Concentration',combativite:'Combativité',leadership:'Leadership',stress:'Gestion stress'},
      culture:   {reglesFIVB:'Règles FIVB',nutrition:'Nutrition',scolaire:'Scolaire',ethique:'Éthique'}
    },
    exercices: {
      service:['Services flottants 10x, viser des zones'],
      passe:['Passes à 2 mains en mouvement + relevé'],
      attaque:['Attaque ligne 4 après passe haute, 10 répétitions'],
      bloc:['Bloc en binôme sur attaque annoncée'],
      reception:['Réception service en rotation 15min'],
      detente:['Squats sautés + réception équilibrée 3x10'],
      vitesse:['Déplacements latéraux ligne à ligne'],
      endurance:['Échanges prolongés 6v6 15min'],
      coordination:['Jonglage + déplacement combiné'],
      force:['Gainage + épaules 3x12'],
      positionnement:['Rotation et couverture de zone'],
      lecture:['Lire l\'intention de l\'attaquant adverse'],
      placementBloc:['Lecture passeur adverse + saut au bloc'],
      motivation:['Journal d\'objectifs hebdo'],
      concentration:['Services sous distraction sonore'],
      combativite:['Échanges longs à finir absolument'],
      leadership:['Capitanat tournant, communication en rotation'],
      stress:['Service au score serré simulé'],
      reglesFIVB:['Quiz règles 10 questions/sem'],
      nutrition:['Fiche hydratation quotidienne'],
      scolaire:['Agenda sport-école tenu'],
      ethique:['Discussion fair-play et respect arbitral']
    },
    match: { label:'Match', periodeLabel:'Set', nbPeriodes:5, dureePeriode:0, effectifTitulaires:6, effectifMin:4, unite:'sets' },
    joueurExtra: { pied: null }
  },

  tennis: {
    id: 'tennis', label: 'Tennis',
    logo: '/logo-one-sport-tennis.png', logoLight: '/logo-one-sport-tennis.png',
    accent: '#8BC34A', ballIcon: '🎾',
    postes: ['Fond de Court','Service-Volée','Polyvalent','Attaquant','Défenseur'],
    postesShort: {'Fond de Court':'FC','Service-Volée':'SV','Polyvalent':'PO','Attaquant':'AT','Défenseur':'DF'},
    criteres: {
      technique: {coupDroit:'Coup droit',revers:'Revers',service:'Service',volee:'Volée',jeuDeJambes:'Jeu de jambes'},
      physique:  {vitesse:'Vitesse',endurance:'Endurance',explosivite:'Explosivité',coordination:'Coordination',souplesse:'Souplesse'},
      tactique:  {lecture:'Lecture du jeu',gestionPoints:'Gestion des points',placement:'Placement sur le court'},
      mental:    {motivation:'Motivation',concentration:'Concentration',combativite:'Combativité',autonomie:'Autonomie',stress:'Gestion de la pression'},
      culture:   {reglesFFT:'Règles FFT',nutrition:'Nutrition',scolaire:'Scolaire',ethique:'Éthique / auto-arbitrage'}
    },
    exercices: {
      coupDroit:['Coup droit croisé/long de ligne 20 répétitions'],
      revers:['Revers à une main en déplacement latéral'],
      service:['Services 1ère/2e balle, viser les carrés 10x'],
      volee:['Volées enchaînées au filet en binôme'],
      jeuDeJambes:['Déplacements en étoile + retour au centre'],
      vitesse:['Sprints courts multidirectionnels 8 séries'],
      endurance:['Échanges longs à rythme soutenu 20min'],
      explosivite:['Départs sur balle courte, 10 répétitions'],
      coordination:['Jonglage raquette + déplacement'],
      souplesse:['Étirements dynamiques pré-match'],
      lecture:['Anticiper la trajectoire adverse en échange dirigé'],
      gestionPoints:['Jouer les points importants à l\'entraînement (break/jeu décisif)'],
      placement:['Construction de point vers les angles'],
      motivation:['Journal d\'objectifs hebdo'],
      concentration:['Routine entre les points'],
      combativite:['Matchs simulés menant 0-4'],
      autonomie:['Gestion tactique d\'un set sans coaching'],
      stress:['Simulation balle de match à l\'entraînement'],
      reglesFFT:['Quiz règles + arbitrage 10 questions/sem'],
      nutrition:['Fiche hydratation par match'],
      scolaire:['Agenda sport-école tenu'],
      ethique:['Auto-arbitrage honnête, discussion fair-play']
    },
    match: { label:'Match', periodeLabel:'Set', nbPeriodes:3, dureePeriode:0, effectifTitulaires:1, effectifMin:1, unite:'sets' },
    joueurExtra: { pied: null }
  },

  judo: {
    id: 'judo', label: 'Judo',
    logo: '/logo-one-sport-judo.png', logoLight: '/logo-one-sport-judo.png',
    accent: '#0D1B3E', ballIcon: '🥋',
    postes: ['-60kg','-66kg','-73kg','-81kg','-90kg','-100kg','+100kg'],
    postesShort: {'-60kg':'-60','-66kg':'-66','-73kg':'-73','-81kg':'-81','-90kg':'-90','-100kg':'-100','+100kg':'+100'},
    criteres: {
      technique: {kumiKata:'Saisie (Kumi-kata)',tachiWaza:'Debout (Tachi-waza)',neWaza:'Sol (Ne-waza)',ukemi:'Chutes (Ukemi)',enchainements:'Enchaînements'},
      physique:  {vitesse:'Vitesse',force:'Force',explosivite:'Explosivité',souplesse:'Souplesse',endurance:'Endurance'},
      tactique:  {lecture:'Lecture de l\'adversaire',gestionCombat:'Gestion du combat',placement:'Placement / Déplacements'},
      mental:    {motivation:'Motivation',concentration:'Concentration',combativite:'Combativité',leadership:'Leadership',stress:'Gestion stress'},
      culture:   {codeMoral:'Code moral du judo',nutrition:'Nutrition',scolaire:'Scolaire',ethique:'Éthique'}
    },
    exercices: {
      kumiKata:['Travail de la saisie en opposition 10x'],
      tachiWaza:['Répétition uchi-komi sur 2 techniques debout'],
      neWaza:['Enchaînement immobilisation-retournement au sol'],
      ukemi:['Chutes avant/arrière/latérales, 15min'],
      enchainements:['Combinaison de 2 techniques liées'],
      vitesse:['Déplacements rapides en garde, 8 séries'],
      force:['Tirage + gainage spécifique judo 3x12'],
      explosivite:['Projections répétées sur mannequin'],
      souplesse:['Étirements articulaires post-séance'],
      endurance:['Randori enchaînés 5x3min'],
      lecture:['Randori dirigé : identifier la garde adverse'],
      gestionCombat:['Gestion du temps de combat restant'],
      placement:['Déplacements circulaires en garde'],
      motivation:['Journal d\'objectifs hebdo'],
      concentration:['Répétition technique sous fatigue'],
      combativite:['Randori en infériorité de score'],
      leadership:['Capitanat tournant sur les échauffements'],
      stress:['Golden score simulé à l\'entraînement'],
      codeMoral:['Discussion sur les valeurs du judo (politesse, courage, respect)'],
      nutrition:['Fiche hydratation et gestion du poids'],
      scolaire:['Agenda sport-école tenu'],
      ethique:['Salut et respect de l\'adversaire systématiques']
    },
    match: { label:'Combat', periodeLabel:'Golden Score', nbPeriodes:1, dureePeriode:4, effectifTitulaires:1, effectifMin:1, unite:'points' },
    joueurExtra: { pied: null }
  },

  natation: {
    id: 'natation', label: 'Natation',
    logo: '/logo-one-sport-natation.png', logoLight: '/logo-one-sport-natation.png',
    accent: '#16A085', ballIcon: '🏊',
    postes: ['Nage Libre','Dos','Brasse','Papillon','4 Nages'],
    postesShort: {'Nage Libre':'NL','Dos':'DO','Brasse':'BR','Papillon':'PA','4 Nages':'4N'},
    criteres: {
      technique: {depart:'Départ (plot)',virage:'Virage',coulee:'Coulée',respiration:'Respiration',gestuelle:'Gestuelle de nage'},
      physique:  {vitesse:'Vitesse',endurance:'Endurance',force:'Force',souplesse:'Souplesse',coordination:'Coordination'},
      tactique:  {gestionCourse:'Gestion de l\'allure',lecture:'Lecture de course',negociationVirages:'Négociation des virages'},
      mental:    {motivation:'Motivation',concentration:'Concentration',combativite:'Combativité',leadership:'Leadership',stress:'Gestion stress'},
      culture:   {reglesFINA:'Règles World Aquatics',nutrition:'Nutrition',scolaire:'Scolaire',ethique:'Éthique'}
    },
    exercices: {
      depart:['Plongeon départ 10 répétitions, temps de réaction'],
      virage:['Virages culbute enchaînés, 15min'],
      coulee:['Coulées ondulées 15m après chaque mur'],
      respiration:['Nage à respiration contrôlée (3/5/7 temps)'],
      gestuelle:['Travail technique par 25m, focus sur un défaut'],
      vitesse:['Séries de sprints 25-50m départ plot'],
      endurance:['Séries longues 400-800m allure régulière'],
      force:['Renforcement sec : gainage + tirage 3x12'],
      souplesse:['Étirements épaules/chevilles post-séance'],
      coordination:['Exercices de coordination bras-jambes dissociés'],
      gestionCourse:['Nager une course à allure ciblée, splits chronométrés'],
      lecture:['Analyse vidéo de course + ajustements'],
      negociationVirages:['Répétition virage à vitesse de course'],
      motivation:['Journal d\'objectifs hebdo'],
      concentration:['Routine d\'avant-course'],
      combativite:['Séries en opposition directe (nage à 2)'],
      leadership:['Capitanat tournant sur l\'échauffement collectif'],
      stress:['Simulation conditions de compétition'],
      reglesFINA:['Quiz règles 10 questions/sem'],
      nutrition:['Fiche hydratation et récupération'],
      scolaire:['Agenda sport-école tenu'],
      ethique:['Respect du règlement et fair-play en compétition']
    },
    match: { label:'Course', periodeLabel:'Série', nbPeriodes:1, dureePeriode:0, effectifTitulaires:1, effectifMin:1, unite:'temps' },
    joueurExtra: { pied: null }
  },

  athletisme: {
    id: 'athletisme', label: 'Athlétisme',
    logo: '/logo-one-sport-athletisme.png', logoLight: '/logo-one-sport-athletisme.png',
    accent: '#2471A3', ballIcon: '🏃',
    postes: ['Sprint','Demi-fond / Fond','Haies','Sauts','Lancers'],
    postesShort: {'Sprint':'SP','Demi-fond / Fond':'DF','Haies':'HA','Sauts':'SA','Lancers':'LA'},
    criteres: {
      technique: {depart:'Départ',gestuelle:'Gestuelle / Foulée',rythme:'Rythme de course',franchissement:'Franchissement (haies/sauts)',finition:'Finition (lancer/impulsion)'},
      physique:  {vitesse:'Vitesse',endurance:'Endurance',force:'Force',explosivite:'Explosivité',souplesse:'Souplesse'},
      tactique:  {gestionEffort:'Gestion de l\'effort',lecture:'Lecture de course',placement:'Placement / Tactique de course'},
      mental:    {motivation:'Motivation',concentration:'Concentration',combativite:'Combativité',leadership:'Leadership',stress:'Gestion stress'},
      culture:   {reglesWA:'Règles World Athletics',nutrition:'Nutrition',scolaire:'Scolaire',ethique:'Éthique'}
    },
    exercices: {
      depart:['Départs en starting-blocks 10 répétitions'],
      gestuelle:['Éducatifs de course technique 20min'],
      rythme:['Fractionné avec variations de rythme'],
      franchissement:['Franchissement de haies basses, technique de jambe'],
      finition:['Répétition du geste final (lancer/impulsion) 15x'],
      vitesse:['Sprints 30-60m départ varié'],
      endurance:['Fractionné 400-1000m selon spécialité'],
      force:['Musculation spécifique + pliométrie 3x10'],
      explosivite:['Bondissements et sauts répétés'],
      souplesse:['Étirements dynamiques pré-effort'],
      gestionEffort:['Course à allure imposée, splits chronométrés'],
      lecture:['Course tactique en peloton (demi-fond)'],
      placement:['Placement dans le couloir/aire de compétition'],
      motivation:['Journal d\'objectifs hebdo'],
      concentration:['Routine d\'avant-épreuve'],
      combativite:['Duels chronométrés en fin de séance'],
      leadership:['Capitanat tournant sur l\'échauffement collectif'],
      stress:['Simulation conditions de compétition'],
      reglesWA:['Quiz règles 10 questions/sem'],
      nutrition:['Fiche hydratation et récupération'],
      scolaire:['Agenda sport-école tenu'],
      ethique:['Respect du règlement et fair-play en compétition']
    },
    match: { label:'Épreuve', periodeLabel:'Série', nbPeriodes:1, dureePeriode:0, effectifTitulaires:1, effectifMin:1, unite:'temps/distance' },
    joueurExtra: { pied: null }
  },

  boxe: {
    id: 'boxe', label: 'Boxe',
    logo: '/logo-one-sport-boxe.png', logoLight: '/logo-one-sport-boxe.png',
    accent: '#CB4335', ballIcon: '🥊',
    postes: ['Poids Mouche','Poids Coq','Poids Plume','Poids Léger','Poids Welter','Poids Moyen','Poids Lourd'],
    postesShort: {'Poids Mouche':'MO','Poids Coq':'CO','Poids Plume':'PL','Poids Léger':'LE','Poids Welter':'WE','Poids Moyen':'MY','Poids Lourd':'LO'},
    criteres: {
      technique: {jab:'Jab',direct:'Direct',crochet:'Crochet',uppercut:'Uppercut',esquive:'Esquive / Garde'},
      physique:  {vitesse:'Vitesse',explosivite:'Explosivité',endurance:'Endurance',force:'Force',coordination:'Coordination'},
      tactique:  {lecture:'Lecture de l\'adversaire',gestionDistance:'Gestion de la distance',placement:'Placement / Déplacements'},
      mental:    {motivation:'Motivation',concentration:'Concentration',combativite:'Combativité',leadership:'Leadership',stress:'Gestion stress'},
      culture:   {reglesFFBoxe:'Règles Fédération',nutrition:'Nutrition',scolaire:'Scolaire',ethique:'Éthique'}
    },
    exercices: {
      jab:['Jab au sac 3x2min, précision et vitesse'],
      direct:['Combinaisons jab-direct en miroir'],
      crochet:['Crochets au sac, rotation du buste'],
      uppercut:['Uppercuts sur paos en binôme'],
      esquive:['Esquives + contre en binôme dirigé'],
      vitesse:['Vitesse de mains sur paos 3x2min'],
      explosivite:['Pompes claquées + shadow boxing explosif'],
      endurance:['Rounds enchaînés sac 5x3min'],
      force:['Gainage + tirage 3x12'],
      coordination:['Corde à sauter technique 10min'],
      lecture:['Sparring dirigé : lire les intentions adverses'],
      gestionDistance:['Travail de distance en shadow boxing'],
      placement:['Déplacements latéraux autour du sac'],
      motivation:['Journal d\'objectifs hebdo'],
      concentration:['Enchaînements techniques sous fatigue'],
      combativite:['Sparring léger en infériorité de round'],
      leadership:['Capitanat tournant sur l\'échauffement collectif'],
      stress:['Simulation conditions de combat officiel'],
      reglesFFBoxe:['Quiz règles et comptage des points'],
      nutrition:['Fiche hydratation et gestion du poids'],
      scolaire:['Agenda sport-école tenu'],
      ethique:['Respect de l\'adversaire et de l\'arbitrage']
    },
    match: { label:'Combat', periodeLabel:'Round', nbPeriodes:3, dureePeriode:3, effectifTitulaires:1, effectifMin:1, unite:'points' },
    joueurExtra: { pied: null }
  },

  cyclisme: {
    id: 'cyclisme', label: 'Cyclisme',
    logo: '/logo-one-sport-cyclisme.png', logoLight: '/logo-one-sport-cyclisme.png',
    accent: '#1E8449', ballIcon: '🚴',
    postes: ['Sprinteur','Grimpeur','Rouleur','Puncheur','Équipier'],
    postesShort: {'Sprinteur':'SP','Grimpeur':'GR','Rouleur':'RO','Puncheur':'PU','Équipier':'EQ'},
    criteres: {
      technique: {pedalage:'Pédalage',positionnement:'Position aérodynamique',franchissement:'Franchissement (virages/descentes)',relance:'Relance',gestionMateriel:'Gestion du matériel'},
      physique:  {puissance:'Puissance',endurance:'Endurance',vitesse:'Vitesse de pointe',recuperation:'Récupération',souplesse:'Souplesse'},
      tactique:  {lecture:'Lecture de course',placementPeloton:'Placement dans le peloton',gestionEffort:'Gestion de l\'effort'},
      mental:    {motivation:'Motivation',concentration:'Concentration',combativite:'Combativité',leadership:'Leadership',stress:'Gestion stress'},
      culture:   {reglesUCI:'Règles UCI',nutrition:'Nutrition',scolaire:'Scolaire',ethique:'Éthique'}
    },
    exercices: {
      pedalage:['Travail de cadence 90-100rpm, 20min'],
      positionnement:['Position aéro tenue sur home-trainer'],
      franchissement:['Répétition de virages à allure progressive'],
      relance:['Relances après virage, 10x'],
      gestionMateriel:['Changement de roue/réglages en autonomie'],
      puissance:['Séries de côtes en seuil, 5x5min'],
      endurance:['Sortie longue à allure régulière'],
      vitesse:['Sprints 200-500m départ lancé'],
      recuperation:['Retour au calme + étirements post-sortie'],
      souplesse:['Étirements dos/ischios post-effort'],
      lecture:['Course dirigée : lecture des attaques'],
      placementPeloton:['Travail de placement en peloton simulé'],
      gestionEffort:['Course à allure imposée avec relances'],
      motivation:['Journal d\'objectifs hebdo'],
      concentration:['Maintien de trajectoire sous fatigue'],
      combativite:['Attaques répétées en fin de séance'],
      leadership:['Rôle d\'équipier-protecteur à l\'entraînement'],
      stress:['Simulation conditions de course officielle'],
      reglesUCI:['Quiz règles 10 questions/sem'],
      nutrition:['Fiche hydratation et alimentation d\'effort'],
      scolaire:['Agenda sport-école tenu'],
      ethique:['Respect du peloton et fair-play en course']
    },
    match: { label:'Course', periodeLabel:'Étape', nbPeriodes:1, dureePeriode:0, effectifTitulaires:6, effectifMin:1, unite:'temps/classement' },
    joueurExtra: { pied: null }
  },

  esport: {
    id: 'esport', label: 'Esport',
    logo: '/logo-one-sport-esport.png', logoLight: '/logo-one-sport-esport.png',
    accent: '#6C3483', ballIcon: '🎮',
    postes: ['IGL / Stratège','Duelliste','Support','Sentinelle','Remplaçant'],
    postesShort: {'IGL / Stratège':'IGL','Duelliste':'DU','Support':'SU','Sentinelle':'SE','Remplaçant':'RE'},
    criteres: {
      technique: {aim:'Précision (aim)',mecanique:'Exécution mécanique',gameSense:'Game sense',utilisation:'Utilisation objets/skills',reflexes:'Réflexes'},
      physique:  {reflexes:'Réflexes physiques',endurance:'Endurance (sessions longues)',coordination:'Coordination main-œil',posture:'Posture / Ergonomie',recuperation:'Récupération'},
      tactique:  {lecture:'Lecture macro du jeu',communication:'Communication',placement:'Placement / Rotations'},
      mental:    {motivation:'Motivation',concentration:'Concentration',combativite:'Combativité',leadership:'Leadership',stress:'Gestion stress'},
      culture:   {reglesCompetition:'Règlement de compétition',nutrition:'Hygiène de vie',scolaire:'Scolaire',ethique:'Éthique / Anti-triche'}
    },
    exercices: {
      aim:['Routine aim-trainer 15min avant session'],
      mecanique:['Répétition de combos/mécaniques en training room'],
      gameSense:['Analyse VOD : décisions clés de la partie'],
      utilisation:['Drills d\'utilisation d\'objets/compétences en situation'],
      reflexes:['Exercices de réaction (réflexe visuel) 10min'],
      endurance:['Sessions longues avec pauses actives programmées'],
      coordination:['Exercices de coordination main-œil dédiés'],
      posture:['Correction posture/écran, pauses toutes les 45min'],
      recuperation:['Sommeil et coupure écran encadrés'],
      lecture:['Analyse VOD : lecture de la macro adverse'],
      communication:['Callouts structurés à l\'entraînement'],
      placement:['Drills de rotation et placement de carte'],
      motivation:['Journal d\'objectifs hebdo'],
      concentration:['Sessions sans distraction, focus 45min'],
      combativite:['Scrims en infériorité simulée'],
      leadership:['Rôle d\'IGL tournant à l\'entraînement'],
      stress:['Simulation match officiel / clutch situations'],
      reglesCompetition:['Quiz règlement de la ligue/tournoi'],
      nutrition:['Fiche hygiène de vie (sommeil, écrans, hydratation)'],
      scolaire:['Agenda sport-école tenu'],
      ethique:['Sensibilisation anti-triche et fair-play']
    },
    match: { label:'Match', periodeLabel:'Manche', nbPeriodes:3, dureePeriode:0, effectifTitulaires:5, effectifMin:5, unite:'rounds' },
    joueurExtra: { pied: null }
  }


};

var SPORT_LIST = ['football', 'rugby', 'basketball', 'handball', 'volleyball', 'tennis', 'judo', 'natation', 'athletisme', 'boxe', 'cyclisme', 'esport'];

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
