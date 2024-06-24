import React, { useEffect, useState } from 'react';
import PokeCard from './PokeCard';
import { useSearch } from './SearchContext';

type Pokedex = {
    [key: string]: string;
};

type PokedexTypes = {
    [key: string]: Array<string>;
};

const pokedex: Pokedex = {
    '1': 'Bulbasaur',
    '2': 'Ivysaur',
    '3': 'Venusaur',
    '4': 'Charmander',
    '5': 'Charmeleon',
    '6': 'Charizard',
    '7': 'Squirtle',
    '8': 'Wartortle',
    '9': 'Blastoise',
    '10': 'Caterpie',
    '11': 'Metapod',
    '12': 'Butterfree',
    '13': 'Weedle',
    '14': 'Kakuna',
    '15': 'Beedrill',
    '16': 'Pidgey',
    '17': 'Pidgeotto',
    '18': 'Pidgeot',
    '19': 'Rattata',
    '20': 'Raticate',
    '21': 'Spearow',
    '22': 'Fearow',
    '23': 'Ekans',
    '24': 'Arbok',
    '25': 'Pikachu',
    '26': 'Raichu',
    '27': 'Sandshrew',
    '28': 'Sandslash',
    '29': 'Nidoran-f',
    '30': 'Nidorina',
    '31': 'Nidoqueen',
    '32': 'Nidoran-m',
    '33': 'Nidorino',
    '34': 'Nidoking',
    '35': 'Clefairy',
    '36': 'Clefable',
    '37': 'Vulpix',
    '38': 'Ninetales',
    '39': 'Jigglypuff',
    '40': 'Wigglytuff',
    '41': 'Zubat',
    '42': 'Golbat',
    '43': 'Oddish',
    '44': 'Gloom',
    '45': 'Vileplume',
    '46': 'Paras',
    '47': 'Parasect',
    '48': 'Venonat',
    '49': 'Venomoth',
    '50': 'Diglett',
    '51': 'Dugtrio',
    '52': 'Meowth',
    '53': 'Persian',
    '54': 'Psyduck',
    '55': 'Golduck',
    '56': 'Mankey',
    '57': 'Primeape',
    '58': 'Growlithe',
    '59': 'Arcanine',
    '60': 'Poliwag',
    '61': 'Poliwhirl',
    '62': 'Poliwrath',
    '63': 'Abra',
    '64': 'Kadabra',
    '65': 'Alakazam',
    '66': 'Machop',
    '67': 'Machoke',
    '68': 'Machamp',
    '69': 'Bellsprout',
    '70': 'Weepinbell',
    '71': 'Victreebel',
    '72': 'Tentacool',
    '73': 'Tentacruel',
    '74': 'Geodude',
    '75': 'Graveler',
    '76': 'Golem',
    '77': 'Ponyta',
    '78': 'Rapidash',
    '79': 'Slowpoke',
    '80': 'Slowbro',
    '81': 'Magnemite',
    '82': 'Magneton',
    '83': "Farfetch'd",
    '84': 'Doduo',
    '85': 'Dodrio',
    '86': 'Seel',
    '87': 'Dewgong',
    '88': 'Grimer',
    '89': 'Muk',
    '90': 'Shellder',
    '91': 'Cloyster',
    '92': 'Gastly',
    '93': 'Haunter',
    '94': 'Gengar',
    '95': 'Onix',
    '96': 'Drowzee',
    '97': 'Hypno',
    '98': 'Krabby',
    '99': 'Kingler',
    '100': 'Voltorb',
    '101': 'Electrode',
    '102': 'Exeggcute',
    '103': 'Exeggutor',
    '104': 'Cubone',
    '105': 'Marowak',
    '106': 'Hitmonlee',
    '107': 'Hitmonchan',
    '108': 'Lickitung',
    '109': 'Koffing',
    '110': 'Weezing',
    '111': 'Rhyhorn',
    '112': 'Rhydon',
    '113': 'Chansey',
    '114': 'Tangela',
    '115': 'Kangaskhan',
    '116': 'Horsea',
    '117': 'Seadra',
    '118': 'Goldeen',
    '119': 'Seaking',
    '120': 'Staryu',
    '121': 'Starmie',
    '122': 'Mr. Mime',
    '123': 'Scyther',
    '124': 'Jynx',
    '125': 'Electabuzz',
    '126': 'Magmar',
    '127': 'Pinsir',
    '128': 'Tauros',
    '129': 'Magikarp',
    '130': 'Gyarados',
    '131': 'Lapras',
    '132': 'Ditto',
    '133': 'Eevee',
    '134': 'Vaporeon',
    '135': 'Jolteon',
    '136': 'Flareon',
    '137': 'Porygon',
    '138': 'Omanyte',
    '139': 'Omastar',
    '140': 'Kabuto',
    '141': 'Kabutops',
    '142': 'Aerodactyl',
    '143': 'Snorlax',
    '144': 'Articuno',
    '145': 'Zapdos',
    '146': 'Moltres',
    '147': 'Dratini',
    '148': 'Dragonair',
    '149': 'Dragonite',
    '150': 'Mewtwo',
    '151': 'Mew',
    '152': 'Chikorita',
    '153': 'Bayleef',
    '154': 'Meganium',
    '155': 'Cyndaquil',
    '156': 'Quilava',
    '157': 'Typhlosion',
    '158': 'Totodile',
    '159': 'Croconaw',
    '160': 'Feraligatr',
    '161': 'Sentret',
    '162': 'Furret',
    '163': 'Hoothoot',
    '164': 'Noctowl',
    '165': 'Ledyba',
    '166': 'Ledian',
    '167': 'Spinarak',
    '168': 'Ariados',
    '169': 'Crobat',
    '170': 'Chinchou',
    '171': 'Lanturn',
    '172': 'Pichu',
    '173': 'Cleffa',
    '174': 'Igglybuff',
    '175': 'Togepi',
    '176': 'Togetic',
    '177': 'Natu',
    '178': 'Xatu',
    '179': 'Mareep',
    '180': 'Flaaffy',
    '181': 'Ampharos',
    '182': 'Bellossom',
    '183': 'Marill',
    '184': 'Azumarill',
    '185': 'Sudowoodo',
    '186': 'Politoed',
    '187': 'Hoppip',
    '188': 'Skiploom',
    '189': 'Jumpluff',
    '190': 'Aipom',
    '191': 'Sunkern',
    '192': 'Sunflora',
    '193': 'Yanma',
    '194': 'Wooper',
    '195': 'Quagsire',
    '196': 'Espeon',
    '197': 'Umbreon',
    '198': 'Murkrow',
    '199': 'Slowking',
    '200': 'Misdreavus',
    '201': 'Unown',
    '202': 'Wobbuffet',
    '203': 'Girafarig',
    '204': 'Pineco',
    '205': 'Forretress',
    '206': 'Dunsparce',
    '207': 'Gligar',
    '208': 'Steelix',
    '209': 'Snubbull',
    '210': 'Granbull',
    '211': 'Qwilfish',
    '212': 'Scizor',
    '213': 'Shuckle',
    '214': 'Heracross',
    '215': 'Sneasel',
    '216': 'Teddiursa',
    '217': 'Ursaring',
    '218': 'Slugma',
    '219': 'Magcargo',
    '220': 'Swinub',
    '221': 'Piloswine',
    '222': 'Corsola',
    '223': 'Remoraid',
    '224': 'Octillery',
    '225': 'Delibird',
    '226': 'Mantine',
    '227': 'Skarmory',
    '228': 'Houndour',
    '229': 'Houndoom',
    '230': 'Kingdra',
    '231': 'Phanpy',
    '232': 'Donphan',
    '233': 'Porygon2',
    '234': 'Stantler',
    '235': 'Smeargle',
    '236': 'Tyrogue',
    '237': 'Hitmontop',
    '238': 'Smoochum',
    '239': 'Elekid',
    '240': 'Magby',
    '241': 'Miltank',
    '242': 'Blissey',
    '243': 'Raikou',
    '244': 'Entei',
    '245': 'Suicune',
    '246': 'Larvitar',
    '247': 'Pupitar',
    '248': 'Tyranitar',
    '249': 'Lugia',
    '250': 'Ho-oh',
    '251': 'Celebi',
    '252': 'Treecko',
    '253': 'Grovyle',
    '254': 'Sceptile',
    '255': 'Torchic',
    '256': 'Combusken',
    '257': 'Blaziken',
    '258': 'Mudkip',
    '259': 'Marshtomp',
    '260': 'Swampert',
    '261': 'Poochyena',
    '262': 'Mightyena',
    '263': 'Zigzagoon',
    '264': 'Linoone',
    '265': 'Wurmple',
    '266': 'Silcoon',
    '267': 'Beautifly',
    '268': 'Cascoon',
    '269': 'Dustox',
    '270': 'Lotad',
    '271': 'Lombre',
    '272': 'Ludicolo',
    '273': 'Seedot',
    '274': 'Nuzleaf',
    '275': 'Shiftry',
    '276': 'Taillow',
    '277': 'Swellow',
    '278': 'Wingull',
    '279': 'Pelipper',
    '280': 'Ralts',
    '281': 'Kirlia',
    '282': 'Gardevoir',
    '283': 'Surskit',
    '284': 'Masquerain',
    '285': 'Shroomish',
    '286': 'Breloom',
    '287': 'Slakoth',
    '288': 'Vigoroth',
    '289': 'Slaking',
    '290': 'Nincada',
    '291': 'Ninjask',
    '292': 'Shedinja',
    '293': 'Whismur',
    '294': 'Loudred',
    '295': 'Exploud',
    '296': 'Makuhita',
    '297': 'Hariyama',
    '298': 'Azurill',
    '299': 'Nosepass',
    '300': 'Skitty',
    '301': 'Delcatty',
    '302': 'Sableye',
    '303': 'Mawile',
    '304': 'Aron',
    '305': 'Lairon',
    '306': 'Aggron',
    '307': 'Meditite',
    '308': 'Medicham',
    '309': 'Electrike',
    '310': 'Manectric',
    '311': 'Plusle',
    '312': 'Minun',
    '313': 'Volbeat',
    '314': 'Illumise',
    '315': 'Roselia',
    '316': 'Gulpin',
    '317': 'Swalot',
    '318': 'Carvanha',
    '319': 'Sharpedo',
    '320': 'Wailmer',
    '321': 'Wailord',
    '322': 'Numel',
    '323': 'Camerupt',
    '324': 'Torkoal',
    '325': 'Spoink',
    '326': 'Grumpig',
    '327': 'Spinda',
    '328': 'Trapinch',
    '329': 'Vibrava',
    '330': 'Flygon',
    '331': 'Cacnea',
    '332': 'Cacturne',
    '333': 'Swablu',
    '334': 'Altaria',
    '335': 'Zangoose',
    '336': 'Seviper',
    '337': 'Lunatone',
    '338': 'Solrock',
    '339': 'Barboach',
    '340': 'Whiscash',
    '341': 'Corphish',
    '342': 'Crawdaunt',
    '343': 'Baltoy',
    '344': 'Claydol',
    '345': 'Lileep',
    '346': 'Cradily',
    '347': 'Anorith',
    '348': 'Armaldo',
    '349': 'Feebas',
    '350': 'Milotic',
    '351': 'Castform',
    '352': 'Kecleon',
    '353': 'Shuppet',
    '354': 'Banette',
    '355': 'Duskull',
    '356': 'Dusclops',
    '357': 'Tropius',
    '358': 'Chimecho',
    '359': 'Absol',
    '360': 'Wynaut',
    '361': 'Snorunt',
    '362': 'Glalie',
    '363': 'Spheal',
    '364': 'Sealeo',
    '365': 'Walrein',
    '366': 'Clamperl',
    '367': 'Huntail',
    '368': 'Gorebyss',
    '369': 'Relicanth',
    '370': 'Luvdisc',
    '371': 'Bagon',
    '372': 'Shelgon',
    '373': 'Salamence',
    '374': 'Beldum',
    '375': 'Metang',
    '376': 'Metagross',
    '377': 'Regirock',
    '378': 'Regice',
    '379': 'Registeel',
    '380': 'Latias',
    '381': 'Latios',
    '382': 'Kyogre',
    '383': 'Groudon',
    '384': 'Rayquaza',
    '385': 'Jirachi',
    '386': 'Deoxys',
    '387': 'Turtwig',
    '388': 'Grotle',
    '389': 'Torterra',
    '390': 'Chimchar',
    '391': 'Monferno',
    '392': 'Infernape',
    '393': 'Piplup',
    '394': 'Prinplup',
    '395': 'Empoleon',
    '396': 'Starly',
    '397': 'Staravia',
    '398': 'Staraptor',
    '399': 'Bidoof',
    '400': 'Bibarel',
    '401': 'Kricketot',
    '402': 'Kricketune',
    '403': 'Shinx',
    '404': 'Luxio',
    '405': 'Luxray',
    '406': 'Budew',
    '407': 'Roserade',
    '408': 'Cranidos',
    '409': 'Rampardos',
    '410': 'Shieldon',
    '411': 'Bastiodon',
    '412': 'Burmy',
    '413': 'Wormadam',
    '414': 'Mothim',
    '415': 'Combee',
    '416': 'Vespiquen',
    '417': 'Pachirisu',
    '418': 'Buizel',
    '419': 'Floatzel',
    '420': 'Cherubi',
    '421': 'Cherrim',
    '422': 'Shellos',
    '423': 'Gastrodon',
    '424': 'Ambipom',
    '425': 'Drifloon',
    '426': 'Drifblim',
    '427': 'Buneary',
    '428': 'Lopunny',
    '429': 'Mismagius',
    '430': 'Honchkrow',
    '431': 'Glameow',
    '432': 'Purugly',
    '433': 'Chingling',
    '434': 'Stunky',
    '435': 'Skuntank',
    '436': 'Bronzor',
    '437': 'Bronzong',
    '438': 'Bonsly',
    '439': 'Mime Jr.',
    '440': 'Happiny',
    '441': 'Chatot',
    '442': 'Spiritomb',
    '443': 'Gible',
    '444': 'Gabite',
    '445': 'Garchomp',
    '446': 'Munchlax',
    '447': 'Riolu',
    '448': 'Lucario',
    '449': 'Hippopotas',
    '450': 'Hippowdon',
    '451': 'Skorupi',
    '452': 'Drapion',
    '453': 'Croagunk',
    '454': 'Toxicroak',
    '455': 'Carnivine',
    '456': 'Finneon',
    '457': 'Lumineon',
    '458': 'Mantyke',
    '459': 'Snover',
    '460': 'Abomasnow',
    '461': 'Weavile',
    '462': 'Magnezone',
    '463': 'Lickilicky',
    '464': 'Rhyperior',
    '465': 'Tangrowth',
    '466': 'Electivire',
    '467': 'Magmortar',
    '468': 'Togekiss',
    '469': 'Yanmega',
    '470': 'Leafeon',
    '471': 'Glaceon',
    '472': 'Gliscor',
    '473': 'Mamoswine',
    '474': 'Porygon-Z',
    '475': 'Gallade',
    '476': 'Probopass',
    '477': 'Dusknoir',
    '478': 'Froslass',
    '479': 'Rotom',
    '480': 'Uxie',
    '481': 'Mesprit',
    '482': 'Azelf',
    '483': 'Dialga',
    '484': 'Palkia',
    '485': 'Heatran',
    '486': 'Regigigas',
    '487': 'Giratina',
    '488': 'Cresselia',
    '489': 'Phione',
    '490': 'Manaphy',
    '491': 'Darkrai',
    '492': 'Shaymin',
    '493': 'Arceus',
    '494': 'Victini',
    '495': 'Snivy',
    '496': 'Servine',
    '497': 'Serperior',
    '498': 'Tepig',
    '499': 'Pignite',
    '500': 'Emboar',
    '501': 'Oshawott',
    '502': 'Dewott',
    '503': 'Samurott',
    '504': 'Patrat',
    '505': 'Watchog',
    '506': 'Lillipup',
    '507': 'Herdier',
    '508': 'Stoutland',
    '509': 'Purrloin',
    '510': 'Liepard',
    '511': 'Pansage',
    '512': 'Simisage',
    '513': 'Pansear',
    '514': 'Simisear',
    '515': 'Panpour',
    '516': 'Simipour',
    '517': 'Munna',
    '518': 'Musharna',
    '519': 'Pidove',
    '520': 'Tranquill',
    '521': 'Unfezant',
    '522': 'Blitzle',
    '523': 'Zebstrika',
    '524': 'Roggenrola',
    '525': 'Boldore',
    '526': 'Gigalith',
    '527': 'Woobat',
    '528': 'Swoobat',
    '529': 'Drilbur',
    '530': 'Excadrill',
    '531': 'Audino',
    '532': 'Timburr',
    '533': 'Gurdurr',
    '534': 'Conkeldurr',
    '535': 'Tympole',
    '536': 'Palpitoad',
    '537': 'Seismitoad',
    '538': 'Throh',
    '539': 'Sawk',
    '540': 'Sewaddle',
    '541': 'Swadloon',
    '542': 'Leavanny',
    '543': 'Venipede',
    '544': 'Whirlipede',
    '545': 'Scolipede',
    '546': 'Cottonee',
    '547': 'Whimsicott',
    '548': 'Petilil',
    '549': 'Lilligant',
    '550': 'Basculin',
    '551': 'Sandile',
    '552': 'Krokorok',
    '553': 'Krookodile',
    '554': 'Darumaka',
    '555': 'Darmanitan',
    '556': 'Maractus',
    '557': 'Dwebble',
    '558': 'Crustle',
    '559': 'Scraggy',
    '560': 'Scrafty',
    '561': 'Sigilyph',
    '562': 'Yamask',
    '563': 'Cofagrigus',
    '564': 'Tirtouga',
    '565': 'Carracosta',
    '566': 'Archen',
    '567': 'Archeops',
    '568': 'Trubbish',
    '569': 'Garbodor',
    '570': 'Zorua',
    '571': 'Zoroark',
    '572': 'Minccino',
    '573': 'Cinccino',
    '574': 'Gothita',
    '575': 'Gothorita',
    '576': 'Gothitelle',
    '577': 'Solosis',
    '578': 'Duosion',
    '579': 'Reuniclus',
    '580': 'Ducklett',
    '581': 'Swanna',
    '582': 'Vanillite',
    '583': 'Vanillish',
    '584': 'Vanilluxe',
    '585': 'Deerling',
    '586': 'Sawsbuck',
    '587': 'Emolga',
    '588': 'Karrablast',
    '589': 'Escavalier',
    '590': 'Foongus',
    '591': 'Amoonguss',
    '592': 'Frillish',
    '593': 'Jellicent',
    '594': 'Alomomola',
    '595': 'Joltik',
    '596': 'Galvantula',
    '597': 'Ferroseed',
    '598': 'Ferrothorn',
    '599': 'Klink',
    '600': 'Klang',
    '601': 'Klinklang',
    '602': 'Tynamo',
    '603': 'Eelektrik',
    '604': 'Eelektross',
    '605': 'Elgyem',
    '606': 'Beheeyem',
    '607': 'Litwick',
    '608': 'Lampent',
    '609': 'Chandelure',
    '610': 'Axew',
    '611': 'Fraxure',
    '612': 'Haxorus',
    '613': 'Cubchoo',
    '614': 'Beartic',
    '615': 'Cryogonal',
    '616': 'Shelmet',
    '617': 'Accelgor',
    '618': 'Stunfisk',
    '619': 'Mienfoo',
    '620': 'Mienshao',
    '621': 'Druddigon',
    '622': 'Golett',
    '623': 'Golurk',
    '624': 'Pawniard',
    '625': 'Bisharp',
    '626': 'Bouffalant',
    '627': 'Rufflet',
    '628': 'Braviary',
    '629': 'Vullaby',
    '630': 'Mandibuzz',
    '631': 'Heatmor',
    '632': 'Durant',
    '633': 'Deino',
    '634': 'Zweilous',
    '635': 'Hydreigon',
    '636': 'Larvesta',
    '637': 'Volcarona',
    '638': 'Cobalion',
    '639': 'Terrakion',
    '640': 'Virizion',
    '641': 'Tornadus',
    '642': 'Thundurus',
    '643': 'Reshiram',
    '644': 'Zekrom',
    '645': 'Landorus',
    '646': 'Kyurem',
    '647': 'Keldeo',
    '648': 'Meloetta',
    '649': 'Genesect',
    '650': 'Chespin',
    '651': 'Quilladin',
    '652': 'Chesnaught',
    '653': 'Fennekin',
    '654': 'Braixen',
    '655': 'Delphox',
    '656': 'Froakie',
    '657': 'Frogadier',
    '658': 'Greninja',
    '659': 'Bunnelby',
    '660': 'Diggersby',
    '661': 'Fletchling',
    '662': 'Fletchinder',
    '663': 'Talonflame',
    '664': 'Scatterbug',
    '665': 'Spewpa',
    '666': 'Vivillon',
    '667': 'Litleo',
    '668': 'Pyroar',
    '669': 'Flabebe',
    '670': 'Floette',
    '671': 'Florges',
    '672': 'Skiddo',
    '673': 'Gogoat',
    '674': 'Pancham',
    '675': 'Pangoro',
    '676': 'Furfrou',
    '677': 'Espurr',
    '678': 'Meowstic',
    '679': 'Honedge',
    '680': 'Doublade',
    '681': 'Aegislash',
    '682': 'Spritzee',
    '683': 'Aromatisse',
    '684': 'Swirlix',
    '685': 'Slurpuff',
    '686': 'Inkay',
    '687': 'Malamar',
    '688': 'Binacle',
    '689': 'Barbaracle',
    '690': 'Skrelp',
    '691': 'Dragalge',
    '692': 'Clauncher',
    '693': 'Clawitzer',
    '694': 'Helioptile',
    '695': 'Heliolisk',
    '696': 'Tyrunt',
    '697': 'Tyrantrum',
    '698': 'Amaura',
    '699': 'Aurorus',
    '700': 'Sylveon',
    '701': 'Hawlucha',
    '702': 'Dedenne',
    '703': 'Carbink',
    '704': 'Goomy',
    '705': 'Sliggoo',
    '706': 'Goodra',
    '707': 'Klefki',
    '708': 'Phantump',
    '709': 'Trevenant',
    '710': 'Pumpkaboo',
    '711': 'Gourgeist',
    '712': 'Bergmite',
    '713': 'Avalugg',
    '714': 'Noibat',
    '715': 'Noivern',
    '716': 'Xerneas',
    '717': 'Yveltal',
    '718': 'Zygarde',
    '719': 'Diancie',
    '720': 'Hoopa',
    '721': 'Volcanion',
    '722': 'Rowlet',
    '723': 'Dartrix',
    '724': 'Decidueye',
    '725': 'Litten',
    '726': 'Torracat',
    '727': 'Incineroar',
    '728': 'Popplio',
    '729': 'Brionne',
    '730': 'Primarina',
    '731': 'Pikipek',
    '732': 'Trumbeak',
    '733': 'Toucannon',
    '734': 'Yungoos',
    '735': 'Gumshoos',
    '736': 'Grubbin',
    '737': 'Charjabug',
    '738': 'Vikavolt',
    '739': 'Crabrawler',
    '740': 'Crabominable',
    '741': 'Oricorio',
    '742': 'Cutiefly',
    '743': 'Ribombee',
    '744': 'Rockruff',
    '745': 'Lycanroc',
    '746': 'Wishiwashi',
    '747': 'Mareanie',
    '748': 'Toxapex',
    '749': 'Mudbray',
    '750': 'Mudsdale',
    '751': 'Dewpider',
    '752': 'Araquanid',
    '753': 'Fomantis',
    '754': 'Lurantis',
    '755': 'Morelull',
    '756': 'Shiinotic',
    '757': 'Salandit',
    '758': 'Salazzle',
    '759': 'Stufful',
    '760': 'Bewear',
    '761': 'Bounsweet',
    '762': 'Steenee',
    '763': 'Tsareena',
    '764': 'Comfey',
    '765': 'Oranguru',
    '766': 'Passimian',
    '767': 'Wimpod',
    '768': 'Golisopod',
    '769': 'Sandygast',
    '770': 'Palossand',
    '771': 'Pyukumuku',
    '772': 'Type-Null',
    '773': 'Silvally',
    '774': 'Minior',
    '775': 'Komala',
    '776': 'Turtonator',
    '777': 'Togedemaru',
    '778': 'Mimikyu',
    '779': 'Bruxish',
    '780': 'Drampa',
    '781': 'Dhelmise',
    '782': 'Jangmo-o',
    '783': 'Hakamo-o',
    '784': 'Kommo-o',
    '785': 'Tapu Koko',
    '786': 'Tapu Lele',
    '787': 'Tapu Bulu',
    '788': 'Tapu Fini',
    '789': 'Cosmog',
    '790': 'Cosmoem',
    '791': 'Solgaleo',
    '792': 'Lunala',
    '793': 'Nihilego',
    '794': 'Buzzwole',
    '795': 'Pheromosa',
    '796': 'Xurkitree',
    '797': 'Celesteela',
    '798': 'Kartana',
    '799': 'Guzzlord',
    '800': 'Necrozma',
};

