const AvesData = [
  {
    id: 1,
    nombre: "Tiuque",
    nombre_cientifico: "Daptrius Chimango",
    imagen:
      "https://inaturalist-open-data.s3.amazonaws.com/photos/101982726/large.jpg",
  },
  {
    id: 2,
    nombre: "Bandurria",
    nombre_cientifico: "Theristicus Melanopis",
    imagen: "https://static.inaturalist.org/photos/6585338/large.jpg",
  },
  {
    id: 3,
    nombre: "Gaviota Cáhuil",
    nombre_cientifico: "Chroicocephalus maculipennis",
    imagen: "https://live.staticflickr.com/7917/46723638702_594a616faf_b.jpg",
  },
  {
    id: 4,
    nombre: "Yeco",
    nombre_cientifico: "Nannopterum brasilianum",
    imagen:
      "https://th.bing.com/th/id/R.42299149fae83292aa769a485c8da5d3?rik=XY24MKjnQugjtA&riu=http%3a%2f%2fwww.ecoregistros.org%2fsite%2fimages%2falbumes%2f56%2f1637%2fIMG_3958-Bigua.jpg&ehk=ZGd%2bdJcG7ukUhGTU1MZYwJexOYQvl%2bSpuuQp9pi9uTY%3d&risl=&pid=ImgRaw&r=0",
  },
  {
    id: 5,
    nombre: "Cisne de Cuello Negro",
    nombre_cientifico: "Cygnus melancoryphus",
    imagen:
      "https://th.bing.com/th/id/OIP.8QxRfe6CQDejrtAKUrgvRAHaFS?pid=ImgDet&rs=1",
  },
  {
    id: 6,
    nombre: "Queltehue",
    nombre_cientifico: "Vanellus chilensis",
    imagen: "https://www.latin-wife.com/images/southern-vanellus-chilensis.jpg",
  },
  {
    id: 7,
    nombre: "Jote de Cabeza Negra",
    nombre_cientifico: "Coragyps atratus",
    imagen:
      "https://th.bing.com/th/id/R.548941632aaad8af1cf03ebe1f25db06?rik=LbjFkEkUrLas0Q&riu=http%3a%2f%2fgepog.org%2fsites%2fdefault%2ffiles%2fphototeque%2fCoragypsatratus_MichelGiraud-Audine_604.jpg&ehk=36PQ0sWvJ21GoW4%2fYAZVWhFkZO4%2b8Jr2wu4%2fgM0neAw%3d&risl=&pid=ImgRaw&r=0",
  },
  {
    id: 8,
    nombre: "Martín Pescador",
    nombre_cientifico: "Megaceryle torquata",
    imagen:
      "https://th.bing.com/th/id/R.c8c9cc7132239f9e40b5dd1828b842b3?rik=5pspTzD%2b%2bUHhzg&pid=ImgRaw&r=0",
  },
  {
    id: 9,
    nombre: "Gaviota Dominicana",
    nombre_cientifico: "Larus dominicanus",
    imagen:
      "https://th.bing.com/th/id/OIP.ydPrVuoqB6t1T5EHGn6PfQHaEo?pid=ImgDet&rs=1",
  },
  {
    id: 10,
    nombre: "Lile",
    nombre_cientifico: "Poikilocarbo gaimardi",
    imagen:
      "https://inaturalist-open-data.s3.amazonaws.com/photos/174754551/medium.jpg",
  },
  {
    id: 11,
    nombre: "Huala",
    nombre_cientifico: "Podiceps major",
    imagen:
      "https://inaturalist-open-data.s3.amazonaws.com/photos/31508/large.jpg",
  },
  {
    id: 12,
    nombre: "Huairavo",
    nombre_cientifico: "Nycticorax nycticorax",
    imagen:
      "https://inaturalist-open-data.s3.amazonaws.com/photos/49357930/large.jpg",
  },
  {
    id: 13,
    nombre: "Traro",
    nombre_cientifico: "Caracara plancus",
    imagen:
      "https://inaturalist-open-data.s3.amazonaws.com/photos/229340308/large.jpg",
  },
  {
    id: 14,
    nombre: "Pelícano",
    nombre_cientifico: "Pelecanus thagus",
    imagen:
      "https://inaturalist-open-data.s3.amazonaws.com/photos/209975111/large.jpg",
  },
  {
    id: 15,
    nombre: "Jote de Cabeza Colorada",
    nombre_cientifico: "Cathartes aura",
    imagen:
      "https://inaturalist-open-data.s3.amazonaws.com/photos/52277010/large.jpg",
  },
  {
    id: 16,
    nombre: "Picaflor Chico",
    nombre_cientifico: "Sephanoides sephaniodes",
    imagen: "https://static.inaturalist.org/photos/40401689/large.jpg",
  },
  {
    id: 17,
    nombre: "Tenca",
    nombre_cientifico: "Mimus thenca",
    imagen:
      "https://inaturalist-open-data.s3.amazonaws.com/photos/82631517/large.jpg",
  },
  {
    id: 18,
    nombre: "Pequén",
    nombre_cientifico: "Athene cunicularia",
    imagen: "https://static.inaturalist.org/photos/57747291/large.jpg",
  },
  {
    id: 19,
    nombre: "Pato Jergón Chico",
    nombre_cientifico: "Anas flavirostris",
    imagen: "https://static.inaturalist.org/photos/32083625/large.jpg",
  },
  {
    id: 20,
    nombre: "Zarapito",
    nombre_cientifico: "Numenius phaeopus",
    imagen:
      "https://inaturalist-open-data.s3.amazonaws.com/photos/1940369/large.jpg",
  },
  {
    id: 21,
    nombre: "Churrete",
    nombre_cientifico: "Cinclodes patagonicus",
    imagen: "https://static.inaturalist.org/photos/7876982/large.jpg",
  },
  {
    id: 22,
    nombre: "Run-Run",
    nombre_cientifico: "Hymenops perspicillatus",
    imagen:
      "https://inaturalist-open-data.s3.amazonaws.com/photos/386914/large.jpg",
  },
  {
    id: 23,
    nombre: "Fio-Fio",
    nombre_cientifico: "Elaenia albiceps",
    imagen:
      "https://inaturalist-open-data.s3.amazonaws.com/photos/171081883/large.jpg",
  },
  {
    id: 24,
    nombre: "Garza Grande",
    nombre_cientifico: "Ardea alba",
    imagen:
      "https://inaturalist-open-data.s3.amazonaws.com/photos/112321001/large.jpg",
  },
  {
    id: 25,
    nombre: "Garza Cuca",
    nombre_cientifico: "Ardea cocoi",
    imagen:
      "https://inaturalist-open-data.s3.amazonaws.com/photos/55349434/large.jpg",
  },
  {
    id: 26,
    nombre: "Loica",
    nombre_cientifico: "Leistes loyca",
    imagen:
      "https://inaturalist-open-data.s3.amazonaws.com/photos/27347/large.jpg",
  },
  {
    id: 27,
    nombre: "Choroy",
    nombre_cientifico: "Enicognathus leptorhynchus",
    imagen: "https://static.inaturalist.org/photos/79063596/large.jpg",
  },
  {
    id: 28,
    nombre: "Diucón",
    nombre_cientifico: "Pyrope pyrope",
    imagen: "https://static.inaturalist.org/photos/40551215/large.jpeg",
  },
  {
    id: 29,
    nombre: "Pilpilén",
    nombre_cientifico: "Haematopus palliatus",
    imagen:
      "https://inaturalist-open-data.s3.amazonaws.com/photos/159938212/large.jpg",
  },
  {
    id: 30,
    nombre: "Sietecolores",
    nombre_cientifico: "Tachuris rubrigastra",
    imagen:
      "https://inaturalist-open-data.s3.amazonaws.com/photos/654414/large.jpg",
  },
  {
    id: 31,
    nombre: "Cachaña",
    nombre_cientifico: "Enicognathus ferrugineus",
    imagen:
      "https://inaturalist-open-data.s3.amazonaws.com/photos/157827543/large.jpg",
  },
  {
    id: 32,
    nombre: "Cometocino Patagónico",
    nombre_cientifico: "Phrygilus patagonicus",
    imagen:
      "https://inaturalist-open-data.s3.amazonaws.com/photos/17551/large.jpg",
  },
  {
    id: 33,
    nombre: "Chuncho",
    nombre_cientifico: "Glaucidium nana",
    imagen: "https://static.inaturalist.org/photos/122451534/large.jpeg",
  },
  {
    id: 34,
    nombre: "Pilpilén Negro",
    nombre_cientifico: "Haematopus ater",
    imagen: "https://static.inaturalist.org/photos/213757644/large.jpg",
  },
  {
    id: 35,
    nombre: "Hued-hued del Sur",
    nombre_cientifico: "Pteroptochos tarnii",
    imagen:
      "https://inaturalist-open-data.s3.amazonaws.com/photos/26136299/large.jpg",
  },
  {
    id: 36,
    nombre: "Garza Chica",
    nombre_cientifico: "Egretta thula",
    imagen: "https://static.inaturalist.org/photos/107527504/large.jpeg",
  },
  {
    id: 37,
    nombre: "Rara",
    nombre_cientifico: "Phytotoma rara",
    imagen:
      "https://inaturalist-open-data.s3.amazonaws.com/photos/122882708/large.jpg",
  },
  {
    id: 38,
    nombre: "Rayadito",
    nombre_cientifico: "Aphrastura spinicauda",
    imagen:
      "https://inaturalist-open-data.s3.amazonaws.com/photos/33114942/large.jpg",
  },
  {
    id: 39,
    nombre: "Pitío",
    nombre_cientifico: "Colaptes pitius",
    imagen:
      "https://inaturalist-open-data.s3.amazonaws.com/photos/29540935/large.jpeg",
  },
  {
    id: 40,
    nombre: "Pato Norteño",
    nombre_cientifico: "Anas platyrhynchos",
    imagen:
      "https://inaturalist-open-data.s3.amazonaws.com/photos/95268822/large.jpg",
  },
  {
    id: 41,
    nombre: "Chincol",
    nombre_cientifico: "Zonotrichia capensis",
    imagen:
      "https://inaturalist-open-data.s3.amazonaws.com/photos/46565554/large.jpg",
  },
  {
    id: 42,
    nombre: "Zorzal",
    nombre_cientifico: "Turdus falcklandii",
    imagen:
      "https://inaturalist-open-data.s3.amazonaws.com/photos/27851070/large.jpg",
  },
  {
    id: 43,
    nombre: "Aguilucho",
    nombre_cientifico: "Geranoaetus polyosoma",
    imagen:
      "https://inaturalist-open-data.s3.amazonaws.com/photos/188366487/large.jpg",
  },
  {
    id: 44,
    nombre: "Torcaza",
    nombre_cientifico: "Patagioenas araucana",
    imagen:
      "https://inaturalist-open-data.s3.amazonaws.com/photos/29163569/large.jpeg",
  },
  {
    id: 45,
    nombre: "Tordo",
    nombre_cientifico: "Curaeus curaeus",
    imagen:
      "https://inaturalist-open-data.s3.amazonaws.com/photos/35617692/large.jpeg",
  },
  {
    id: 46,
    nombre: "Jilguero",
    nombre_cientifico: "Spinus barbatus",
    imagen: "https://static.inaturalist.org/photos/77748917/large.jpg",
  },
  {
    id: 47,
    nombre: "Chorlo Chileno",
    nombre_cientifico: "Charadrius modestus",
    imagen: "https://static.inaturalist.org/photos/35851379/large.jpg",
  },
  {
    id: 48,
    nombre: "Gorrión Doméstico",
    nombre_cientifico: "Passer domesticus",
    imagen:
      "https://inaturalist-open-data.s3.amazonaws.com/photos/52034654/large.jpg",
  },
  {
    id: 49,
    nombre: "Pato Real",
    nombre_cientifico: "Mareca sibilatrix",
    imagen: "https://static.inaturalist.org/photos/213754166/large.jpg",
  },
  {
    id: 50,
    nombre: "Cuervo de Pantano",
    nombre_cientifico: "Plegadis chihi",
    imagen:
      "https://inaturalist-open-data.s3.amazonaws.com/photos/131864344/large.jpg",
  },
  {
    id: 51,
    nombre: "Cernícalo",
    nombre_cientifico: "Falco sparverius",
    imagen: "https://static.inaturalist.org/photos/18452733/large.jpg",
  },
  {
    id: 52,
    nombre: "Chucao",
    nombre_cientifico: "Scelorchilus rubecula",
    imagen:
      "https://inaturalist-open-data.s3.amazonaws.com/photos/37907084/large.jpg",
  },
  {
    id: 55,
    nombre: "Cachudito",
    nombre_cientifico: "Anairetes parulus",
    imagen: "https://static.inaturalist.org/photos/33256332/large.jpg",
  },
  {
    id: 54,
    nombre: "Perrito",
    nombre_cientifico: "Himantopus mexicanus",
    imagen: "https://static.inaturalist.org/photos/114045609/large.jpeg",
  },
  {
    id: 55,
    nombre: "Chercán",
    nombre_cientifico: "Troglodytes aedon",
    imagen:
      "https://inaturalist-open-data.s3.amazonaws.com/photos/41512670/large.jpg",
  },
  {
    id: 56,
    nombre: "Comesebo Grande",
    nombre_cientifico: "Pygarrhichas albogularis",
    imagen:
      "https://inaturalist-open-data.s3.amazonaws.com/photos/9538630/large.jpg",
  },
  {
    id: 57,
    nombre: "Trile",
    nombre_cientifico: "Agelasticus thilius",
    imagen:
      "https://inaturalist-open-data.s3.amazonaws.com/photos/2553775/large.jpg",
  },
  {
    id: 58,
    nombre: "Gaviotín Piquerito",
    nombre_cientifico: "Sterna trudeaui",
    imagen:
      "https://inaturalist-open-data.s3.amazonaws.com/photos/48506878/large.jpeg",
  },
  {
    id: 59,
    nombre: "Mirlo",
    nombre_cientifico: "Molothrus bonariensis",
    imagen:
      "https://inaturalist-open-data.s3.amazonaws.com/photos/158695164/large.jpg",
  },
  {
    id: 60,
    nombre: "Gaviota Garuma",
    nombre_cientifico: "Leucophaeus modestus",
    imagen: "https://static.inaturalist.org/photos/15185085/large.jpg",
  },
  {
    id: 61,
    nombre: "Pidén",
    nombre_cientifico: "Pardirallus sanguinolentus",
    imagen:
      "https://inaturalist-open-data.s3.amazonaws.com/photos/247574/large.jpg",
  },
  {
    id: 62,
    nombre: "Piquero",
    nombre_cientifico: "Sula variegata",
    imagen:
      "https://inaturalist-open-data.s3.amazonaws.com/photos/660314/large.jpg",
  },
  {
    id: 63,
    nombre: "Pingüino de Magallanes",
    nombre_cientifico: "Spheniscus magellanicus",
    imagen:
      "https://inaturalist-open-data.s3.amazonaws.com/photos/172295470/large.jpg",
  },
  {
    id: 64,
    nombre: "Chirihue",
    nombre_cientifico: "Sicalis luteola",
    imagen:
      "https://inaturalist-open-data.s3.amazonaws.com/photos/33491763/large.jpeg",
  },
  {
    id: 65,
    nombre: "Carpintero Negro",
    nombre_cientifico: "Campephilus magellanicus",
    imagen:
      "https://inaturalist-open-data.s3.amazonaws.com/photos/48405/large.jpg",
  },
  {
    id: 66,
    nombre: "Gaviota de Franklin",
    nombre_cientifico: "Leucophaeus pipixcan",
    imagen:
      "https://inaturalist-open-data.s3.amazonaws.com/photos/67118059/large.jpg",
  },
  {
    id: 67,
    nombre: "Golondrina Chilena",
    nombre_cientifico: "Tachycineta leucopyga",
    imagen:
      "https://inaturalist-open-data.s3.amazonaws.com/photos/70927/large.jpg",
  },
  {
    id: 68,
    nombre: "Carpinterito ",
    nombre_cientifico: "Dryobates lignarius",
    imagen: "https://static.inaturalist.org/photos/23283624/large.jpg",
  },
  {
    id: 69,
    nombre: "Paloma Asiática Doméstica",
    nombre_cientifico: "Columba livia",
    imagen:
      "https://inaturalist-open-data.s3.amazonaws.com/photos/96934693/large.jpg",
  },
  {
    id: 70,
    nombre: "Pitotoy Grande",
    nombre_cientifico: "Tringa melanoleuca",
    imagen:
      "https://inaturalist-open-data.s3.amazonaws.com/photos/48630238/large.jpeg",
  },
  {
    id: 71,
    nombre: "Pato Jergón Grande",
    nombre_cientifico: "Anas georgica",
    imagen:
      "https://inaturalist-open-data.s3.amazonaws.com/photos/177332894/large.jpeg",
  },
  {
    id: 72,
    nombre: "Colegial",
    nombre_cientifico: "Lessonia rufa",
    imagen:
      "https://inaturalist-open-data.s3.amazonaws.com/photos/238983904/large.jpg",
  },

  {
    id: 73,
    nombre: "Nuco",
    nombre_cientifico: "Asio flammeus",
    imagen:
      "https://inaturalist-open-data.s3.amazonaws.com/photos/262787956/large.jpg",
  },
  {
    id: 74,
    nombre: "Cormorán Imperial",
    nombre_cientifico: "Leucocarbo atriceps",
    imagen:
      "https://inaturalist-open-data.s3.amazonaws.com/photos/53269181/large.jpg",
  },
  {
    id: 75,
    nombre: "Tórtola",
    nombre_cientifico: "Zenaida auriculata",
    imagen:
      "https://inaturalist-open-data.s3.amazonaws.com/photos/85633474/large.jpeg",
  },
  {
    id: 76,
    nombre: "Pingüino de Humboldt",
    nombre_cientifico: "Spheniscus humboldti",
    imagen:
      "https://inaturalist-open-data.s3.amazonaws.com/photos/161759810/large.jpg",
  },
  {
    id: 77,
    nombre: "Playero de Baird",
    nombre_cientifico: "Calidris bairdii",
    imagen: "https://static.inaturalist.org/photos/92748723/large.jpg",
  },
  {
    id: 78,
    nombre: "Chercán de Las Vegas",
    nombre_cientifico: "Cistothorus platensis",
    imagen:
      "https://inaturalist-open-data.s3.amazonaws.com/photos/107287092/large.jpeg",
  },
  {
    id: 79,
    nombre: "Churrín de la Mocha",
    nombre_cientifico: "Eugralla paradoxa",
    imagen:
      "https://inaturalist-open-data.s3.amazonaws.com/photos/207267611/large.jpeg",
  },
  {
    id: 80,
    nombre: "Albatros de Ceja Negra",
    nombre_cientifico: "Thalassarche melanophris",
    imagen:
      "https://inaturalist-open-data.s3.amazonaws.com/photos/171871704/large.jpg",
  },
  {
    id: 81,
    nombre: "Tagua",
    nombre_cientifico: "Fulica armillata",
    imagen: "https://static.inaturalist.org/photos/97562325/large.jpg",
  },
  {
    id: 82,
    nombre: "Gaviotín Sudamericano",
    nombre_cientifico: "Sterna hirundinacea",
    imagen:
      "https://inaturalist-open-data.s3.amazonaws.com/photos/2019765/large.JPG",
  },
  {
    id: 83,
    nombre: "Rayador",
    nombre_cientifico: "Rynchops niger",
    imagen:
      "https://inaturalist-open-data.s3.amazonaws.com/photos/4806/large.jpg",
  },
  {
    id: 84,
    nombre: "Aguilucho de Cola Rojiza",
    nombre_cientifico: "Buteo ventralis",
    imagen:
      "https://inaturalist-open-data.s3.amazonaws.com/photos/222644904/large.jpeg",
  },
  {
    id: 85,
    nombre: "Bailarín",
    nombre_cientifico: "Elanus leucurus",
    imagen: "https://static.inaturalist.org/photos/114637752/large.jpeg",
  },
  {
    id: 86,
    nombre: "Churrete Chico",
    nombre_cientifico: "Cinclodes oustaleti",
    imagen:
      "https://inaturalist-open-data.s3.amazonaws.com/photos/70918/large.jpg",
  },
  {
    id: 87,
    nombre: "Churrete Acanelado",
    nombre_cientifico: "Cinclodes fuscus",
    imagen:
      "https://inaturalist-open-data.s3.amazonaws.com/photos/60334012/large.jpg",
  },
  {
    id: 88,
    nombre: "Colilarga",
    nombre_cientifico: "Sylviorthorhynchus desmursii",
    imagen: "https://static.inaturalist.org/photos/225280102/large.jpg",
  },
  {
    id: 89,
    nombre: "Dormilona Tontito",
    nombre_cientifico: "Muscisaxicola maclovianus",
    imagen:
      "https://inaturalist-open-data.s3.amazonaws.com/photos/1107387/large.jpg",
  },
  {
    id: 90,
    nombre: "Playero de Las Rompientes",
    nombre_cientifico: "Calidris virgata",
    imagen:
      "https://inaturalist-open-data.s3.amazonaws.com/photos/28440005/large.jpg",
  },
  {
    id: 91,
    nombre: "Peuquito",
    nombre_cientifico: "Accipiter chilensis",
    imagen:
      "https://inaturalist-open-data.s3.amazonaws.com/photos/82961087/large.jpg",
  },
  {
    id: 92,
    nombre: "Codorniz",
    nombre_cientifico: "Callipepla californica",
    imagen:
      "https://inaturalist-open-data.s3.amazonaws.com/photos/252273183/large.jpg",
  },
  {
    id: 93,
    nombre: "Pitotoy Chico",
    nombre_cientifico: "Tringa flavipes",
    imagen:
      "https://inaturalist-open-data.s3.amazonaws.com/photos/13184983/large.jpg",
  },
  {
    id: 94,
    nombre: "Pimpollo",
    nombre_cientifico: "Rollandia rolland",
    imagen:
      "https://inaturalist-open-data.s3.amazonaws.com/photos/13258944/large.jpg",
  },
  {
    id: 95,
    nombre: "Gaviotín Monja",
    nombre_cientifico: "Larosterna inca",
    imagen:
      "https://inaturalist-open-data.s3.amazonaws.com/photos/12945797/large.jpeg",
  },
  {
    id: 96,
    nombre: "Chorlo de Collar",
    nombre_cientifico: "Charadrius collaris",
    imagen:
      "https://inaturalist-open-data.s3.amazonaws.com/photos/95051106/large.jpeg",
  },
  {
    id: 97,
    nombre: "Aguilucho Chico",
    nombre_cientifico: "Buteo albigula",
    imagen:
      "https://inaturalist-open-data.s3.amazonaws.com/photos/165648956/large.jpeg",
  },
  {
    id: 98,
    nombre: "Diuca",
    nombre_cientifico: "Diuca diuca",
    imagen:
      "https://inaturalist-open-data.s3.amazonaws.com/photos/1812584/large.jpg",
  },
  {
    id: 98,
    nombre: "Golondrina Bermeja",
    nombre_cientifico: "Hirundo rustica",
    imagen:
      "https://inaturalist-open-data.s3.amazonaws.com/photos/193101149/large.jpg",
  },
  {
    id: 99,
    nombre: "Churrín del Sur",
    nombre_cientifico: "Scytalopus magellanicus",
    imagen:
      "https://inaturalist-open-data.s3.amazonaws.com/photos/23635316/large.jpg",
  },
  {
    id: 100,
    nombre: "Cazamoscas Tijereta",
    nombre_cientifico: "Tyrannus savana",
    imagen:
      "https://inaturalist-open-data.s3.amazonaws.com/photos/169149459/large.jpg",
  },
  {
    id: 101,
    nombre: "Concón",
    nombre_cientifico: "Strix rufipes",
    imagen: "https://static.inaturalist.org/photos/175326700/large.jpeg",
  },
  {
    id: 102,
    nombre: "Perdiz",
    nombre_cientifico: "Nothoprocta perdicaria",
    imagen:
      "https://inaturalist-open-data.s3.amazonaws.com/photos/77194815/large.jpg",
  },
  {
    id: 103,
    nombre: "Golondrina de Dorso Negro",
    nombre_cientifico: "Pygochelidon cyanoleuca",
    imagen: "https://static.inaturalist.org/photos/20340117/large.jpg",
  },
  {
    id: 104,
    nombre: "Gaviotín Elegante",
    nombre_cientifico: "Thalasseus elegans",
    imagen:
      "https://inaturalist-open-data.s3.amazonaws.com/photos/184077990/large.jpg",
  },
  {
    id: 105,
    nombre: "Fardela Blanca",
    nombre_cientifico: "Ardenna creatopus",
    imagen:
      "https://inaturalist-open-data.s3.amazonaws.com/photos/5937/large.jpg",
  },
  {
    id: 106,
    nombre: "Fardela Negra",
    nombre_cientifico: "Ardenna grisea",
    imagen:
      "https://inaturalist-open-data.s3.amazonaws.com/photos/180460944/large.jpeg",
  },
  {
    id: 107,
    nombre: "Guanay",
    nombre_cientifico: "Leucocarbo bougainvillii",
    imagen:
      "https://inaturalist-open-data.s3.amazonaws.com/photos/50902078/large.jpg",
  },
  {
    id: 108,
    nombre: "Playero Blanco",
    nombre_cientifico: "Calidris alba",
    imagen:
      "https://inaturalist-open-data.s3.amazonaws.com/photos/55826082/large.jpeg",
  },
  {
    id: 109,
    nombre: "Fardela Negra Grande",
    nombre_cientifico: "Procellaria aequinoctialis",
    imagen:
      "https://inaturalist-open-data.s3.amazonaws.com/photos/3873747/large.jpg",
  },
  {
    id: 110,
    nombre: "Petrel Gigante Antártico",
    nombre_cientifico: "Macronectes giganteus",
    imagen:
      "https://inaturalist-open-data.s3.amazonaws.com/photos/112193825/large.jpg",
  },
  {
    id: 111,
    nombre: "Picurio",
    nombre_cientifico: "Podilymbus podiceps",
    imagen:
      "https://inaturalist-open-data.s3.amazonaws.com/photos/181028073/large.jpg",
  },
  {
    id: 112,
    nombre: "Cisne Coscoroba",
    nombre_cientifico: "Coscoroba coscoroba",
    imagen:
      "https://inaturalist-open-data.s3.amazonaws.com/photos/160405251/large.jpg",
  },
  {
    id: 113,
    nombre: "Tijeral",
    nombre_cientifico: "Leptasthenura aegithaloides",
    imagen: "https://static.inaturalist.org/photos/136441316/large.jpeg",
  },
  {
    id: 114,
    nombre: "Lechuza",
    nombre_cientifico: "Tyto alba",
    imagen: "https://static.inaturalist.org/photos/112741269/large.jpg",
  },
  {
    id: 115,
    nombre: "Águila Pescadora",
    nombre_cientifico: "Pandion haliaetus",
    imagen:
      "https://inaturalist-open-data.s3.amazonaws.com/photos/6903515/large.jpg",
  },
  {
    id: 116,
    nombre: "Tagüita del Norte",
    nombre_cientifico: "Gallinula galeata",
    imagen:
      "https://inaturalist-open-data.s3.amazonaws.com/photos/30905992/large.jpg",
  },
  {
    id: 117,
    nombre: "Tagüita",
    nombre_cientifico: "Porphyriops melanops",
    imagen:
      "https://inaturalist-open-data.s3.amazonaws.com/photos/7582/large.jpg",
  },
  {
    id: 118,
    nombre: "Pato Colorado",
    nombre_cientifico: "Spatula cyanoptera",
    imagen:
      "https://inaturalist-open-data.s3.amazonaws.com/photos/169257315/large.jpg",
  },
  {
    id: 119,
    nombre: "Gallo Asiático",
    nombre_cientifico: "Gallus gallus",
    imagen:
      "https://inaturalist-open-data.s3.amazonaws.com/photos/3784873/large.jpg",
  },
  {
    id: 120,
    nombre: "Zarapito de Pico Recto",
    nombre_cientifico: "Limosa haemastica",
    imagen:
      "https://inaturalist-open-data.s3.amazonaws.com/photos/709061/large.jpg",
  },
  {
    id: 121,
    nombre: "Yunco",
    nombre_cientifico: "Pelecanoides garnotii",
    imagen:
      "https://inaturalist-open-data.s3.amazonaws.com/photos/294455380/large.jpg",
  },
  {
    id: 122,
    nombre: "Golondrina de Mar",
    nombre_cientifico: "Oceanites oceanicus",
    imagen:
      "https://inaturalist-open-data.s3.amazonaws.com/photos/220518955/large.jpeg",
  },
  {
    id: 123,
    nombre: "Petrel-paloma de Pico Delgado",
    nombre_cientifico: "Pachyptila belcheri",
    imagen:
      "https://inaturalist-open-data.s3.amazonaws.com/photos/22674766/large.jpg",
  },
  {
    id: 124,
    nombre: "Petrel Plateado",
    nombre_cientifico: "Fulmarus glacialoides",
    imagen:
      "https://inaturalist-open-data.s3.amazonaws.com/photos/232419/large.jpg",
  },
  {
    id: 125,
    nombre: "Petrel Gigante Subantártico",
    nombre_cientifico: "Macronectes halli",
    imagen:
      "https://inaturalist-open-data.s3.amazonaws.com/photos/55697238/large.jpeg",
  },
  {
    id: 126,
    nombre: "Halcón Perdiguero",
    nombre_cientifico: "Falco femoralis",
    imagen: "https://static.inaturalist.org/photos/41001217/large.jpg",
  },
  {
    id: 127,
    nombre: "Halcón Peregrino",
    nombre_cientifico: "Falco peregrinus",
    imagen:
      "https://inaturalist-open-data.s3.amazonaws.com/photos/3356824/large.jpg",
  },
  {
    id: 128,
    nombre: "Huairavillo",
    nombre_cientifico: "Ixobrychus involucris",
    imagen: "https://static.inaturalist.org/photos/14684519/large.jpg",
  },
  {
    id: 129,
    nombre: "Garza Boyera Africana",
    nombre_cientifico: "Bubulcus ibis",
    imagen:
      "https://inaturalist-open-data.s3.amazonaws.com/photos/242146160/large.jpg",
  },
  {
    id: 130,
    nombre: "Peuco",
    nombre_cientifico: "Parabuteo unicinctus",
    imagen:
      "https://inaturalist-open-data.s3.amazonaws.com/photos/191470/large.jpg",
  },
  {
    id: 131,
    nombre: "Mero Gaucho",
    nombre_cientifico: "Agriornis montanus",
    imagen:
      "https://inaturalist-open-data.s3.amazonaws.com/photos/2333098/large.jpg",
  },
  {
    id: 132,
    nombre: "Pato Anteojillo",
    nombre_cientifico: "Speculanas specularis",
    imagen: "https://static.inaturalist.org/photos/213753839/large.jpg",
  },
  {
    id: 133,
    nombre: "Chorlo Nevado",
    nombre_cientifico: "Charadrius nivosus",
    imagen:
      "https://inaturalist-open-data.s3.amazonaws.com/photos/227950/large.jpg",
  },
  {
    id: 134,
    nombre: "Pato Capuchino",
    nombre_cientifico: "Spatula versicolor",
    imagen:
      "https://inaturalist-open-data.s3.amazonaws.com/photos/166959095/large.jpeg",
  },
  {
    id: 135,
    nombre: "Gallina Ciega",
    nombre_cientifico: "Systellura longirostris",
    imagen:
      "https://inaturalist-open-data.s3.amazonaws.com/photos/28959565/large.jpg",
  },
  {
    id: 136,
    nombre: "Becasina Patagónica",
    nombre_cientifico: "Gallinago magellanica",
    imagen:
      "https://inaturalist-open-data.s3.amazonaws.com/photos/171686208/large.jpeg",
  },
  {
    id: 137,
    nombre: "Chirihue Azafrán",
    nombre_cientifico: "Sicalis flaveola",
    imagen:
      "https://inaturalist-open-data.s3.amazonaws.com/photos/255647599/large.jpg",
  },
  {
    id: 138,
    nombre: "Yal Cordillerano",
    nombre_cientifico: "Melanodera xanthogramma",
    imagen:
      "https://inaturalist-open-data.s3.amazonaws.com/photos/52944007/large.jpg",
  },
  {
    id: 139,
    nombre: "Minero",
    nombre_cientifico: "Geositta cunicularia",
    imagen:
      "https://inaturalist-open-data.s3.amazonaws.com/photos/90377364/large.jpeg",
  },
  {
    id: 140,
    nombre: "Trabajador",
    nombre_cientifico: "Phleocryptes melanops",
    imagen:
      "https://inaturalist-open-data.s3.amazonaws.com/photos/59558992/large.jpg",
  },
  {
    id: 141,
    nombre: "Bailarín Chico Argentino",
    nombre_cientifico: "Anthus hellmayri",
    imagen: "https://static.inaturalist.org/photos/32742912/large.jpg",
  },
  {
    id: 142,
    nombre: "Viudita",
    nombre_cientifico: "Colorhamphus parvirostris",
    imagen:
      "https://inaturalist-open-data.s3.amazonaws.com/photos/2827172/large.jpg",
  },
];

export default AvesData;
