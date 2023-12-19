document.addEventListener('DOMContentLoaded', function () {
const llenarDatos = ()=>{
    const pelicula = JSON.parse(localStorage.getItem('actualPelicula'))
    console.log(pelicula)
    const peliculasInfo = document.getElementById('cuerpoCard');
    peliculasInfo.innerHTML += `<div class="row g-0">
    <div class="col-md-4 imgCard">
        <img src= "../${pelicula.imagen}" class="img-fluid img-card" alt="...">
    </div>
    <div class="col-md-8 contenidoCard">
        <div class="card-body">
            <h3 class="card-title" id="tituloPeli">${pelicula.titulo}</h3>
            <p class="card-text">${pelicula.descripcion}</p>
            <p class="card-text pieCard"><small class="text-body-secondary pieCard">Año de estreno: ${pelicula.año} | Genero: ${pelicula.genero}</small></p>
            <button type="button" class="btn btn-dark">Reproducir Pelicula</button>
        </div>
    </div>
</div>`
}
llenarDatos()
})