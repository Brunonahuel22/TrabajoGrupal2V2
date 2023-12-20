import { Pelicula } from "./classPelicula.js";

const formulario = document.querySelector("form");

// datos formulario
let nombre = document.getElementById("nombre");
let categoria = document.getElementById("categoria");
let descripcion = document.getElementById("descripcion");
let publicado = document.getElementById("subidoPagina");
// leer datos de local storage si es que no esta vacio o crear arreglo vacio
const arregloPeliculas = JSON.parse(localStorage.getItem("pelisKey")) || [];

//funciones
function crearContacto(e) {
  e.preventDefault();
   
   if ((validarformulario(nombre.value ,5,10) && (validarformulario(descripcion.value ,10,50))) &&( validarformulario(categoria.value,5,10) && validarformulario(publicado.value,2,2)) ) {
    const pelicula = new Pelicula(
      nombre.value,
      categoria.value,
      descripcion.value,
      publicado.value
    );
    arregloPeliculas.push(pelicula);

    limpiarFormulario();
    guardarLocalStore();
    dibujarCelda(pelicula, arregloPeliculas.length);
   } else {
    alert('No Cumple con los requisitos');
   }
}

function limpiarFormulario() {
  formulario.reset();
}

function guardarLocalStore() {
  localStorage.setItem("pelisKey", JSON.stringify(arregloPeliculas));
}

const dibujarCelda = (Objeto, numeroCelda) => {
  const contenedorPadre = document.querySelector("tbody");

  let iconoBootstrap;

  if (Objeto.publicado === "si" || Objeto.publicado === "Si") {
    iconoBootstrap =
      '<i class="bi bi-file-earmark-check-fill fs-4 text-success"></i>';
  } else {
    iconoBootstrap =
      '<i class="bi bi-file-earmark-excel-fill fs-4 text-danger"></i>';
  }

  contenedorPadre.innerHTML += `<tr>
    <th scope="row">${numeroCelda}</th>
    <td>${Objeto.nombre}</td>
    <td>${Objeto.categoria}</td>
    <td>
      <p>${Objeto.descripcion}</p>
    </td>
    <td>${iconoBootstrap}</td>
    <td>
      <button type="button" title="Editar" class="btn lapiz fs-4 text-info" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="editar('${Objeto.id}')" >
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
        <!-- -------------------------------Formulario 2------------------------------- -->

        <form class="text-start " id ="modal2">
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
          <button type="submit" class="btn btn-primary"">
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
      <button type="submit" title="Destacar" class="btn estrella fs-4 " onclick = "destacar('${Objeto.id}')">
        <i class="bi bi-star-fill"></i>
      </button>
      <button type="button" title="Eliminar" class="btn tacho fs-4 text-secondary" onclick="borrar('${Objeto.id}')">
        <i class="bi bi-trash-fill"></i>
      </button>
    </td>
  </tr>`;
};

window.borrar = (id) => {
  // Encontrar la posición de la película con el ID dado
  const posicionpelibuscada = arregloPeliculas.findIndex(
    (CadaElementoArreglo) => CadaElementoArreglo.id === id
  );

  // Eliminar la película en la posición encontrada
  arregloPeliculas.splice(posicionpelibuscada, 1);

  // Guardar el estado actualizado en el almacenamiento local
  guardarLocalStore();

  // Limpiar la tabla y volver a cargar los datos iniciales
  const tabla = document.querySelector("tbody");
  tabla.innerText = "";
  cargaInicial();
};

function cargaInicial() {
  if (arregloPeliculas.length > 0) {
    arregloPeliculas.map((CadaElementoArreglo, posicionContacto) =>
      dibujarCelda(CadaElementoArreglo, posicionContacto + 1)
    );
  }
}

formulario.addEventListener("submit", crearContacto);

cargaInicial();

// Boton Editar
window.editar = (id) => {
  const peliculaEditar = arregloPeliculas.find(
    (pelicula) => pelicula.id === id
  );
  // Llenar el formulario modal con la información actual
  document.getElementById("nombremod2").value = peliculaEditar.nombre;
  document.getElementById("categoriamod2").value = peliculaEditar.categoria;
  document.getElementById("subidoPaginamod2").value = peliculaEditar.publicado;
  document.getElementById("descripcionmod2").value = peliculaEditar.descripcion;
};

window.botonModal = (e) => {
  e.preventDefault();
  // Obtener los valores del formulario modal
  const nombreMod2 = document.getElementById("nombremod2").value;
  const categoriaMod2 = document.getElementById("categoriamod2").value;
  const subidoPaginaMod2 = document.getElementById("subidoPaginamod2").value;
  const descripcionMod2 = document.getElementById("descripcionmod2").value;
};

const formulario2 = document.querySelector("#modal2");
formulario2.addEventListener("submit", botonModal);
/*-------------------Fin boton editar---------------- */

window.destacar = (id) => {
  const peliculaEditar = arregloPeliculas.find(
    (pelicula) => pelicula.id === id
  );
    console.log('entra a funcion')
 
};

const validarformulario = (texto, min, max) => {
  if (texto.length >= min && texto.length <= max) {  
    return true;
  } else {
    return false;
  }
};
