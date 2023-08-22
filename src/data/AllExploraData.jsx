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
        descripcion: "Explorando el Reino Fungi Valdiviano",
        imagen:
          "https://s3.amazonaws.com/skybar.database.teset.1/psilocibina.png",
        categorias: ["Naturaleza"],
        iconos: ["game-icons:grass-mushroom"],
        url: "aventuras-micologicas",
      },
      {
        id: 2,
        nombre: "Valdivia y el cielo nocturno",
        descripcion: "Un encuentro espacial inolvidable",
        imagen:
          "https://th.bing.com/th/id/R.d948cc8b68b666a6045d03c129edc840?rik=D992OcUW8pBjvQ&pid=ImgRaw&r=0",
        categorias: ["Ciencia & Tecnología", "Naturaleza"],
        iconos: ["game-icons:microscope", "game-icons:grass-mushroom"],
        url: "cielo-nocturno",
      },
      {
        id: 3,
        nombre: "Valdivia bajo las olas",
        descripcion: "Maravillas ocultas de la Costa",
        imagen:
          "https://laraza.com/wp-content/uploads/sites/5/2020/02/selective-focus-photography-of-octopus-3046629.jpg?quality=80&strip=all",
        categorias: ["Ciencia & Tecnología", "Naturaleza"],
        iconos: ["game-icons:microscope", "game-icons:grass-mushroom"],
        url: "bajo-las-olas",
      },
      {
        id: 4,
        nombre: "Naturaleza en movimiento",
        descripcion: "Descubre la fauna de Valdivia",
        imagen:
          "https://4.bp.blogspot.com/-FBHzTEOIjEY/VE5IdoRHTeI/AAAAAAAAAAs/KLv1weHEhXw/s1600/flora-fauna-chile-1.jpg",
        categorias: ["Naturaleza"],
        iconos: ["game-icons:grass-mushroom"],
        url: "naturaleza-en-movimiento",
      },
      {
        id: 5,
        nombre: "Valdivia Inspiradora",
        descripcion: "Conoce a los artistas que dan vida a la ciudad",
        imagen: "https://app-valdi.s3.amazonaws.com/artistas.jpg",
        categorias: ["Talentos Locales"],
        iconos: ["game-icons:guitar-head"],
        url: "inspiración",
      },
      {
        id: 6,
        nombre: "Valdivia Emprende",
        descripcion: "Descubre los negocios locales",
        imagen:
          "https://1.bp.blogspot.com/-rDZUiWILyFU/Xd02V7cRtpI/AAAAAAAAIz8/ps1crGuITPss_i14OLXx0V60eojMW1bIACLcBGAsYHQ/s1600/4.jpg",
        categorias: ["Emprende"],
        iconos: ["game-icons:briefcase"],
        url: "emprendimientos",
      },
    ],
    ciencia: [
      {
        id: 1,
        nombre: "Valdivia y el cielo nocturno",
        descripcion: "Un encuentro espacial inolvidable",
        imagen:
          "https://th.bing.com/th/id/R.d948cc8b68b666a6045d03c129edc840?rik=D992OcUW8pBjvQ&pid=ImgRaw&r=0",
        categorias: ["Ciencia & Tecnología", "Naturaleza"],
        iconos: ["game-icons:microscope", "game-icons:grass-mushroom"],
        url: "cielo-nocturno",
      },
      {
        id: 2,
        nombre: "Valdivia bajo las olas",
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
        descripcion: "Explorando el Reino Fungi Valdiviano",
        imagen:
          "https://s3.amazonaws.com/skybar.database.teset.1/psilocibina.png",
        categorias: ["Naturaleza"],
        iconos: ["game-icons:grass-mushroom"],
        url: "aventuras-micologicas",
      },
      {
        id: 2,
        nombre: "Valdivia y el cielo nocturno",
        descripcion: "Un encuentro espacial inolvidable",
        imagen:
          "https://th.bing.com/th/id/R.d948cc8b68b666a6045d03c129edc840?rik=D992OcUW8pBjvQ&pid=ImgRaw&r=0",
        categorias: ["Ciencia & Tecnología", "Naturaleza"],
        iconos: ["game-icons:microscope", "game-icons:grass-mushroom"],
        url: "cielo-nocturno",
      },
      {
        id: 3,
        nombre: "Valdivia bajo las olas",
        descripcion: "Maravillas ocultas de la Costa",
        imagen:
          "https://laraza.com/wp-content/uploads/sites/5/2020/02/selective-focus-photography-of-octopus-3046629.jpg?quality=80&strip=all",
        categorias: ["Ciencia & Tecnología", "Naturaleza"],
        iconos: ["game-icons:microscope", "game-icons:grass-mushroom"],
        url: "bajo-las-olas",
      },
      {
        id: 4,
        nombre: "Naturaleza en movimiento",
        descripcion: "Descubre la fauna de Valdivia",
        imagen:
          "https://4.bp.blogspot.com/-FBHzTEOIjEY/VE5IdoRHTeI/AAAAAAAAAAs/KLv1weHEhXw/s1600/flora-fauna-chile-1.jpg",
        categorias: ["Naturaleza"],
        iconos: ["game-icons:grass-mushroom"],
        url: "naturaleza-en-movimiento",
      },
    ],
    emprende: [
      {
        id: 1,
        nombre: "Valdivia Emprende",
        descripcion: "Descubre los negocios locales",
        imagen:
          "https://1.bp.blogspot.com/-rDZUiWILyFU/Xd02V7cRtpI/AAAAAAAAIz8/ps1crGuITPss_i14OLXx0V60eojMW1bIACLcBGAsYHQ/s1600/4.jpg",
        categorias: ["Emprende"],
        iconos: ["game-icons:briefcase"],
        url: "emprende",
      },
    ],
    talentos: [
      {
        id: 1,
        nombre: "Talentos Locales",
        descripcion: "Conoce a lxs artistas que dan vida a la ciudad",
        imagen: "https://app-valdi.s3.amazonaws.com/artistas.jpg",
        iconos: ["game-icons:guitar-head"],
        url: "inspiración",
      },
    ],
  },
};

export default AllExploraData;
