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
];

export default AvesData;
