// Données complètes pour les 12 signes astrologiques
// Capricorne, Verseau et Poissons

export const capricorneData = {
  element: 'Terre',
  quality: 'Cardinal',
  mantra: 'Je construis ma santé avec discipline et tradition.',
  focusSante: 'Os / Articulations / Structure',
  meals: {
    petitDejeuner: [
      { 
        nom: 'Porridge aux graines de sésame noir', 
        contenido: 'flocons d\'avoine, graines de sésame noir, lait d\'amande, miel noir', 
        icone: '🥣', 
        methodeCuisson: 'Cuisson traditionnelle lente : Faire mijoter l\'avoine 25 min à feu doux. Ajouter sésame noir grillé pour les os.',
        recette: 'Flocons d\'avoine 150g, graines de sésame noir 3 c.s., lait d\'amande 400ml, miel noir, dattes, noix.',
        bienfaits: 'Avoine pour énergie durable. Sésame noir riche en calcium pour les os du Capricorne. Miel noir pour minéraux.',
        saison: 'Hiver',
        influenceCosmique: 'Nouvelle Lune - Force structurelle',
        prix: 13.99,
        isPremium: true,
        cuisine: 'internationale' as const,
        difficulte: 'facile' as const,
        tempsPreparation: '30 min',
        portions: 2,
        imageUrl: 'https://readdy.ai/api/search-image?query=Luxury%20healthy%20breakfast%20photography%20of%20oatmeal%20porridge%20with%20black%20sesame%20seeds%2C%20almond%20milk%2C%20dark%20honey%2C%20dates%20and%20walnuts%2C%20elegant%20ceramic%20bowl%2C%20traditional%20presentation%2C%20high-end%20wellness%20styling&width=800&height=600&seq=porridge-capricorn-luxury&orientation=landscape',
        chef: 'Chef IA Structure',
        restaurant: 'Laboratoire Astro-Tradition'
      }
    ],
    dejeuner: [
      { 
        nom: 'Pot-au-feu traditionnel aux os à moelle', 
        contenido: 'bœuf à braiser, os à moelle, légumes racines, bouillon d\'os', 
        icone: '🍲', 
        methodeCuisson: 'Cuisson française ancestrale : Mijoter viande et os 4h à feu doux. Bouillon riche en collagène pour les os.',
        recette: 'Bœuf à braiser 1kg, os à moelle 4 pièces, carottes, navets, poireaux, céleri, bouquet garni, gros sel.',
        bienfaits: 'Bouillon d\'os riche en collagène pour articulations. Os à moelle pour calcium. Plat traditionnel pour le Capricorne.',
        origine: 'France',
        saison: 'Hiver',
        influenceCosmique: 'Nouvelle Lune - Force ancestrale',
        prix: 42.99,
        isPremium: true,
        cuisine: 'européenne' as const,
        difficulte: 'moyen' as const,
        tempsPreparation: '4h',
        portions: 6,
        imageUrl: 'https://readdy.ai/api/search-image?query=Luxury%20French%20cuisine%20photography%20of%20traditional%20pot-au-feu%20with%20braised%20beef%2C%20marrow%20bones%2C%20root%20vegetables%2C%20bone%20broth%2C%20rustic%20elegant%20presentation%2C%20ancestral%20recipe%2C%20high-end%20bistro%20styling&width=800&height=600&seq=pot-au-feu-capricorn-luxury&orientation=landscape',
        chef: 'Chef IA Tradition',
        restaurant: 'Atelier Astro-Bouillon'
      }
    ],
    diner: [
      { 
        nom: 'Bœuf bourguignon aux légumes racines', 
        contenido: 'bœuf de Charolais, vin de Bourgogne, carottes, panais, champignons', 
        icone: '🍖', 
        methodeCuisson: 'Cuisson française traditionnelle : Mariner bœuf 12h, mijoter 3h à feu doux. Tradition bourguignonne.',
        recette: 'Bœuf de Charolais 1kg, vin de Bourgogne rouge, carottes, panais, champignons, oignons grelots, lardons.',
        bienfaits: 'Bœuf riche en fer et protéines. Légumes racines pour minéraux. Cuisson lente pour le Capricorne patient.',
        origine: 'France',
        saison: 'Hiver',
        influenceCosmique: 'Nouvelle Lune - Tradition bourguignonne',
        prix: 48.99,
        isPremium: true,
        cuisine: 'européenne' as const,
        difficulte: 'difficile' as const,
        tempsPreparation: '12h + 3h',
        portions: 6,
        imageUrl: 'https://readdy.ai/api/search-image?query=Luxury%20French%20cuisine%20photography%20of%20beef%20bourguignon%20with%20Charolais%20beef%2C%20Burgundy%20wine%2C%20root%20vegetables%2C%20mushrooms%2C%20traditional%20cast%20iron%20pot%2C%20rustic%20elegant%20presentation%2C%20high-end%20bistro%20styling&width=800&height=600&seq=bourguignon-capricorn-luxury&orientation=landscape',
        chef: 'Chef IA Bourgogne',
        restaurant: 'Studio Astro-Tradition'
      }
    ]
  },
  drinks: {
    jus: { nom: 'Jus Terre solide', contenido: 'betterave • carotte • céleri • gingembre', icone: '🧃', saison: 'Toutes saisons' },
    smoothie: { nom: 'Smoothie Structure', contenido: 'banane • beurre d\'amande • sésame noir • lait d\'avoine', icone: '🥤', saison: 'Toutes saisons' }
  },
  tip: 'Construis avec patience — ta discipline et ta tradition sont les fondations de ta santé.'
};

