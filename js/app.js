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
    <button type="button" class="btn lapiz fs-4 text-info" data-bs-toggle="modal" data-bs-target="#editarModal">
  <i class="bi bi-pencil-square"></i>
</button>
<!-- Modal de edición -->
<div class="modal fade" id="editarModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Editar Película</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <!-- Formulario de edición -->
        <form id="formularioEdicion">
          <!-- Campos de edición -->
          <div class="mb-3">
          <label for="nombre" class="form-label"
            >Nombre Pelicula
          </label>
          <input
            type="text"
            class="form-control"
            id="nombrepeli"
            minlength="5"
            maxlength="15"
            required
          />
        </div>

        <div class="mb-3">
        <label for="categoria" class="form-label"
          >Categoria
        </label>
        <input
          type="text"
          class="form-control"
          id="categoriapeli"
          placeholder="Terror,Aventura,Drama"
          minlength="5"
          maxlength="15"
          required
        />
      </div>

          
      <div class="mb-3">
      <label for="subidoPagina" class="form-label"
        >Esta Subido a la pagina? (Si o No)
      </label>
      <input
        type="text"
        class="form-control"
        id="subidoPaginapeli"
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
     
      id="descripcionpeli"
    ></textarea>
    <label for="descripcion">Descripcion</label>
  </div>

        

          <button type="submit" class="btn btn-primary mt-3 mod2" onclick="crearContacto('${detalles.id}')">Guardar cambios</button>

        </form>
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


window.crearContacto = (id) =>{
  const peliculaEditar = peliculas.findIndex((detallespeli) => detallespeli.id === id);
  alert(peliculaEditar)

}



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