const pokemonTypes: PokedexTypes = {
    '1': ['Grass', 'Poison'],
    '2': ['Grass', 'Poison'],
    '3': ['Grass', 'Poison'],
    '4': ['Fire'],
    '5': ['Fire'],
    '6': ['Fire', 'Flying'],
    '7': ['Water'],
    '8': ['Water'],
    '9': ['Water'],
    '10': ['Bug'],
    '11': ['Bug'],
    '12': ['Bug', 'Flying'],
    '13': ['Bug', 'Poison'],
    '14': ['Bug', 'Poison'],
    '15': ['Bug', 'Poison'],
    '16': ['Normal', 'Flying'],
    '17': ['Normal', 'Flying'],
    '18': ['Normal', 'Flying'],
    '19': ['Normal'],
    '20': ['Normal'],
    '21': ['Normal', 'Flying'],
    '22': ['Normal', 'Flying'],
    '23': ['Poison'],
    '24': ['Poison'],
    '25': ['Electric'],
    '26': ['Electric'],
    '27': ['Ground'],
    '28': ['Ground'],
    '29': ['Poison'],
    '30': ['Poison'],
    '31': ['Poison', 'Ground'],
    '32': ['Poison'],
    '33': ['Poison'],
    '34': ['Poison', 'Ground'],
    '35': ['Fairy'],
    '36': ['Fairy'],
    '37': ['Fire'],
    '38': ['Fire'],
    '39': ['Normal', 'Fairy'],
    '40': ['Normal', 'Fairy'],
    '41': ['Poison', 'Flying'],
    '42': ['Poison', 'Flying'],
    '43': ['Grass', 'Poison'],
    '44': ['Grass', 'Poison'],
    '45': ['Grass', 'Poison'],
    '46': ['Bug', 'Grass'],
    '47': ['Bug', 'Grass'],
    '48': ['Bug', 'Poison'],
    '49': ['Bug', 'Poison'],
    '50': ['Ground'],
    '51': ['Ground'],
    '52': ['Normal'],
    '53': ['Normal'],
    '54': ['Water'],
    '55': ['Water'],
    '56': ['Fighting'],
    '57': ['Fighting'],
    '58': ['Fire'],
    '59': ['Fire'],
    '60': ['Water'],
    '61': ['Water'],
    '62': ['Water', 'Fighting'],
    '63': ['Psychic'],
    '64': ['Psychic'],
    '65': ['Psychic'],
    '66': ['Fighting'],
    '67': ['Fighting'],
    '68': ['Fighting'],
    '69': ['Grass', 'Poison'],
    '70': ['Grass', 'Poison'],
    '71': ['Grass', 'Poison'],
    '72': ['Water', 'Poison'],
    '73': ['Water', 'Poison'],
    '74': ['Rock', 'Ground'],
    '75': ['Rock', 'Ground'],
    '76': ['Rock', 'Ground'],
    '77': ['Fire'],
    '78': ['Fire'],
    '79': ['Water', 'Psychic'],
    '80': ['Water', 'Psychic'],
    '81': ['Electric', 'Steel'],
    '82': ['Electric', 'Steel'],
    '83': ['Normal', 'Flying'],
    '84': ['Normal', 'Flying'],
    '85': ['Normal', 'Flying'],
    '86': ['Water'],
    '87': ['Water', 'Ice'],
    '88': ['Poison'],
    '89': ['Poison'],
    '90': ['Water'],
    '91': ['Water', 'Ice'],
    '92': ['Ghost', 'Poison'],
    '93': ['Ghost', 'Poison'],
    '94': ['Ghost', 'Poison'],
    '95': ['Rock', 'Ground'],
    '96': ['Psychic'],
    '97': ['Psychic'],
    '98': ['Water'],
    '99': ['Water'],
    '100': ['Electric'],
    '101': ['Electric'],
    '102': ['Grass', 'Psychic'],
    '103': ['Grass', 'Psychic'],
    '104': ['Ground'],
    '105': ['Ground'],
    '106': ['Fighting'],
    '107': ['Fighting'],
    '108': ['Normal'],
    '109': ['Poison'],
    '110': ['Poison'],
    '111': ['Ground', 'Rock'],
    '112': ['Ground', 'Rock'],
    '113': ['Normal'],
    '114': ['Grass'],
    '115': ['Normal'],
    '116': ['Water'],
    '117': ['Water'],
    '118': ['Water'],
    '119': ['Water'],
    '120': ['Water'],
    '121': ['Water', 'Psychic'],
    '122': ['Psychic', 'Fairy'],
    '123': ['Bug', 'Flying'],
    '124': ['Ice', 'Psychic'],
    '125': ['Electric'],
    '126': ['Fire'],
    '127': ['Bug'],
    '128': ['Normal'],
    '129': ['Water'],
    '130': ['Water', 'Flying'],
    '131': ['Water', 'Ice'],
    '132': ['Normal'],
    '133': ['Normal'],
    '134': ['Water'],
    '135': ['Electric'],
    '136': ['Fire'],
    '137': ['Normal'],
    '138': ['Rock', 'Water'],
    '139': ['Rock', 'Water'],
    '140': ['Rock', 'Water'],
    '141': ['Rock', 'Water'],
    '142': ['Rock', 'Flying'],
    '143': ['Normal'],
    '144': ['Ice', 'Flying'],
    '145': ['Electric', 'Flying'],
    '146': ['Fire', 'Flying'],
    '147': ['Dragon'],
    '148': ['Dragon'],
    '149': ['Dragon', 'Flying'],
    '150': ['Psychic'],
    '151': ['Psychic'],
    '152': ['Grass'], // Chikorita
    '153': ['Grass'], // Bayleef
    '154': ['Grass'], // Meganium
    '155': ['Fire'], // Cyndaquil
    '156': ['Fire'], // Quilava
    '157': ['Fire'], // Typhlosion
    '158': ['Water'], // Totodile
    '159': ['Water'], // Croconaw
    '160': ['Water'], // Feraligatr
    '161': ['Normal'], // Sentret
    '162': ['Normal'], // Furret
    '163': ['Normal', 'Flying'], // Hoothoot
    '164': ['Normal', 'Flying'], // Noctowl
    '165': ['Bug', 'Flying'], // Ledyba
    '166': ['Bug', 'Flying'], // Ledian
    '167': ['Bug', 'Poison'], // Spinarak
    '168': ['Bug', 'Poison'], // Ariados
    '169': ['Poison', 'Flying'], // Crobat
    '170': ['Water', 'Electric'], // Chinchou
    '171': ['Water', 'Electric'], // Lanturn
    '172': ['Electric'], // Pichu
    '173': ['Fairy'], // Cleffa
    '174': ['Normal', 'Fairy'], // Igglybuff
    '175': ['Fairy'], // Togepi
    '176': ['Fairy', 'Flying'], // Togetic
    '177': ['Psychic', 'Flying'], // Natu
    '178': ['Psychic', 'Flying'], // Xatu
    '179': ['Electric'], // Mareep
    '180': ['Electric'], // Flaaffy
    '181': ['Electric'], // Ampharos
    '182': ['Grass'], // Bellossom
    '183': ['Water', 'Fairy'], // Marill
    '184': ['Water', 'Fairy'], // Azumarill
    '185': ['Rock'], // Sudowoodo
    '186': ['Water'], // Politoed
    '187': ['Grass', 'Flying'], // Hoppip
    '188': ['Grass', 'Flying'], // Skiploom
    '189': ['Grass', 'Flying'], // Jumpluff
    '190': ['Normal'], // Aipom
    '191': ['Grass'], // Sunkern
    '192': ['Grass'], // Sunflora
    '193': ['Bug', 'Flying'], // Yanma
    '194': ['Water', 'Ground'], // Wooper
    '195': ['Water', 'Ground'], // Quagsire
    '196': ['Psychic'], // Espeon
    '197': ['Dark'], // Umbreon
    '198': ['Dark', 'Flying'], // Murkrow
    '199': ['Water', 'Psychic'], // Slowking
    '200': ['Ghost'], // Misdreavus
    '201': ['Psychic'], // Unown
    '202': ['Psychic'], // Wobbuffet
    '203': ['Normal', 'Psychic'], // Girafarig
    '204': ['Bug'], // Pineco
    '205': ['Bug', 'Steel'], // Forretress
    '206': ['Normal'], // Dunsparce
    '207': ['Ground', 'Flying'], // Gligar
    '208': ['Steel', 'Ground'], // Steelix
    '209': ['Fairy'], // Snubbull
    '210': ['Fairy'], // Granbull
    '211': ['Water', 'Poison'], // Qwilfish
    '212': ['Bug', 'Steel'], // Scizor
    '213': ['Bug', 'Rock'], // Shuckle
    '214': ['Bug', 'Fighting'], // Heracross
    '215': ['Dark', 'Ice'], // Sneasel
    '216': ['Normal'], // Teddiursa
    '217': ['Normal'], // Ursaring
    '218': ['Fire'], // Slugma
    '219': ['Fire', 'Rock'], // Magcargo
    '220': ['Ice', 'Ground'], // Swinub
    '221': ['Ice', 'Ground'], // Piloswine
    '222': ['Water', 'Rock'], // Corsola
    '223': ['Water'], // Remoraid
    '224': ['Water'], // Octillery
    '225': ['Ice', 'Flying'], // Delibird
    '226': ['Water', 'Flying'], // Mantine
    '227': ['Steel', 'Flying'], // Skarmory
    '228': ['Dark', 'Fire'], // Houndour
    '229': ['Dark', 'Fire'], // Houndoom
    '230': ['Water', 'Dragon'], // Kingdra
    '231': ['Ground'], // Phanpy
    '232': ['Ground'], // Donphan
    '233': ['Normal'], // Porygon2
    '234': ['Normal'], // Stantler
    '235': ['Normal'], // Smeargle
    '236': ['Fighting'], // Tyrogue
    '237': ['Fighting'], // Hitmontop
    '238': ['Ice', 'Psychic'], // Smoochum
    '239': ['Electric'], // Elekid
    '240': ['Fire'], // Magby
    '241': ['Normal'], // Miltank
    '242': ['Normal'], // Blissey
    '243': ['Electric'], // Raikou
    '244': ['Fire'], // Entei
    '245': ['Water'], // Suicune
    '246': ['Rock', 'Ground'], // Larvitar
    '247': ['Rock', 'Ground'], // Pupitar
    '248': ['Rock', 'Dark'], // Tyranitar
    '249': ['Psychic', 'Flying'], // Lugia
    '250': ['Fire', 'Flying'], // Ho-oh
    '251': ['Psychic', 'Grass'], // Celebi
    '252': ['Grass'], // Treecko
    '253': ['Grass'], // Grovyle
    '254': ['Grass'], // Sceptile
    '255': ['Fire'], // Torchic
    '256': ['Fire', 'Fighting'], // Combusken
    '257': ['Fire', 'Fighting'], // Blaziken
    '258': ['Water'], // Mudkip
    '259': ['Water', 'Ground'], // Marshtomp
    '260': ['Water', 'Ground'], // Swampert
    '261': ['Dark'], // Poochyena
    '262': ['Dark'], // Mightyena
    '263': ['Normal'], // Zigzagoon
    '264': ['Normal'], // Linoone
    '265': ['Bug'], // Wurmple
    '266': ['Bug'], // Silcoon
    '267': ['Bug', 'Flying'], // Beautifly
    '268': ['Bug'], // Cascoon
    '269': ['Bug', 'Poison'], // Dustox
    '270': ['Water', 'Grass'], // Lotad
    '271': ['Water', 'Grass'], // Lombre
    '272': ['Water', 'Grass'], // Ludicolo
    '273': ['Grass'], // Seedot
    '274': ['Grass', 'Dark'], // Nuzleaf
    '275': ['Grass', 'Dark'], // Shiftry
    '276': ['Normal', 'Flying'], // Taillow
    '277': ['Normal', 'Flying'], // Swellow
    '278': ['Water', 'Flying'], // Wingull
    '279': ['Water', 'Flying'], // Pelipper
    '280': ['Psychic', 'Fairy'], // Ralts
    '281': ['Psychic', 'Fairy'], // Kirlia
    '282': ['Psychic', 'Fairy'], // Gardevoir
    '283': ['Bug', 'Water'], // Surskit
    '284': ['Bug', 'Flying'], // Masquerain
    '285': ['Grass'], // Shroomish
    '286': ['Grass', 'Fighting'], // Breloom
    '287': ['Normal'], // Slakoth
    '288': ['Normal'], // Vigoroth
    '289': ['Normal'], // Slaking
    '290': ['Bug', 'Ground'], // Nincada
    '291': ['Bug', 'Flying'], // Ninjask
    '292': ['Bug', 'Ghost'], // Shedinja
    '293': ['Normal'], // Whismur
    '294': ['Normal'], // Loudred
    '295': ['Normal'], // Exploud
    '296': ['Fighting'], // Makuhita
    '297': ['Fighting'], // Hariyama
    '298': ['Normal', 'Fairy'], // Azurill
    '299': ['Rock'], // Nosepass
    '300': ['Normal'], // skitty
    '301': ['Normal'], // Delcatty
    '302': ['Dark', 'Ghost'], // Sableye
    '303': ['Steel', 'Fairy'], // Mawile
    '304': ['Steel', 'Rock'], // Aron
    '305': ['Steel', 'Rock'], // Lairon
    '306': ['Steel', 'Rock'], // Aggron
    '307': ['Fighting', 'Psychic'], // Meditite
    '308': ['Fighting', 'Psychic'], // Medicham
    '309': ['Electric'], // Electrike
    '310': ['Electric'], // Manectric
    '311': ['Electric'], // Plusle
    '312': ['Electric'], // Minun
    '313': ['Bug'], // Volbeat
    '314': ['Bug'], // Illumise
    '315': ['Grass', 'Poison'], // Roselia
    '316': ['Poison'], // Gulpin
    '317': ['Poison'], // Swalot
    '318': ['Water', 'Dark'], // Carvanha
    '319': ['Water', 'Dark'], // Sharpedo
    '320': ['Water'], // Wailmer
    '321': ['Water'], // Wailord
    '322': ['Fire', 'Ground'], // Numel
    '323': ['Fire', 'Ground'], // Camerupt
    '324': ['Fire'], // Torkoal
    '325': ['Psychic'], // Spoink
    '326': ['Psychic'], // Grumpig
    '327': ['Normal'], // Spinda
    '328': ['Ground'], // Trapinch
    '329': ['Ground', 'Dragon'], // Vibrava
    '330': ['Ground', 'Dragon'], // Flygon
    '331': ['Grass'], // Cacnea
    '332': ['Grass', 'Dark'], // Cacturne
    '333': ['Normal', 'Flying'], // Swablu
    '334': ['Dragon', 'Flying'], // Altaria
    '335': ['Normal'], // Zangoose
    '336': ['Poison'], // Seviper
    '337': ['Rock', 'Psychic'], // Lunatone
    '338': ['Rock', 'Psychic'], // Solrock
    '339': ['Water', 'Ground'], // Barboach
    '340': ['Water', 'Ground'], // Whiscash
    '341': ['Water'], // Corphish
    '342': ['Water', 'Dark'], // Crawdaunt
    '343': ['Ground', 'Psychic'], // Baltoy
    '344': ['Ground', 'Psychic'], // Claydol
    '345': ['Rock', 'Grass'], // Lileep
    '346': ['Rock', 'Grass'], // Cradily
    '347': ['Rock', 'Bug'], // Anorith
    '348': ['Rock', 'Bug'], // Armaldo
    '349': ['Water'], // Feebas
    '350': ['Water'], // Milotic
    '351': ['Normal'], // Castform
    '352': ['Normal'], // Kecleon
    '353': ['Ghost'], // Shuppet
    '354': ['Ghost'], // Banette
    '355': ['Ghost'], // Duskull
    '356': ['Ghost'], // Dusclops
    '357': ['Grass', 'Flying'], // Tropius
    '358': ['Psychic'], // Chimecho
    '359': ['Dark'], // Absol
    '360': ['Psychic'], // Wynaut
    '361': ['Ice'], // Snorunt
    '362': ['Ice'], // Glalie
    '363': ['Ice', 'Water'], // Spheal
    '364': ['Ice', 'Water'], // Sealeo
    '365': ['Ice', 'Water'], // Walrein
    '366': ['Water'], // Clamperl
    '367': ['Water'], // Huntail
    '368': ['Water'], // Gorebyss
    '369': ['Water', 'Rock'], // Relicanth
    '370': ['Water'], // Luvdisc
    '371': ['Dragon'], // Bagon
    '372': ['Dragon'], // Shelgon
    '373': ['Dragon', 'Flying'], // Salamence
    '374': ['Steel', 'Psychic'], // Beldum
    '375': ['Steel', 'Psychic'], // Metang
    '376': ['Steel', 'Psychic'], // Metagross
    '377': ['Rock'], // Regirock
    '378': ['Ice'], // Regice
    '379': ['Steel'], // Registeel
    '380': ['Dragon', 'Psychic'], // Latias
    '381': ['Dragon', 'Psychic'], // Latios
    '382': ['Water'], // Kyogre
    '383': ['Ground'], // Groudon
    '384': ['Dragon', 'Flying'], // Rayquaza
    '385': ['Steel', 'Psychic'], // Jirachi
    '386': ['Psychic'], // Deoxys
    '387': ['Grass'], // Turtwig
    '388': ['Grass'], // Grotle
    '389': ['Grass', 'Ground'], // Torterra
    '390': ['Fire'], // Chimchar
    '391': ['Fire', 'Fighting'], // Monferno
    '392': ['Fire', 'Fighting'], // Infernape
    '393': ['Water'], // Piplup
    '394': ['Water'], // Prinplup
    '395': ['Water', 'Steel'], // Empoleon
    '396': ['Normal', 'Flying'], // Starly
    '397': ['Normal', 'Flying'], // Staravia
    '398': ['Normal', 'Flying'], // Staraptor
    '399': ['Normal'], // Bidoof
    '400': ['Normal', 'Water'], // Bibarel
    '401': ['Bug'], // Kricketot
    '402': ['Bug'], // Kricketune
    '403': ['Electric'], // Shinx
    '404': ['Electric'], // Luxio
    '405': ['Electric'], // Luxray
    '406': ['Grass', 'Poison'], // Budew
    '407': ['Grass', 'Poison'], // Roserade
    '408': ['Rock'], // Cranidos
    '409': ['Rock'], // Rampardos
    '410': ['Rock', 'Steel'], // Shieldon
    '411': ['Rock', 'Steel'], // Bastiodon
    '412': ['Bug'], // Burmy
    '413': ['Bug', 'Grass'], // Wormadam (Plant Cloak)
    '414': ['Bug', 'Flying'], // Mothim
    '415': ['Bug', 'Flying'], // Combee
    '416': ['Bug', 'Flying'], // Vespiquen
    '417': ['Electric'], // Pachirisu
    '418': ['Water'], // Buizel
    '419': ['Water'], // Floatzel
    '420': ['Grass'], // Cherubi
    '421': ['Grass'], // Cherrim
    '422': ['Water'], // Shellos
    '423': ['Water', 'Ground'], // Gastrodon
    '424': ['Normal'], // Ambipom
    '425': ['Ghost', 'Flying'], // Drifloon
    '426': ['Ghost', 'Flying'], // Drifblim
    '427': ['Normal'], // Buneary
    '428': ['Normal'], // Lopunny
    '429': ['Ghost'], // Mismagius
    '430': ['Dark', 'Flying'], // Honchkrow
    '431': ['Normal'], // Glameow
    '432': ['Normal'], // Purugly
    '433': ['Psychic'], // Chingling
    '434': ['Poison', 'Dark'], // Stunky
    '435': ['Poison', 'Dark'], // Skuntank
    '436': ['Steel', 'Psychic'], // Bronzor
    '437': ['Steel', 'Psychic'], // Bronzong
    '438': ['Rock'], // Bonsly
    '439': ['Psychic', 'Fairy'], // Mime Jr.
    '440': ['Normal'], // Happiny
    '441': ['Normal', 'Flying'], // Chatot
    '442': ['Ghost', 'Dark'], // Spiritomb
    '443': ['Dragon', 'Ground'], // Gible
    '444': ['Dragon', 'Ground'], // Gabite
    '445': ['Dragon', 'Ground'], // Garchomp
    '446': ['Normal'], // Munchlax
    '447': ['Fighting'], // Riolu
    '448': ['Fighting', 'Steel'], // Lucario
    '449': ['Ground'], // Hippopotas
    '450': ['Ground'], // Hippowdon
    '451': ['Poison', 'Bug'], // Skorupi
    '452': ['Poison', 'Dark'], // Drapion
    '453': ['Poison', 'Fighting'], // Croagunk
    '454': ['Poison', 'Fighting'], // Toxicroak
    '455': ['Grass'], // Carnivine
    '456': ['Water'], // Finneon
    '457': ['Water'], // Lumineon
    '458': ['Water', 'Flying'], // Mantyke
    '459': ['Grass', 'Ice'], // Snover
    '460': ['Grass', 'Ice'], // Abomasnow
    '461': ['Dark', 'Ice'], // Weavile
    '462': ['Electric', 'Steel'], // Magnezone
    '463': ['Normal'], // Lickilicky
    '464': ['Ground', 'Rock'], // Rhyperior
    '465': ['Grass'], // Tangrowth
    '466': ['Electric'], // Electivire
    '467': ['Fire'], // Magmortar
    '468': ['Fairy', 'Flying'], // Togekiss
    '469': ['Bug', 'Flying'], // Yanmega
    '470': ['Grass'], // Leafeon
    '471': ['Ice'], // Glaceon
    '472': ['Ground', 'Flying'], // Gliscor
    '473': ['Ice', 'Ground'], // Mamoswine
    '474': ['Normal'], // Porygon-Z
    '475': ['Psychic', 'Fighting'], // Gallade
    '476': ['Rock', 'Steel'], // Probopass
    '477': ['Ghost'], // Dusknoir
    '478': ['Ice', 'Ghost'], // Froslass
    '479': ['Electric', 'Ghost'], // Rotom
    '480': ['Psychic'], // Uxie
    '481': ['Psychic'], // Mesprit
    '482': ['Psychic'], // Azelf
    '483': ['Steel', 'Dragon'], // Dialga
    '484': ['Water', 'Dragon'], // Palkia
    '485': ['Fire', 'Steel'], // Heatran
    '486': ['Normal'], // Regigigas
    '487': ['Ghost', 'Dragon'], // Giratina
    '488': ['Psychic'], // Cresselia
    '489': ['Water'], // Phione
    '490': ['Water'], // Manaphy
    '491': ['Dark'], // Darkrai
    '492': ['Grass'], // Shaymin
    '493': ['Normal'], // Arceus
    '494': ['Psychic', 'Fire'], // Victini
    '495': ['Grass'], // Snivy
    '496': ['Grass'], // Servine
    '497': ['Grass'], // Serperior
    '498': ['Fire'], // Tepig
    '499': ['Fire', 'Fighting'], // Pignite
    '500': ['Fire', 'Fighting'], // Emboar
    '501': ['Water'], // Oshawott
    '502': ['Water'], // Dewott
    '503': ['Water'], // Samurott
    '504': ['Normal'], // Patrat
    '505': ['Normal'], // Watchog
    '506': ['Normal'], // Lillipup
    '507': ['Normal'], // Herdier
    '508': ['Normal'], // Stoutland
    '509': ['Dark'], // Purrloin
    '510': ['Dark'], // Liepard
    '511': ['Grass'], // Pansage
    '512': ['Grass'], // Simisage
    '513': ['Fire'], // Pansear
    '514': ['Fire'], // Simisear
    '515': ['Water'], // Panpour
    '516': ['Water'], // Simipour
    '517': ['Psychic'], // Munna
    '518': ['Psychic'], // Musharna
    '519': ['Normal', 'Flying'], // Pidove
    '520': ['Normal', 'Flying'], // Tranquill
    '521': ['Normal', 'Flying'], // Unfezant
    '522': ['Electric'], // Blitzle
    '523': ['Electric'], // Zebstrika
    '524': ['Rock'], // Roggenrola
    '525': ['Rock'], // Boldore
    '526': ['Rock'], // Gigalith
    '527': ['Psychic', 'Flying'], // Woobat
    '528': ['Psychic', 'Flying'], // Swoobat
    '529': ['Ground'], // Drilbur
    '530': ['Ground', 'Steel'], // Excadrill
    '531': ['Normal'], // Audino
    '532': ['Fighting'], // Timburr
    '533': ['Fighting'], // Gurdurr
    '534': ['Fighting'], // Conkeldurr
    '535': ['Water'], // Tympole
    '536': ['Water', 'Ground'], // Palpitoad
    '537': ['Water', 'Ground'], // Seismitoad
    '538': ['Fighting'], // Throh
    '539': ['Fighting'], // Sawk
    '540': ['Bug', 'Grass'], // Sewaddle
    '541': ['Bug', 'Grass'], // Swadloon
    '542': ['Bug', 'Grass'], // Leavanny
    '543': ['Bug', 'Poison'], // Venipede
    '544': ['Bug', 'Poison'], // Whirlipede
    '545': ['Bug', 'Poison'], // Scolipede
    '546': ['Grass', 'Fairy'], // Cottonee
    '547': ['Grass', 'Fairy'], // Whimsicott
    '548': ['Grass'], // Petilil
    '549': ['Grass'], // Lilligant
    '550': ['Water'], // Basculin
    '551': ['Ground', 'Dark'], // Sandile
    '552': ['Ground', 'Dark'], // Krokorok
    '553': ['Ground', 'Dark'], // Krookodile
    '554': ['Fire'], // Darumaka
    '555': ['Fire'], // Darmanitan
    '556': ['Grass'], // Maractus
    '557': ['Bug', 'Rock'], // Dwebble
    '558': ['Bug', 'Rock'], // Crustle
    '559': ['Dark', 'Fighting'], // Scraggy
    '560': ['Dark', 'Fighting'], // Scrafty
    '561': ['Psychic', 'Flying'], // Sigilyph
    '562': ['Ground', 'Ghost'], // Yamask
    '563': ['Ground', 'Ghost'], // Cofagrigus
    '564': ['Water', 'Rock'], // Tirtouga
    '565': ['Water', 'Rock'], // Carracosta
    '566': ['Rock', 'Flying'], // Archen
    '567': ['Rock', 'Flying'], // Archeops
    '568': ['Poison'], // Trubbish
    '569': ['Poison'], // Garbodor
    '570': ['Dark'], // Zorua
    '571': ['Dark'], // Zoroark
    '572': ['Normal'], // Minccino
    '573': ['Normal'], // Cinccino
    '574': ['Psychic'], // Gothita
    '575': ['Psychic'], // Gothorita
    '576': ['Psychic'], // Gothitelle
    '577': ['Psychic'], // Solosis
    '578': ['Psychic'], // Duosion
    '579': ['Psychic'], // Reuniclus
    '580': ['Water', 'Flying'], // Ducklett
    '581': ['Water', 'Flying'], // Swanna
    '582': ['Ice'], // Vanillite
    '583': ['Ice'], // Vanillish
    '584': ['Ice'], // Vanilluxe
    '585': ['Normal', 'Grass'], // Deerling
    '586': ['Normal', 'Grass'], // Sawsbuck
    '587': ['Electric', 'Flying'], // Emolga
    '588': ['Bug'], // Karrablast
    '589': ['Bug', 'Steel'], // Escavalier
    '590': ['Grass', 'Poison'], // Foongus
    '591': ['Grass', 'Poison'], // Amoonguss
    '592': ['Water', 'Ghost'], // Frillish
    '593': ['Water', 'Ghost'], // Jellicent
    '594': ['Water'], // Alomomola
    '595': ['Bug', 'Electric'], // Joltik
    '596': ['Bug', 'Electric'], // Galvantula
    '597': ['Grass', 'Steel'], // Ferroseed
    '598': ['Grass', 'Steel'], // Ferrothorn
    '599': ['Steel'], // Klink
    '600': ['Steel'], // Klang
    '601': ['Steel'], // Klinklang
    '602': ['Electric'], // Tynamo
    '603': ['Electric'], // Eelektrik
    '604': ['Electric'], // Eelektross
    '605': ['Psychic'], // Elgyem
    '606': ['Psychic'], // Beheeyem
    '607': ['Ghost', 'Fire'], // Litwick
    '608': ['Ghost', 'Fire'], // Lampent
    '609': ['Ghost', 'Fire'], // Chandelure
    '610': ['Dragon'], // Axew
    '611': ['Dragon'], // Fraxure
    '612': ['Dragon'], // Haxorus
    '613': ['Ice'], // Cubchoo
    '614': ['Ice'], // Beartic
    '615': ['Ice'], // Cryogonal
    '616': ['Bug'], // Shelmet
    '617': ['Bug'], // Accelgor
    '618': ['Ground', 'Electric'], // Stunfisk
    '619': ['Fighting'], // Mienfoo
    '620': ['Fighting'], // Mienshao
    '621': ['Dragon'], // Druddigon
    '622': ['Ground', 'Ghost'], // Golett
    '623': ['Ground', 'Ghost'], // Golurk
    '624': ['Dark', 'Steel'], // Pawniard
    '625': ['Dark', 'Steel'], // Bisharp
    '626': ['Normal'], // Bouffalant
    '627': ['Normal', 'Flying'], // Rufflet
    '628': ['Normal', 'Flying'], // Braviary
    '629': ['Dark', 'Flying'], // Vullaby
    '630': ['Dark', 'Flying'], // Mandibuzz
    '631': ['Fire'], // Heatmor
    '632': ['Bug', 'Steel'], // Durant
    '633': ['Dark', 'Dragon'], // Deino
    '634': ['Dark', 'Dragon'], // Zweilous
    '635': ['Dark', 'Dragon'], // Hydreigon
    '636': ['Bug', 'Fire'], // Larvesta
    '637': ['Bug', 'Fire'], // Volcarona
    '638': ['Steel', 'Fighting'], // Cobalion
    '639': ['Rock', 'Fighting'], // Terrakion
    '640': ['Grass', 'Fighting'], // Virizion
    '641': ['Flying'], // Tornadus
    '642': ['Electric', 'Flying'], // Thundurus
    '643': ['Dragon', 'Fire'], // Reshiram
    '644': ['Dragon', 'Electric'], // Zekrom
    '645': ['Ground', 'Flying'], // Landorus
    '646': ['Dragon', 'Ice'], // Kyurem
    '647': ['Water', 'Fighting'], // Keldeo
    '648': ['Normal', 'Psychic'], // Meloetta (Aria Forme)
    '649': ['Bug', 'Steel'], // Genesect
    '650': ['Grass'], // Chespin
    '651': ['Grass'], // Quilladin
    '652': ['Grass', 'Fighting'], // Chesnaught
    '653': ['Fire'], // Fennekin
    '654': ['Fire'], // Braixen
    '655': ['Fire', 'Psychic'], // Delphox
    '656': ['Water'], // Froakie
    '657': ['Water'], // Frogadier
    '658': ['Water', 'Dark'], // Greninja
    '659': ['Normal'], // Bunnelby
    '660': ['Normal', 'Ground'], // Diggersby
    '661': ['Normal', 'Flying'], // Fletchling
    '662': ['Fire', 'Flying'], // Fletchinder
    '663': ['Fire', 'Flying'], // Talonflame
    '664': ['Bug'], // Scatterbug
    '665': ['Bug'], // Spewpa
    '666': ['Bug', 'Flying'], // Vivillon
    '667': ['Fire'], // Litleo
    '668': ['Fire', 'Normal'], // Pyroar
    '669': ['Fairy'], // Flabébé
    '670': ['Fairy'], // Floette
    '671': ['Fairy'], // Florges
    '672': ['Grass'], // Skiddo
    '673': ['Grass'], // Gogoat
    '674': ['Fighting'], // Pancham
    '675': ['Fighting', 'Dark'], // Pangoro
    '676': ['Normal'], // Furfrou
    '677': ['Psychic'], // Espurr
    '678': ['Psychic'], // Meowstic
    '679': ['Steel', 'Ghost'], // Honedge
    '680': ['Steel', 'Ghost'], // Doublade
    '681': ['Steel', 'Ghost'], // Aegislash
    '682': ['Fairy'], // Spritzee
    '683': ['Fairy'], // Aromatisse
    '684': ['Fairy'], // Swirlix
    '685': ['Fairy'], // Slurpuff
    '686': ['Dark', 'Psychic'], // Inkay
    '687': ['Dark', 'Psychic'], // Malamar
    '688': ['Rock', 'Water'], // Binacle
    '689': ['Rock', 'Water'], // Barbaracle
    '690': ['Poison', 'Water'], // Skrelp
    '691': ['Poison', 'Dragon'], // Dragalge
    '692': ['Water'], // Clauncher
    '693': ['Water'], // Clawitzer
    '694': ['Electric', 'Normal'], // Helioptile
    '695': ['Electric', 'Normal'], // Heliolisk
    '696': ['Rock', 'Dragon'], // Tyrunt
    '697': ['Rock', 'Dragon'], // Tyrantrum
    '698': ['Rock', 'Ice'], // Amaura
    '699': ['Rock', 'Ice'], // Aurorus
    '700': ['Fairy'], // Sylveon
    '701': ['Fighting', 'Flying'], // Hawlucha
    '702': ['Electric', 'Fairy'], // Dedenne
    '703': ['Rock', 'Fairy'], // Carbink
    '704': ['Dragon'], // Goomy
    '705': ['Dragon'], // Sliggoo
    '706': ['Dragon'], // Goodra
    '707': ['Steel', 'Fairy'], // Klefki
    '708': ['Ghost', 'Grass'], // Phantump
    '709': ['Ghost', 'Grass'], // Trevenant
    '710': ['Ghost', 'Grass'], // Pumpkaboo
    '711': ['Ghost', 'Grass'], // Gourgeist
    '712': ['Ice'], // Bergmite
    '713': ['Ice'], // Avalugg
    '714': ['Flying', 'Dragon'], // Noibat
    '715': ['Flying', 'Dragon'], // Noivern
    '716': ['Fairy'], // Xerneas
    '717': ['Dark', 'Flying'], // Yveltal
    '718': ['Dragon', 'Ground'], // Zygarde
    '719': ['Rock', 'Fairy'], // Diancie
    '720': ['Psychic', 'Ghost'], // Hoopa (Confined)
    '721': ['Fire', 'Water'], // Volcanion
    '722': ['Grass', 'Flying'], // Rowlet
    '723': ['Grass', 'Flying'], // Dartrix
    '724': ['Grass', 'Ghost'], // Decidueye
    '725': ['Fire'], // Litten
    '726': ['Fire'], // Torracat
    '727': ['Fire', 'Dark'], // Incineroar
    '728': ['Water'], // Popplio
    '729': ['Water'], // Brionne
    '730': ['Water', 'Fairy'], // Primarina
    '731': ['Normal', 'Flying'], // Pikipek
    '732': ['Normal', 'Flying'], // Trumbeak
    '733': ['Normal', 'Flying'], // Toucannon
    '734': ['Normal'], // Yungoos
    '735': ['Normal'], // Gumshoos
    '736': ['Bug', 'Electric'], // Grubbin
    '737': ['Bug', 'Electric'], // Charjabug
    '738': ['Bug', 'Electric'], // Vikavolt
    '739': ['Fighting'], // Crabrawler
    '740': ['Fighting', 'Ice'], // Crabominable
    '741': ['Fire', 'Flying'], // Oricorio (Baile Style)
    '742': ['Bug', 'Fairy'], // Cutiefly
    '743': ['Bug', 'Fairy'], // Ribombee
    '744': ['Rock'], // Rockruff
    '745': ['Rock'], // Lycanroc
    '746': ['Water'], // Wishiwashi
    '747': ['Poison', 'Water'], // Mareanie
    '748': ['Poison', 'Water'], // Toxapex
    '749': ['Ground'], // Mudbray
    '750': ['Ground'], // Mudsdale
    '751': ['Water', 'Bug'], // Dewpider
    '752': ['Water', 'Bug'], // Araquanid
    '753': ['Grass'], // Fomantis
    '754': ['Grass'], // Lurantis
    '755': ['Grass', 'Fairy'], // Morelull
    '756': ['Grass', 'Fairy'], // Shiinotic
    '757': ['Poison', 'Fire'], // Salandit
    '758': ['Poison', 'Fire'], // Salazzle
    '759': ['Normal', 'Fighting'], // Stufful
    '760': ['Normal', 'Fighting'], // Bewear
    '761': ['Grass'], // Bounsweet
    '762': ['Grass'], // Steenee
    '763': ['Grass'], // Tsareena
    '764': ['Fairy'], // Comfey
    '765': ['Psychic'], // Oranguru
    '766': ['Fighting'], // Passimian
    '767': ['Bug'], // Wimpod
    '768': ['Bug', 'Water'], // Golisopod
    '769': ['Ghost', 'Ground'], // Sandygast
    '770': ['Ghost', 'Ground'], // Palossand
    '771': ['Water'], // Pyukumuku
    '772': ['Normal'], // Type: Null
    '773': ['Normal'], // Silvally
    '774': ['Rock', 'Flying'], // Minior
    '775': ['Normal'], // Komala
    '776': ['Fire', 'Dragon'], // Turtonator
    '777': ['Electric', 'Steel'], // Togedemaru
    '778': ['Ghost', 'Fairy'], // Mimikyu
    '779': ['Water', 'Psychic'], // Bruxish
    '780': ['Normal', 'Dragon'], // Drampa
    '781': ['Ghost', 'Grass'], // Dhelmise
    '782': ['Dragon'], // Jangmo-o
    '783': ['Dragon', 'Fighting'], // Hakamo-o
    '784': ['Dragon', 'Fighting'], // Kommo-o
    '785': ['Electric', 'Fairy'], // Tapu Koko
    '786': ['Psychic', 'Fairy'], // Tapu Lele
    '787': ['Grass', 'Fairy'], // Tapu Bulu
    '788': ['Water', 'Fairy'], // Tapu Fini
    '789': ['Psychic'], // Cosmog
    '790': ['Psychic'], // Cosmoem
    '791': ['Psychic', 'Steel'], // Solgaleo
    '792': ['Psychic', 'Ghost'], // Lunala
    '793': ['Rock', 'Poison'], // Nihilego
    '794': ['Bug', 'Fighting'], // Buzzwole
    '795': ['Bug', 'Fighting'], // Pheromosa
    '796': ['Electric'], // Xurkitree
    '797': ['Steel', 'Flying'], // Celesteela
    '798': ['Grass', 'Steel'], // Kartana
    '799': ['Dark', 'Dragon'], // Guzzlord
    '800': ['Psychic'], // Necrozma
};

