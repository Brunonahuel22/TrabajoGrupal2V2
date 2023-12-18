import { Pelicula } from "./classPelicula.js";

const formulario = document.querySelector("form");


//datos formulario
let nombre = document.getElementById("nombre");
let categoria = document.getElementById("categoria");
let descripcion = document.getElementById("descripcion");
let publicado = document.getElementById("subidoPagina");
const peliculas = JSON.parse(localStorage.getItem('pelisKey'))|| [];

function limpiarFormulario() {
  formulario.reset();
}
function guardarLocalStore() {
  localStorage.setItem("pelisKey", JSON.stringify(peliculas));
}
function dibujarCelda() {
  const contenedorPadre = document.querySelector('tbody');
  contenedorPadre.innerHTML += ` <tr>
  <th scope="row">313123</th>
  <td>Napoleón</td>
  <td>Drama Historia Guerra</td>
  <td>
    <p>
      Una mirada personal a los orígenes del líder militar francés
      y su rápido y despiadado ascenso a emperador.
    </p>
  </td>
  <td>
    <i
      <i
      class="bi bi-file-earmark-excel-fill fs-4 text-danger"
    ></i>
  </td>
  <td >
    <button type="button" title="Editar" class="btn lapiz fs-4 text-info">
      <i class="bi bi-pencil-square"></i>
    </button>
    <button
      type="submit"
      title="Destacar"
      class="btn estrella fs-4 text-warning"
    >
      <i class="bi bi-star-fill"></i>
    </button>
    <button type="button" title="Eliminar" class="btn tacho fs-4 text-secondary">
      <i class="bi bi-trash-fill"></i>
    </button>
  </td>
</tr>`
}

function crearContacto(e) {
  e.preventDefault();
  const pelicula = new Pelicula(nombre.value,categoria.value,publicado.value,descripcion.value);
  peliculas.push(pelicula);
  guardarLocalStore();
  

  
  

  limpiarFormulario();
}

formulario.addEventListener("submit", crearContacto);
