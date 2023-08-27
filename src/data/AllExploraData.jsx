/* const AllExploraData = {
  categorias: {
    ciencia: [],
    salud: [],
    naturaleza: [],
    gastronomia: [],
    deporte: [],
    airelibre: [],
    cafeterias: [],
    mascotas: [],
    campings: [],
    rutas: [],
    juegos: [],
    belleza: [],
    ecologia: [],
    talleres: [],
    nocturna: [],
    historias: [],
    emprendimientos: [],
    entretenimiento: [],
    arriendos: [],
  },
};

ExploraData.forEach((explora) => {
  explora.categorias.forEach((categoria) => {
    if (AllExploraData.categorias[categoria]) {
      AllExploraData.categorias[categoria].push(explora);
    }
  });
});

console.log(AllExploraData); */

// Ahora puedes usar los datos categorizados en tus componentes

const AllExploraData = {
  snippet: {
    todo: [
      {
        id: 1,
        nombre: "Aventuras Micológicas",
        descripcion: "Explorando el Reino Fungi",
        imagen:
          "https://s3.amazonaws.com/skybar.database.teset.1/psilocibina.png",
        categorias: ["Naturaleza"],
        iconos: ["game-icons:grass-mushroom"],
        url: "hongos-en-valdivia",
      },
      {
        id: 2,
        nombre: "Bajo el cielo nocturno",
        descripcion: "Un encuentro espacial inolvidable",
        imagen:
          "https://th.bing.com/th/id/R.d948cc8b68b666a6045d03c129edc840?rik=D992OcUW8pBjvQ&pid=ImgRaw&r=0",
        categorias: ["Ciencia & Tecnología", "Naturaleza"],
        iconos: ["game-icons:microscope", "game-icons:grass-mushroom"],
        url: "cielo-nocturno",
      },
      {
        id: 3,
        nombre: "Emplumados",
        descripcion: "Guía de campo de las aves",
        imagen:
          "https://inaturalist-open-data.s3.amazonaws.com/photos/255647599/large.jpg",
        categorias: ["Naturaleza"],
        iconos: ["game-icons:grass-mushroom"],
        url: "aves-en-valdivia",
      },
      {
        id: 4,
        nombre: "Bajo las olas",
        descripcion: "Maravillas ocultas de la costa",
        imagen:
          "https://laraza.com/wp-content/uploads/sites/5/2020/02/selective-focus-photography-of-octopus-3046629.jpg?quality=80&strip=all",
        categorias: ["Ciencia & Tecnología", "Naturaleza"],
        iconos: ["game-icons:microscope", "game-icons:grass-mushroom"],
        url: "bajo-las-olas",
      },
      {
        id: 5,
        nombre: "Mamíferos en acción",
        descripcion: "Guía de campo",
        imagen:
          "https://4.bp.blogspot.com/-FBHzTEOIjEY/VE5IdoRHTeI/AAAAAAAAAAs/KLv1weHEhXw/s1600/flora-fauna-chile-1.jpg",
        categorias: ["Naturaleza"],
        iconos: ["game-icons:grass-mushroom"],
        url: "mamiferos-en-valdivia",
      },
      {
        id: 6,
        nombre: "Inspírate",
        descripcion: "Conoce a lxs artistas locales",
        imagen: "https://app-valdi.s3.amazonaws.com/artistas.jpg",
        categorias: ["Talentos Locales"],
        iconos: ["game-icons:guitar-head"],
        url: "inspiración",
      },
      {
        id: 7,
        nombre: "Emprendimientos",
        descripcion: "Descubre los negocios locales",
        imagen:
          "https://1.bp.blogspot.com/-rDZUiWILyFU/Xd02V7cRtpI/AAAAAAAAIz8/ps1crGuITPss_i14OLXx0V60eojMW1bIACLcBGAsYHQ/s1600/4.jpg",
        categorias: ["Emprendimientos"],
        iconos: ["game-icons:briefcase"],
        url: "emprendimientos",
      },
      {
        id: 8,
        nombre: "Cine",
        descripcion: "Revisa nuestra programación",
        imagen:
          "https://th.bing.com/th/id/OIP.fd1VO2375Bu7NHTTNA3-IwHaEc?pid=ImgDet&rs=1",
        categorias: ["Entretenimiento"],
        iconos: ["game-icons:film-projector"],
        url: "cine",
      },
    ],
    ciencia: [
      {
        id: 1,
        nombre: "Bajo el cielo nocturno",
        descripcion: "Un encuentro espacial inolvidable",
        imagen:
          "https://th.bing.com/th/id/R.d948cc8b68b666a6045d03c129edc840?rik=D992OcUW8pBjvQ&pid=ImgRaw&r=0",
        categorias: ["Ciencia & Tecnología", "Naturaleza"],
        iconos: ["game-icons:microscope", "game-icons:grass-mushroom"],
        url: "cielo-nocturno",
      },
      {
        id: 2,
        nombre: "Bajo las olas",
        descripcion: "Maravillas ocultas de la Costa",
        imagen:
          "https://laraza.com/wp-content/uploads/sites/5/2020/02/selective-focus-photography-of-octopus-3046629.jpg?quality=80&strip=all",
        categorias: ["Ciencia & Tecnología", "Naturaleza"],
        iconos: ["game-icons:microscope", "game-icons:grass-mushroom"],
        url: "bajo-las-olas",
      },
    ],
    naturaleza: [
      {
        id: 1,
        nombre: "Aventuras Micológicas",
        descripcion: "Explorando el Reino Fungi",
        imagen:
          "https://s3.amazonaws.com/skybar.database.teset.1/psilocibina.png",
        categorias: ["Naturaleza"],
        iconos: ["game-icons:grass-mushroom"],
        url: "hongos-en-valdivia",
      },
      {
        id: 2,
        nombre: "Bajo el cielo nocturno",
        descripcion: "Un encuentro espacial inolvidable",
        imagen:
          "https://th.bing.com/th/id/R.d948cc8b68b666a6045d03c129edc840?rik=D992OcUW8pBjvQ&pid=ImgRaw&r=0",
        categorias: ["Ciencia & Tecnología", "Naturaleza"],
        iconos: ["game-icons:microscope", "game-icons:grass-mushroom"],
        url: "cielo-nocturno",
      },
      {
        id: 3,
        nombre: "Emplumados",
        descripcion: "Guía de campo de las aves",
        imagen:
          "https://inaturalist-open-data.s3.amazonaws.com/photos/255647599/large.jpg",
        categorias: ["Naturaleza"],
        iconos: ["game-icons:grass-mushroom"],
        url: "aves-en-valdivia",
      },
      {
        id: 4,
        nombre: "Bajo las olas",
        descripcion: "Maravillas ocultas de la costa",
        imagen:
          "https://laraza.com/wp-content/uploads/sites/5/2020/02/selective-focus-photography-of-octopus-3046629.jpg?quality=80&strip=all",
        categorias: ["Ciencia & Tecnología", "Naturaleza"],
        iconos: ["game-icons:microscope", "game-icons:grass-mushroom"],
        url: "bajo-las-olas",
      },
      {
        id: 5,
        nombre: "Mamíferos en acción",
        descripcion: "Guía de campo",
        imagen:
          "https://4.bp.blogspot.com/-FBHzTEOIjEY/VE5IdoRHTeI/AAAAAAAAAAs/KLv1weHEhXw/s1600/flora-fauna-chile-1.jpg",
        categorias: ["Naturaleza"],
        iconos: ["game-icons:grass-mushroom"],
        url: "mamiferos-en-valdivia",
      },
    ],
    emprende: [
      {
        id: 1,
        nombre: "Emprendimientos",
        descripcion: "Descubre los negocios locales",
        imagen:
          "https://1.bp.blogspot.com/-rDZUiWILyFU/Xd02V7cRtpI/AAAAAAAAIz8/ps1crGuITPss_i14OLXx0V60eojMW1bIACLcBGAsYHQ/s1600/4.jpg",
        categorias: ["Emprendimientos"],
        iconos: ["game-icons:briefcase"],
        url: "emprendimientos",
      },
    ],
    talentos: [
      {
        id: 1,
        nombre: "Talentos Locales",
        descripcion: "Conoce a lxs artistas locales",
        imagen: "https://app-valdi.s3.amazonaws.com/artistas.jpg",
        categorias: ["Talentos Locales"],
        iconos: ["game-icons:guitar-head"],
        url: "inspiración",
      },
    ],
    entretenimiento: [
      {
        id: 1,
        nombre: "Cine",
        descripcion: "Revisa nuestra programación",
        imagen:
          "https://th.bing.com/th/id/OIP.fd1VO2375Bu7NHTTNA3-IwHaEc?pid=ImgDet&rs=1",
        categorias: ["Entretenimiento"],
        iconos: ["game-icons:film-projector"],
        url: "cine",
      },
    ],
  },
};

export default AllExploraData;
