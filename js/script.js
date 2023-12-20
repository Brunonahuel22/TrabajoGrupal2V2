document.addEventListener('DOMContentLoaded', function () {
    // Almacenar datos de películas en Local Storage (una sola vez)
    const peliculas = {
        populares: [
            { titulo: 'Avatar', año: 2021, genero: 'Aventura', imagen: 'img/POPULARES/AVATAR.jpg', info: 'En un exuberante planeta llamado Pandora viven los Navi, seres que aparentan ser primitivos pero que en realidad son muy evolucionados. Debido a que el ambiente de Pandora es venenoso, los híbridos humanosNavi, llamados Avatares, están relacionados con las mentes humanas, lo que les permite moverse libremente por Pandora. Jake Sully, un exinfante de marina paralítico se transforma a través de un Avatar, y se enamora de una mujer Navi' },
            { titulo: 'Batman', año: 2008, genero: 'Accion', imagen: 'img/POPULARES/el caballero de la noche bbatman.jpg', info: 'Unos años después de los acontecimientos en Batman Begins, una banda de ladrones disfrazados con máscaras de payasos llevan a cabo un violento robo en uno de los bancos de la mafia de Gotham City, pero los asaltantes desconocen que entre ellos se encuentra la persona que los contrato, el Joker (Heath Ledger), quien les había ordenado secretamente que se traicionaran y se asesinaran unos a otros, con la finalidad de repartir entre menos el botín.' },
            { titulo: 'Elvis', año: 2022, genero: 'Drama', imagen: 'img/POPULARES/elvis.jpg', info: 'Elvis Presley salta a la fama en la década de 1950, mientras mantiene una relación compleja con su manager, el coronel Tom Parker.' },
            { titulo: 'El gato con botas', año: 2022, genero: 'Comedia', imagen: 'img/POPULARES/gato con botas.jpg', info: 'El famoso gato tiene la aventura de su vida cuando une fuerzas con Humpty Dumpty y la gata Kitty para robarse al ganso de los huevos de oro.' },
            { titulo: 'La noche del demonio', año: 2021, genero: 'Terror', imagen: 'img/POPULARES/La Noche del Demonio La Puerta Roja.jpg', info: 'Nueve años después, Josh y Renai se han divorciado, Lorraine ha fallecido y Dalton ha ingresado en la universidad. Allí, los demonios del pasado resurgen para atormentarlo mientras, al mismo tiempo, Josh empieza a tener visiones de su padre.' },
            { titulo: 'Joker', año: 2022, genero: 'Accion', imagen: 'img/POPULARES/joker.jpg', info: 'Arthur Fleck adora hacer reír a la gente, pero su carrera como comediante es un fracaso. El repudio social, la marginación y una serie de trágicos acontecimientos lo conducen por el sendero de la locura y, finalmente, cae en el mundo del crimen.' },
        ],
        estrenos: [
            { titulo: 'Ant-Man', año: 2021, genero: 'Aventura', imagen: 'img/estrenos/ANT-MAN.jpg', info: 'Tras abandonar la cárcel, el ladrón de medio pelo Scott Lang recibe la llamada del misterioso doctor Hank Pym para realizar un trabajo especial. El científico suministrará al joven un traje especial, que le otorgará la capacidad de reducir en gran medida su tamaño pero aumentando considerablemente su fuerza. Con esta nueva arma en su poder, deberá abrazar su héroe interior, olvidar su pasado de delincuente y tratar de salvar al mundo de una terrible amenaza.'},
            { titulo: 'Babylon', año: 2008, genero: 'Drama', imagen: 'img/estrenos/BABYLON.jpg', info: 'Hasta los años veinte, las mayores estrellas de Hollywood eran las del cine mudo. Sin embargo, ahora atraviesan una profunda crisis con la llegada del cine sonoro, que espera algo nuevo de ellos.'},
            { titulo: 'Elemental', año: 2022, genero: 'Drama', imagen: 'img/estrenos/Elemental-2023-214x300.jpg', info: 'Ciudad Elemento, una urbe cuyos habitantes son seres hechos de aire, tierra, agua y fuego. Allí conviven estos cuatro tipos de elementos, con una única regla que es imprescindible cumplir: los elementos no pueden mezclarse. Cuando Candela, una joven de fuego, conoce a Nilo, un joven de agua, las cosas van a ponerse patas arriba.' },
            { titulo: 'Openheimer', año: 2022, genero: 'Comedia', imagen: 'img/estrenos/OPENHEIMER.jpg', info: 'Impactado por su poder destructivo, Oppenheimer se cuestiona las consecuencias morales de su creación. Desde entonces y durante el resto de su vida, se opondría firmemente a la guerra nuclear y a la todavía más destructiva bomba de hidrógeno.'},
            { titulo: 'Shazam', año: 2021, genero: 'Terror', imagen: 'img/estrenos/shazam-fury-of-the-gods-2023.jpg', info: 'un joven huérfano de 14 años, normal y corriente, al que le cambia la vida por completo el convertirse en el superhéroe adulto Shazam (Zachary Levi) cada vez que grita la palabra "¡Shazam!".'},
            { titulo: 'Guardianes de la galaxia', año: 2022, genero: 'Accion', imagen: 'img/estrenos/STAR-LORD.jpg', info: 'La película está basada en un conocido cómic de Marvel en el que un grupo de extravagantes ex-presidiarios formarán un equipo llamado los Guardianes de la Galaxia. Estos personajes son: Peter Quill, un piloto cazarrecompensas mitad alien-mitad humano; Rocket, un mapache armado con un rifle; Groot, un árbol humanoide; Gamora, una humana de color verde y Drax the Destroyer.'},
        ],
        clasicos: [
            { titulo: 'Caza fantasmas', año: 2021, genero: 'Comedia', imagen: 'img/clasicos/CAZAFANTASMAS.jpg', info:'Manhattan, Nueva York. Después de casi treinta años sin saber de ellos, los fantasmas y demonios se han vuelto a escapar de los infiernos para destruir la ciudad. Esta vez un nuevo equipo de los Cazafantasmas, formado por un grupo de cuatro mujeres, está dispuesto a terminar con cualquier amenaza espectral.' },
            { titulo: 'El Padrino', año: 2008, genero: 'Drama', imagen: 'img/clasicos/EL PADRINO.jpg', info:'En el verano de 1945, se celebra la boda de Connie (Talia Shire) y Carlo Rizzi (Gianni Russo). Connie es la única hija de Don Vito Corleone (Marlon Brando), jefe de una de las familias que ejercen el mando de la Cosa Nostra en la ciudad de Nueva York' },
            { titulo: 'Forrest Gump', año: 1994, genero: 'Drama', imagen: 'img/clasicos/FORREST GUMP.jpg', info:'Al tener el coeficiente intelectual de un niño, Forrest Gump siempre ha sido considerado el “tonto” de clase. Bajo las faldas de su madre se siente protegido y junto a su amiga Jenny es feliz, aunque en su propio mundo. Un problema en su columna vertebral no le impide convertirse en un ágil corredor.' },
            { titulo: 'Grease', año: 1978, genero: 'Comedia musical', imagen: 'img/clasicos/GREASE.jpg', info:'Al término de las vacaciones de verano, los novios Danny Zuko y Sandy Olsson, una joven australiana de buena familia, se ven obligados a separarse. A su regreso al instituto Rydell, el joven se reúne con su banda, los T-birds, de chaquetas de cuero y pelo engominado. Los padres de Sandy deciden mudarse a Estados Unidos y la chica ingresa en el mismo colegio.' },
            { titulo: 'Pearl Harbor', año: 2021, genero: 'Accion', imagen: 'img/clasicos/PEARL-HARBOR.jpg', info:'La acción nos sitúa en la Segunda Guerra Mundial; Rafe (Ben Affleck, Diario de un ejecutivo agresivo) y Danny (Josh Hartnett, 40 días y 40 noches) son dos amigos que crecieron y vivieron juntos, además, se formaron a la vez como pilotos en la base de las fuerzas aéreas. Cuando comienza el conflicto no tienen más remedio que separarse. Por un lado, Rafe es enviado para servir en la Aérea Británica contra los alemanes, y a Danny le destinan a Pearl Harbor, junto a Evelyn, una guapa enfermera que es novia de su amigo.' },
            { titulo: 'Volver al Futuro', año: 1985, genero: 'ciencia ficcion', imagen: 'img/clasicos/VOLVER AL FUTURO.jpg', info:'La cinta transcurre en el año 1985, una época en la que el joven Marty McFly lleva una existencia anónima con su novia Jennifer. Los únicos problemas son su familia en crisis y un director al que le encantaría expulsarle del instituto, por lo que deberá hacer todo lo que esté en su mano para revertir esa situación y aparentar total normalidad.' },
        ],
        masVistas: [
            { titulo: 'Hombres de Honor', año: 2021, genero: 'Drama', imagen: 'img/MAS VISTAS/HOMBRES DE HONOR.jpg', info: 'Drama basado en la historia real de Carl Brashear, interpretado en la película por Cuba Gooding Jr. (Me llaman Radio), el primer afroamericano en alistarse en la Marina y servir como buzo para el ejército de Estados Unidos.' },
            { titulo: 'Soy Leyenda', año: 2008, genero: 'Ciencia ficción', imagen: 'img/MAS VISTAS/Soy leyenda.jpg', info: 'Un científico militar llamado Robert Neville, interpretado por Will Smith, es el único hombre con vida tras la inevitable expansión de un terrorífico virus. Neville se ha salvado debido a su desconocida inmunidad al virus, pero no está solo. Hay personas que se infectaron por el virus y son ahora peligrosas criaturas mutantes que habitan en la noche.' },
            { titulo: 'Interstellar', año: 2022, genero: 'Drama', imagen: 'img/MAS VISTAS/interstellar-366875261-large.jpg', info: 'Inspirada en la teoría del experto en relatividad Kip Stepehen Thorne sobre la existencia de los agujeros de gusano, y su función como canal para llevar a cabo los viajes en el tiempo. La historia gira en torno a un grupo de intrépidos exploradores que se adentran por uno de esos agujeros y viajan a través del mismo, encontrándose en otra dimensión. Un mundo desconocido se abre ante ellos y deberán luchar por mantenerse unidos si quieren volver de una pieza.' },
            { titulo: 'The Irishman', año: 2022, genero: 'Comedia', imagen: 'img/MAS VISTAS/the-irishman-.jpg', info: 'Frank Sheeran (Robert De Niro), más conocido como El irlandés, es un asesino a sueldo de la mafia al que se le atribuyen más de 25 asesinatos relacionados con el hampa. Al final de su vida, Sheeran afirmó haber estado involucrado en el asesinato de Jimmy Hoffa (Al Pacino), el poderoso jefe del sindicato de camioneros.' },
            { titulo: 'Titanic', año: 2021, genero: 'Terror', imagen: 'img/MAS VISTAS/titanic.jpg', info: 'Jack (Leonardo DiCaprio, El gran Gatsby), un humilde y joven artista, y Rose (Kate Winslet, Un Dios salvaje), una chica de clase acomodada, se conocerán a bordo del Titanic, el barco más espectacular que jamás haya surcado los siete mares.' },
            { titulo: 'Halloween', año: 2022, genero: 'Accion', imagen: 'img/MAS VISTAS/HALLOWEEN.jpg', info: 'Halloween es una saga de películas estadounidenses del género slasher. Se centra en el asesino psicópata Michael Myers, quien tras pasar quince años en un hospital psiquiátrico por haber matado a su hermana mayor, escapa y reincide en sus crímenes.' },
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

   
   