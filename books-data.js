const BOOKS_DATA = {
    "a-escolha-do-verao": {
        title: "A Escolha do Verão",
        genre: "Alta Fantasia",
        volume: "Volume 1",
        publisher: "Thomas Nelson Brasil",
        cover: "https://m.media-amazon.com/images/I/81PsszOxDqL._SL1500_.jpg",
        amazonLink: "https://www.amazon.com.br/escolha-do-Ver%C3%A3o-Sara-Gusella-ebook/dp/B0F8P4FQ48?ref_=ast_author_dp_rw&th=1&psc=1&dib=eyJ2IjoiMSJ9.-MalnGVaQRZbWXR_b7Ou_2cSngDUn3d6DldnzSTh0UV-tlEDXr9Dh6abGhSZhDZygGm-oj-VxZ52iTdWIlkfXk7BflWHD8oWCVQZCXhnEfy1O2hfqryGV5M53gpB7_FA36ugVpA6jox3DDsEHQhQHw.964jrYEOSMiyIx_BKkTYLrhvVgVjUaLooTKClVLJoyE&dib_tag=AUTHOR",
        description: "Beor parte numa missão para resgatar o verão quando um inverno rigoroso atinge a sua vila, descobrindo perigos e segredos ocultos da humanidade.",
        quote: "O sol desapareceu, e o gelo assumiu as regras do vilarejo...",
        specs: "Soberania, Estações, Fantasia Épica, Escolhas"
    },
    "a-esperanca-da-primavera": {
        title: "A Esperança da Primavera",
        genre: "Alta Fantasia",
        volume: "Volume 2",
        publisher: "Thomas Nelson Brasil",
        cover: "https://m.media-amazon.com/images/I/81NTWf+Us3L._SL1500_.jpg",
        amazonLink: "https://www.amazon.com.br/esperan%C3%A7a-primavera-continua%C3%A7%C3%A3o-escolha-Esta%C3%A7%C3%B5es-ebook/dp/B0FBX9FQ3K?ref_=ast_author_dp_rw&th=1&psc=1&dib=eyJ2IjoiMSJ9.-MalnGVaQRZbWXR_b7Ou_2cSngDUn3d6DldnzSTh0UV-tlEDXr9Dh6abGhSZhDZygGm-oj-VxZ52iTdWIlkfXk7BflWHD8oWCVQZCXhnEfy1O2hfqryGV5M53gpB7_FA36ugVpA6jox3DDsEHQhQHw.964jrYEOSMiyIx_BKkTYLrhvVgVjUaLooTKClVLJoyE&dib_tag=AUTHOR",
        description: "Beor e Florence embarcam numa jornada através do continente para proteger o equilíbrio entre as estações quando uma garota sem memórias surge misteriosamente no Palácio do Sol.",
        quote: "O equilíbrio dependia de um coração que não se lembrava do próprio passado...",
        specs: "Identidade, Mistério, Continente Épico, Alianças"
    },
    "o-orfao-da-cidade-escura": {
        title: "O Órfão da Cidade Escura",
        genre: "Conto Fantástico",
        volume: "Spin-off Especial",
        publisher: "Publicação Independente",
        cover: "https://m.media-amazon.com/images/I/618tLJl1TxL._SL1000_.jpg",
        amazonLink: "https://www.amazon.com.br/%C3%93rf%C3%A3o-Cidade-Escura-Universo-Esta%C3%A7%C3%B5es-ebook/dp/B09P2RHT3F?ref_=ast_author_dp_rw&th=1&psc=1&dib=eyJ2IjoiMSJ9.-MalnGVaQRZbWXR_b7Ou_2cSngDUn3d6DldnzSTh0UV-tlEDXr9Dh6abGhSZhDZygGm-oj-VxZ52iTdWIlkfXk7BflWHD8oWCVQZCXhnEfy1O2hfqryGV5M53gpB7_FA36ugVpA6jox3DDsEHQhQHw.964jrYEOSMiyIx_BKkTYLrhvVgVjUaLooTKClVLJoyE&dib_tag=AUTHOR",
        description: "Um conto fantástico ambientado no Universo das Estações que reimagina a história do profeta Samuel através dos olhos de um órfão na misteriosa Cidade Escura.",
        quote: "Na escuridão da cidade, uma voice antiga voltou a chamar pelo nome correto.",
        specs: "Samuel, Releitura Bíblica, Profecia, Fantasia Sombria"
    },
    "os-clas-da-lua": {
        title: "Os Clãs da Lua",
        genre: "Ficção Científica",
        volume: "Distopia Cósmica",
        publisher: "Thomas Nelson Brasil",
        cover: "https://m.media-amazon.com/images/I/815F42sCtXL._SL1500_.jpg",
        amazonLink: "https://www.amazon.com.br/Os-cl%C3%A3s-lua-inspirada-hist%C3%B3ria-ebook/dp/B0DFMNHC2B?ref_=ast_author_dp_rw&th=1&psc=1&dib=eyJ2IjoiMSJ9.-MalnGVaQRZbWXR_b7Ou_2cSngDUn3d6DldnzSTh0UV-tlEDXr9Dh6abGhSZhDZygGm-oj-VxZ52iTdWIlkfXk7BflWHD8oWCVQZCXhnEfy1O2hfqryGV5M53gpB7_FA36ugVpA6jox3DDsEHQhQHw.964jrYEOSMiyIx_BKkTYLrhvVgVjUaLooTKClVLJoyE&dib_tag=AUTHOR",
        description: "Em um futuro distante onde a humanidade vive escravizada na Lua, os humanos se agarram a uma antiga profecia que promete a liberdade e o retorno à Terra.",
        quote: "Olhar para trás não era mais uma opção teológica; era uma impossibilidade física.",
        specs: "Soberania, Êxodo, Ficção Especulativa, Redenção"
    },
    "o-fim-de-todas-as-marcas": {
        title: "O Fim De Todas as Marcas",
        genre: "Ficção Planetária",
        volume: "Volume Único",
        publisher: "Publicação Independente",
        cover: "https://m.media-amazon.com/images/I/71CAnX9+qzL._SL1500_.jpg",
        amazonLink: "https://www.amazon.com.br/Fim-Todas-as-Marcas-ebook/dp/B0CBVJ7P28?ref_=ast_author_dp_rw&th=1&psc=1&dib=eyJ2IjoiMSJ9.-MalnGVaQRZbWXR_b7Ou_2cSngDUn3d6DldnzSTh0UV-tlEDXr9Dh6abGhSZhDZygGm-oj-VxZ52iTdWIlkfXk7BflWHD8oWCVQZCXhnEfy1O2hfqryGV5M53gpB7_FA36ugVpA6jox3DDsEHQhQHw.964jrYEOSMiyIx_BKkTYLrhvVgVjUaLooTKClVLJoyE&dib_tag=AUTHOR",
        description: "Em um planeta desértico onde cada erro e pecado se torna uma marca física irreversível na pele, uma prostituta e um assassino se unem pela menção de um homem que pode removê-las.",
        quote: "A pele carregava o julgamento visível, mas a cura exigia um sacrifício invisível.",
        specs: "Cicatrizes, Deserto Cósmico, Graça, Justiça"
    },
    "godspeed-june": {
        title: "Godspeed, June",
        genre: "Ficção Científica Curta",
        volume: "Conto Espacial",
        publisher: "Publicação Independente",
        cover: "https://m.media-amazon.com/images/I/81W-q-0MiJL._SL1500_.jpg",
        amazonLink: "https://www.amazon.com.br/Godspeed-June-Sara-Gusella-ebook/dp/B0GX4499VM?ref_=ast_author_dp_rw&th=1&psc=1&dib=eyJ2IjoiMSJ9.-MalnGVaQRZbWXR_b7Ou_2cSngDUn3d6DldnzSTh0UV-tlEDXr9Dh6abGhSZhDZygGm-oj-VxZ52iTdWIlkfXk7BflWHD8oWCVQZCXhnEfy1O2hfqryGV5M53gpB7_FA36ugVpA6jox3DDsEHQhQHw.964jrYEOSMiyIx_BKkTYLrhvVgVjUaLooTKClVLJoyE&dib_tag=AUTHOR",
        description: "Uma ficção científica curta sobre uma astronauta em uma viagem espacial solitária até o último planeta do universo para ter um encontro com Deus.",
        quote: "Quando os propulsores silenciaram no fim do cosmos, o silêncio respondeu com uma voz.",
        specs: "Astronáutica, Solidão, Fronteira Cósmica, Transcendência"
    },
    "desejos-em-guerra": {
        title: "Desejos em Guerra",
        genre: "Drama Épico",
        volume: "Volume Único",
        publisher: "Publicação Independente",
        cover: "https://m.media-amazon.com/images/I/71UscXlQLlL._SL1500_.jpg",
        amazonLink: "https://www.amazon.com.br/Desejos-Guerra-Uma-romantasia-crist%C3%A3-ebook/dp/B0D472B95D",
        description: "Duas nações inimigas, separadas por uma traição ancestral entre irmãos, vivem uma guerra milenar onde o amor pode florescer no campo de batalha.",
        quote: "As espadas cavavam trincheiras, mas os olhos buscavam o cessar-fogo ancestral.",
        specs: "Irmãos, Rivalidade, Reconciliação, Fronteiras"
    },
    "parque-fallacie": {
        title: "Parque Fallacie",
        genre: "Ficção Fantástica",
        volume: "Suspense Psicológico",
        publisher: "Publicação Independente",
        cover: "https://m.media-amazon.com/images/I/81pDApSxU6L._SL1500_.jpg",
        amazonLink: "https://www.amazon.com.br/Parque-Fallacie-Sara-Gusella-ebook/dp/B09VCS86MQ?ref_=ast_author_dp_rw&th=1&psc=1&dib=eyJ2IjoiMSJ9.-MalnGVaQRZbWXR_b7Ou_2cSngDUn3d6DldnzSTh0UV-tlEDXr9Dh6abGhSZhDZygGm-oj-VxZ52iTdWIlkfXk7BflWHD8oWCVQZCXhnEfy1O2hfqryGV5M53gpB7_FA36ugVpA6jox3DDsEHQhQHw.964jrYEOSMiyIx_BKkTYLrhvVgVjUaLooTKClVLJoyE&dib_tag=AUTHOR",
        description: "Renata, uma adolescente reclusa, é forçada a enfrentar seus maiores medos e lutar pelo próprio coração ao visitar um parque de diversões com brinquedos que desafiam a física.",
        quote: "A gravidade era a menor das ilusões que aquele parque tentava me impor.",
        specs: "Ilusões, Superação, Medos Internos, Realidade"
    },
    "o-jogador-que-viajou-no-tempo": {
        title: "O Jogador que Viajou no Tempo",
        genre: "Ficção Temporal",
        volume: "Narrativa Esportiva",
        publisher: "Publicação Independente",
        cover: "https://m.media-amazon.com/images/I/712JmcGzdNL._SL1200_.jpg",
        amazonLink: "https://www.amazon.com.br/jogador-que-viajou-Tempo-ebook/dp/B0BNXWZ4BD?ref_=ast_author_dp_rw&th=1&psc=1&dib=eyJ2IjoiMSJ9.-MalnGVaQRZbWXR_b7Ou_2cSngDUn3d6DldnzSTh0UV-tlEDXr9Dh6abGhSZhDZygGm-oj-VxZ52iTdWIlkfXk7BflWHD8oWCVQZCXhnEfy1O2hfqryGV5M53gpB7_FA36ugVpA6jox3DDsEHQhQHw.964jrYEOSMiyIx_BKkTYLrhvVgVjUaLooTKClVLJoyE&dib_tag=AUTHOR",
        description: "Uma narrativa que une a temática de esportes com viagens temporais, explorando as consequências de decisões passadas e o impacto no presente.",
        quote: "Mudar o placar do ontem não consertava os erros cometidos fora das quatro linhas.",
        specs: "Cronos, Escolhas, Legado, Redenção de Tempo"
    }
};
