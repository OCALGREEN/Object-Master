const pokémon = Object.freeze([
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
    ]);
    
    const idDivByThree = pokémon.filter( p => p.id%3 === 0); 

    const firePkmon = pokémon.filter( p => p.types[0] === "fire" || p.types[1] === "fire"); 

    const typesMoreThanOne = pokémon.filter( p => p.types.length > 1); 

    const pkmonNames = pokémon.map( p => p.name);

    const pkmonIdGreater99 = pokémon.filter( p => p.id > 99); 
    const pkmonIdGreater99Names = pkmonIdGreater99.map(p => p.name);

    const poisonTypePkmon = pokémon.filter( p => p.types[0] === "poison" || p.types[1] === "poison"); 
    const poisonTypePkmonNames = poisonTypePkmon.map( p => p.name); 

    const flyingTypePkmon = pokémon.filter( p => p.types[1] === "flying");
    const flyingTypePkmonFirstType = flyingTypePkmon.map( p => p.types[0]); 

    const normalTypePkmon = pokémon.filter( p => p.types[0] === "normal" || p.types[1] === "normal");
    const normalTypePkmonCount = normalTypePkmon.map( p => p.id); 
    console.log(normalTypePkmonCount.length); 