export const verseauData = {
  element: 'Air',
  quality: 'Fixe',
  mantra: 'J\'innove ma nutrition avec créativité et conscience.',
  focusSante: 'Circulation / Système nerveux / Innovation',
  meals: {
    petitDejeuner: [
      { 
        nom: 'Smoothie bowl futuriste aux superaliments', 
        contenido: 'açaí bleu, spiruline, matcha, graines de chia, fruits exotiques', 
        icone: '🌌', 
        methodeCuisson: 'Préparation innovante : Mixer açaí avec spiruline bleue et matcha. Créer dégradé de couleurs futuriste.',
        recette: 'Açaí bleu 100g, spiruline bleue, matcha, graines de chia, fruits du dragon, kiwi, granola innovant.',
        bienfaits: 'Superaliments pour circulation du Verseau. Spiruline pour système nerveux. Présentation futuriste et innovante.',
        saison: 'Été',
        influenceCosmique: 'Nouvelle Lune - Innovation matinale',
        prix: 18.99,
        isPremium: true,
        cuisine: 'internationale' as const,
        difficulte: 'moyen' as const,
        tempsPreparation: '20 min',
        portions: 1,
        imageUrl: 'https://readdy.ai/api/search-image?query=Ultra%20luxury%20futuristic%20food%20photography%20of%20blue%20acai%20smoothie%20bowl%20with%20blue%20spirulina%2C%20matcha%2C%20chia%20seeds%2C%20dragon%20fruit%2C%20kiwi%2C%20innovative%20presentation%2C%20gradient%20colors%2C%20high-end%20wellness%20styling&width=800&height=600&seq=smoothie-aquarius-luxury&orientation=landscape',
        chef: 'Chef IA Innovation',
        restaurant: 'Laboratoire Astro-Futur'
      }
    ],
    dejeuner: [
      { 
        nom: 'Salade moléculaire aux perles d\'algues', 
        contenido: 'légumes innovants, perles d\'algues, vinaigrette moléculaire, fleurs', 
        icone: '🔬', 
        methodeCuisson: 'Technique moléculaire : Créer perles d\'algues par sphérification. Assembler salade avec innovation.',
        recette: 'Légumes variés, perles d\'algues (sphérification), vinaigrette moléculaire, fleurs comestibles, graines germées.',
        bienfaits: 'Algues pour circulation. Légumes pour vitamines. Technique moléculaire innovante pour le Verseau.',
        origine: 'International',
        saison: 'Printemps',
        influenceCosmique: 'Nouvelle Lune - Innovation culinaire',
        prix: 32.99,
        isPremium: true,
        cuisine: 'internationale' as const,
        difficulte: 'difficile' as const,
        tempsPreparation: '1h30',
        portions: 2,
        imageUrl: 'https://readdy.ai/api/search-image?query=Ultra%20luxury%20molecular%20gastronomy%20photography%20of%20innovative%20salad%20with%20seaweed%20pearls%2C%20molecular%20vinaigrette%2C%20edible%20flowers%2C%20sprouted%20seeds%2C%20scientific%20presentation%2C%20high-end%20avant-garde%20styling&width=800&height=600&seq=salad-aquarius-luxury&orientation=landscape',
        chef: 'Chef IA Moléculaire',
        restaurant: 'Atelier Astro-Science'
      }
    ],
    diner: [
      { 
        nom: 'Risotto aux algues et citron caviar', 
        contenido: 'riz Carnaroli, algues wakame, citron caviar, vin blanc, parmesan', 
        icone: '🍚', 
        methodeCuisson: 'Technique italienne innovante : Nacrer riz, ajouter algues et citron caviar. Innovation marine.',
        recette: 'Riz Carnaroli 300g, algues wakame, citron caviar, vin blanc, parmesan, beurre, bouillon de légumes.',
        bienfaits: 'Algues pour circulation et iode. Citron caviar pour vitamine C. Innovation pour le Verseau.',
        origine: 'Italie',
        saison: 'Printemps',
        influenceCosmique: 'Nouvelle Lune - Innovation marine',
        prix: 38.99,
        isPremium: true,
        cuisine: 'européenne' as const,
        difficulte: 'difficile' as const,
        tempsPreparation: '45 min',
        portions: 2,
        imageUrl: 'https://readdy.ai/api/search-image?query=Luxury%20Italian%20innovative%20cuisine%20photography%20of%20risotto%20with%20wakame%20seaweed%20and%20finger%20lime%20caviar%2C%20white%20wine%2C%20Parmesan%2C%20elegant%20presentation%2C%20marine%20innovation%2C%20high-end%20styling&width=800&height=600&seq=risotto-aquarius-luxury&orientation=landscape',
        chef: 'Chef IA Milan',
        restaurant: 'Studio Astro-Innovation'
      }
    ]
  },
  drinks: {
    jus: { nom: 'Jus Air électrique', contenido: 'citron • gingembre • spiruline bleue • eau de coco', icone: '🧃', saison: 'Toutes saisons' },
    smoothie: { nom: 'Smoothie Innovation', contenido: 'açaí bleu • matcha • fruits exotiques • lait d\'amande', icone: '🥤', saison: 'Toutes saisons' }
  },
  tip: 'Innove sans limites — ta créativité et ta conscience révolutionnent ta nutrition.'
};

