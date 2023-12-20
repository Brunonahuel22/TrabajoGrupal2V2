export class Pelicula{
    #id
    #nombre
    #categoria
    #descripcion
    #publicado
    constructor (nombre,categoria,descripcion,publicado){
        this.#id = crypto.randomUUID();
        this.#nombre = nombre;
        this.#categoria = categoria;
        this.#descripcion = descripcion;
        this.#publicado = publicado;
    }

    get id(){
        return this.#id;
    }
    get nombre(){
        return this.#nombre;
    }
    get categoria(){
        return this.#categoria;
    }
    get descripcion(){
        return this.#descripcion;
    }
    get publicado(){
        return this.#publicado;
    }
    set nombre(nuevonombre){
        this.#nombre = nuevonombre;
    }
    set categoria(nuevacat){
        this.#categoria = nuevacat;
    }
    set descripcion(nuevades){
        this.#descripcion =nuevades;
    }
    set publicado(nuevopu){
        this.#publicado = nuevopu;
    }

    toJSON(){
        return{
            nombre: this.nombre,
            categoria: this.categoria,
            id: this.id,
            descripcion: this.descripcion,
            publicado: this.publicado,
        };
    }
}