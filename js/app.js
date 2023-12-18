import { Pelicula } from "./classPelicula.js";

const formulario = document.querySelector("form");

// datos formulario

let nombre = document.getElementById("nombre");
let categoria = document.getElementById("categoria");
let descripcion = document.getElementById("descripcion");
let publicado = document.getElementById("subidoPagina");
const peliculas = JSON.parse(localStorage.getItem("pelisKey")) || [];

function limpiarFormulario() {
  formulario.reset();
}

function guardarLocalStore() {
  localStorage.setItem("pelisKey", JSON.stringify(peliculas));
}

const dibujarCelda = (detalles, numeroCelda) => {
  const contenedorPadre = document.querySelector("tbody");

  let icono;

  if (detalles.publicado === "si" || detalles.publicado === "si") {
    icono = '<i class="bi bi-file-earmark-check-fill fs-4 text-success"></i>';
  } else {
    icono = '<i class="bi bi-file-earmark-excel-fill fs-4 text-danger"></i>';
  }

  contenedorPadre.innerHTML += `<tr>
    <th scope="row">${numeroCelda}</th>
    <td>${detalles.nombre}</td>
    <td>${detalles.categoria}</td>
    <td>
      <p>${detalles.descripcion}</p>
    </td>
    <td>${icono}</td>
    <td>
      <button type="button" title="Editar" class="btn lapiz fs-4 text-info" data-bs-toggle="modal" data-bs-target="#exampleModal" >
        <i class="bi bi-pencil-square"></i>
      </button>
<!-- Modal de edición -->
<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <!-- -------------------------------Formulario------------------------------- -->

        <form class="text-start form2">
        <div class="mb-3">
          <label for="nombremod2" class="form-label"
            >Nombre Pelicula
          </label>
          <input
            type="text"
            class="form-control"
            id="nombremod2"
            minlength="5"
            maxlength="15"
            required
          />
        </div>

     
        <div class="mb-3">
          <label for="categoriamod2" class="form-label"
            >Categoria
          </label>
          <input
            type="text"
            class="form-control"
            id="categoriamod2"
            placeholder="Terror,Aventura,Drama"
            minlength="5"
            maxlength="15"
            required
          />
        </div>

        <div class="mb-3">
          <label for="subidoPaginamod2" class="form-label"
            >Esta Subido a la pagina? (Si o No)
          </label>
          <input
            type="text"
            class="form-control"
            id="subidoPaginamod2"
            maxlength="2"
            minlength="2"
            required
          />
        </div>
        
       

        <div class="form-floating">
          <textarea
            class="form-control "
            required
            minlength="10"
            maxlength="50"
           
            id="descripcionmod2"
          ></textarea>
          <label for="descripcionmod2">Descripcion</label>
        </div>

        <div class="my-2 text-end">
          <button type="button" class="btn btn-primary" onclick="editar('${detalles.id}')">
            Agregar
          </button>
        </div>
      </form>
        <!----------------------------------------->
      </div>
      
    </div>
  </div>
</div>
  <!--------------------->
      <button type="submit" title="Destacar" class="btn estrella fs-4 text-warning">
        <i class="bi bi-star-fill"></i>
      </button>
      <button type="button" title="Eliminar" class="btn tacho fs-4 text-secondary" onclick="borrar('${detalles.id}')">
        <i class="bi bi-trash-fill"></i>
      </button>
    </td>
  </tr>`;
};


function limpiar() {
  const formularioModal = document.querySelector('#exampleModal form.text-start');
  formularioModal.reset();
}

window.editar = (id) => {
 console.log('desde funcion');
 limpiar();
};

window.borrar = (id) => {
  // Encontrar la posición de la película con el ID dado
  const posicionpelibuscada = peliculas.findIndex(
    (itemContacto) => itemContacto.id === id
  );

  // Eliminar la película en la posición encontrada
  peliculas.splice(posicionpelibuscada, 1);

  // Guardar el estado actualizado en el almacenamiento local
  guardarLocalStore();

  // Limpiar la tabla y volver a cargar los datos iniciales
  const tabla = document.querySelector("tbody");
  tabla.innerText = "";
  cargaInicial();
};

function cargaInicial() {
  if (peliculas.length > 0) {
    peliculas.map((itemContacto, posicionContacto) =>
      dibujarCelda(itemContacto, posicionContacto + 1)
    );
  }
}

function crearContacto(e) {
  e.preventDefault();
  const pelicula = new Pelicula(
    nombre.value,
    categoria.value,
    descripcion.value,
    publicado.value
  );
  peliculas.push(pelicula);

  limpiarFormulario();
  guardarLocalStore();
  dibujarCelda(pelicula, peliculas.length);
}

formulario.addEventListener("submit", crearContacto);

cargaInicial();