export const poissonsData = {
  element: 'Eau',
  quality: 'Mutable',
  mantra: 'Je nourris mon âme avec intuition et douceur.',
  focusSante: 'Pieds / Système lymphatique / Intuition',
  meals: {
    petitDejeuner: [
      { 
        nom: 'Bol océanique aux fruits de mer', 
        contenido: 'yaourt grec, fruits de mer, algues, concombre, citron', 
        icone: '🌊', 
        methodeCuisson: 'Préparation marine douce : Mélanger yaourt avec fruits de mer pochés délicatement. Ajouter algues et concombre.',
        recette: 'Yaourt grec 200g, crevettes pochées, algues wakame, concombre, citron, aneth frais, huile d\'olive.',
        bienfaits: 'Yaourt pour probiotiques. Fruits de mer pour oméga-3 et circulation lymphatique. Algues pour minéraux du Poissons.',
        saison: 'Été',
        influenceCosmique: 'Nouvelle Lune - Douceur marine',
        prix: 16.99,
        isPremium: true,
        cuisine: 'internationale' as const,
        difficulte: 'facile' as const,
        tempsPreparation: '20 min',
        portions: 2,
        imageUrl: 'https://readdy.ai/api/search-image?query=Luxury%20oceanic%20breakfast%20photography%20of%20Greek%20yogurt%20bowl%20with%20poached%20seafood%2C%20wakame%20seaweed%2C%20cucumber%2C%20lemon%2C%20fresh%20dill%2C%20marine%20presentation%2C%20high-end%20wellness%20styling&width=800&height=600&seq=ocean-bowl-pisces-luxury&orientation=landscape',
        chef: 'Chef IA Océan',
        restaurant: 'Laboratoire Astro-Marine'
      }
    ],
    dejeuner: [
      { 
        nom: 'Ceviche de poisson blanc aux agrumes', 
        contenido: 'poisson blanc, agrumes variés, coriandre, piment doux, avocat', 
        icone: '🐟', 
        methodeCuisson: 'Préparation péruvienne douce : Mariner poisson dans jus d\'agrumes 30 min. Assembler délicatement.',
        recette: 'Poisson blanc 400g, citron, citron vert, orange, coriandre fraîche, piment doux, avocat, oignon rouge.',
        bienfaits: 'Poisson blanc léger pour digestion. Agrumes pour drainage lymphatique. Préparation crue douce pour le Poissons.',
        origine: 'Pérou',
        saison: 'Été',
        influenceCosmique: 'Nouvelle Lune - Fraîcheur marine',
        prix: 32.99,
        isPremium: true,
        cuisine: 'internationale' as const,
        difficulte: 'facile' as const,
        tempsPreparation: '45 min',
        portions: 3,
        imageUrl: 'https://readdy.ai/api/search-image?query=Luxury%20Peruvian%20cuisine%20photography%20of%20white%20fish%20ceviche%20with%20citrus%20fruits%2C%20cilantro%2C%20mild%20chili%2C%20avocado%2C%20elegant%20presentation%2C%20fresh%20marine%20styling%2C%20high-end%20seafood&width=800&height=600&seq=ceviche-pisces-luxury&orientation=landscape',
        chef: 'Chef IA Lima',
        restaurant: 'Atelier Astro-Ceviche'
      }
    ],
    diner: [
      { 
        nom: 'Bouillabaisse provençale aux poissons nobles', 
        contenido: 'poissons de roche, rouille, croûtons, safran, fenouil', 
        icone: '🍜', 
        methodeCuisson: 'Cuisson provençale traditionnelle : Mijoter poissons 1h avec safran et fenouil. Servir avec rouille.',
        recette: 'Poissons de roche variés, rouille maison, croûtons, safran, fenouil, tomates, pommes de terre.',
        bienfaits: 'Poissons pour oméga-3. Safran apaisant. Fenouil pour drainage lymphatique du Poissons.',
        origine: 'France',
        saison: 'Hiver',
        influenceCosmique: 'Nouvelle Lune - Tradition provençale',
        prix: 42.99,
        isPremium: true,
        cuisine: 'européenne' as const,
        difficulte: 'difficile' as const,
        tempsPreparation: '1h30',
        portions: 4,
        imageUrl: 'https://readdy.ai/api/search-image?query=Luxury%20Provencal%20cuisine%20photography%20of%20bouillabaisse%20with%20noble%20rock%20fish%2C%20rouille%2C%20croutons%2C%20saffron%2C%20fennel%2C%20traditional%20presentation%2C%20Mediterranean%20styling%2C%20high-end%20seafood&width=800&height=600&seq=bouillabaisse-pisces-luxury&orientation=landscape',
        chef: 'Chef IA Marseille',
        restaurant: 'Studio Astro-Bouillabaisse'
      }
    ]
  },
  drinks: {
    jus: { nom: 'Jus Eau intuitive', contenido: 'concombre • melon • menthe • eau de rose', icone: '🧃', saison: 'Toutes saisons' },
    smoothie: { nom: 'Smoothie Rêve violet', contenido: 'myrtilles • banane • lait d\'amande • lavande', icone: '🥤', saison: 'Toutes saisons' }
  },
  tip: 'Écoute ton intuition — ton âme sensible te guide vers la douceur et l\'harmonie.'
};