export default function PokeList() {
    const { isSearched } = useSearch();
    const [selectedPokemonType, setSelectedPokemonType] = useState('');
    const [selectedPokemons, setSelectedPokemons] = useState<number[]>([]);

    useEffect(() => {
        if (isSearched) {
            getSelectedPokemonType();
        } else {
            setSelectedPokemons([]);
        }
    }, [isSearched]);

    function getPokemonByType(type: string): number[] {
        const result: number[] = [];
        for (const [index, types] of Object.entries(pokemonTypes)) {
            if (types.includes(type)) {
                result.push(Number(index));
            }
        }
        setSelectedPokemons(result);
        return result;
    }

    function getSelectedPokemonType() {
        const type = sessionStorage.getItem('type');
        if (type) {
            setSelectedPokemonType(type);
            getPokemonByType(type);
        }
    }

    function types(types: number) {
        return pokemonTypes[types];
    }

    return (
        <div className="w-full h-auto grid grid-cols-5 gap-8 p-12 border-2 border-slate-700 rounded-2xl">
            {!isSearched
                ? Object.keys(pokedex).map((key) => {
                      const name = pokedex[key];
                      const imageName = name
                          .toLowerCase()
                          .replace(/\s+/g, '-')
                          .replace(/\./g, '');
                      return (
                          <PokeCard
                              key={key}
                              types={types(Number(key))}
                              number={Number(key)}
                              name={name}
                              location={`/pokemons/${imageName}.png`}
                          />
                      );
                  })
                : selectedPokemons.map((key) => {
                      const name = pokedex[key];
                      const imageName = name
                          .toLowerCase()
                          .replace(/\s+/g, '-')
                          .replace(/\./g, '');
                      return (
                          <PokeCard
                              key={key}
                              types={types(Number(key))}
                              number={Number(key)}
                              name={name}
                              location={`/pokemons/${imageName}.png`}
                          />
                      );
                  })}
        </div>
    );
}
