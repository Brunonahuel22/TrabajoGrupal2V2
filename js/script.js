document.addEventListener('DOMContentLoaded', function () {
    // Almacenar datos de películas en Local Storage (una sola vez)
    const peliculas = {
        populares: [
            { titulo: 'Avatar', año: 2021, genero: 'Aventura', imagen: 'img/POPULARES/AVATAR.jpg', },
            { titulo: 'Batman', año: 2008, genero: 'Accion', imagen: 'img/POPULARES/el caballero de la noche bbatman.jpg' },
            { titulo: 'Elvis', año: 2022, genero: 'Drama', imagen: 'img/POPULARES/elvis.jpg' },
            { titulo: 'El gato con botas', año: 2022, genero: 'Comedia', imagen: 'img/POPULARES/gato con botas.jpg' },
            { titulo: 'La noche del demonio', año: 2021, genero: 'Terror', imagen: 'img/POPULARES/La Noche del Demonio La Puerta Roja.jpg' },
            { titulo: 'Joker', año: 2022, genero: 'Accion', imagen: 'img/POPULARES/joker.jpg' },
        ],
        estrenos: [
            { titulo: 'Ant-Man', año: 2021, genero: 'Aventura', imagen: 'img/estrenos/ANT-MAN.jpg' },
            { titulo: 'Babylon', año: 2008, genero: 'Drama', imagen: 'img/estrenos/BABYLON.jpg' },
            { titulo: 'Elemental', año: 2022, genero: 'Drama', imagen: 'img/estrenos/Elemental-2023-214x300.jpg' },
            { titulo: 'Openheimer', año: 2022, genero: 'Comedia', imagen: 'img/estrenos/OPENHEIMER.jpg' },
            { titulo: 'Shazam', año: 2021, genero: 'Terror', imagen: 'img/estrenos/shazam-fury-of-the-gods-2023.jpg' },
            { titulo: 'Guardianes de la galaxia', año: 2022, genero: 'Accion', imagen: 'img/estrenos/STAR-LORD.jpg' },
        ],
        clasicos: [
            { titulo: 'Caza fantasmas', año: 2021, genero: 'Comedia', imagen: 'img/clasicos/CAZAFANTASMAS.jpg' },
            { titulo: 'El Padrino', año: 2008, genero: 'Drama', imagen: 'img/clasicos/EL PADRINO.jpg' },
            { titulo: 'Forrest Gump', año: 1994, genero: 'Drama', imagen: 'img/clasicos/FORREST GUMP.jpg' },
            { titulo: 'Grease', año: 1978, genero: 'Comedia musical', imagen: 'img/clasicos/GREASE.jpg' },
            { titulo: 'Pearl Harbor', año: 2021, genero: 'Accion', imagen: 'img/clasicos/PEARL-HARBOR.jpg' },
            { titulo: 'Volver al Futuro', año: 1985, genero: 'ciencia ficcion', imagen: 'img/clasicos/VOLVER AL FUTURO.jpg' },
        ],
        masVistas: [
            { titulo: 'Hombres de Honor', año: 2021, genero: 'Drama', imagen: 'img/MAS VISTAS/HOMBRES DE HONOR.jpg' },
            { titulo: 'Soy Leyenda', año: 2008, genero: 'Ciencia ficción', imagen: 'img/MAS VISTAS/Soy leyenda.jpg' },
            { titulo: 'Interstellar', año: 2022, genero: 'Drama', imagen: 'img/MAS VISTAS/interstellar-366875261-large.jpg' },
            { titulo: 'The Irishman', año: 2022, genero: 'Comedia', imagen: 'img/MAS VISTAS/the-irishman-.jpg' },
            { titulo: 'Titanic', año: 2021, genero: 'Terror', imagen: 'img/MAS VISTAS/titanic.jpg' },
            { titulo: 'Halloween', año: 2022, genero: 'Accion', imagen: 'img/MAS VISTAS/HALLOWEEN.jpg' },
        ],
        // Agrega más secciones según sea necesario
    };

    // Almacenar películas en Local Storage
    localStorage.setItem('peliculas', JSON.stringify(peliculas));

    // Función para mostrar películas en una sección específica
    function mostrarPeliculas(peliculas, contenedorId) {
        const contenedor = document.getElementById(contenedorId);

        peliculas.forEach(pelicula => {
            const peliculaElement = document.createElement('div');
            peliculaElement.classList.add('pelis')
            peliculaElement.innerHTML = `
                                        <img src="${pelicula.imagen}" alt="${pelicula.titulo}"  data-titulo="${pelicula.titulo}"/>`;
            contenedor.appendChild(peliculaElement);
            peliculaElement.addEventListener('click', function () {
                const titulo = pelicula.titulo.replace(/\s/g, ''); // Eliminar espacios para usar en URL
                localStorage.setItem('actualPelicula', JSON.stringify(pelicula));
                window.location.href = `../pages/detallepelis.html`;
            });
        });
    }

    // Mostrar películas en las secciones correspondientes
    mostrarPeliculas(peliculas.populares, 'populares');
    mostrarPeliculas(peliculas.estrenos, 'estrenos');
    mostrarPeliculas(peliculas.clasicos, 'clasicos');
    mostrarPeliculas(peliculas.masVistas, 'masVistas');
    // Agrega más secciones aquí según sea necesario
});

   
   