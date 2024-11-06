/*
- Que es un objecto?
Colecion de datos y funciones que actuan sobre esos datos.
Una forma de agrupar info y comportamientos relacionados con esa info.

- De que se compone un objecto?
Propiedades(atributos): Caracteristicas o datos que describen el objeto.
Metodos: Son las funciones que pueden hacer algo con esos datos o realizar acciones con ek objecto

*/

/* EJEMPLOS DE OBJETOS */

const libro1 = {titulo: "El Senñor de los Anillos", autor: "J.R.R. Tolkien", anioPublicacion: "1954"}
console.log(libro1.titulo)
console.log(libro1.anioPublicacion)

const libro2 = {titulo: "Harry Potter y la Piedra Filosofal", autor:"J.K, Rowling", anioPublicacion: "1997", infoLibro :
    function() {
        console.log(`${libro1.titulo} Se publico en ${libro1.anioPublicacion}`)
    }
}

libro2.infoLibro()


const libro3 = {
    //Propiedades
    titulo: "Cien años de soledad",
    autor: {
        nombre: "Grabiel Garcia Marquez",
        nacionalidad: "Colombiano"
    },
    anioPublicacion: "1967",
    genero: "Novela",

    //Metodos

    resumen: function() {
        console.log(`"${libro3.titulo}", escrito por ${libro3.autor.nombre}`)
    }
}

console.log(libro3.titulo)
console.log(libro3.autor.nombre)

libro3.resumen()



/* EJEMPLO DE FUNCION CONSTRUCTORA */

// Definimos la funcion constructora

function Libro(titulo, autorNombre, autorNacionalidad, anioPublicacion, genero) {
    this.titulo = titulo,
    this.autor = {
        nombre : autorNombre,
        nacionalidad: autorNacionalidad
    }
    this.anioPublicacion = anioPublicacion
    this.genero = genero

    this.resumen = function() {
        console.log(`"${this.titulo}", escrito por ${this.autor.nombre}, es una ${this.genero} publicada en ${this.anioPublicacion}`)
    }
}

//Usar la funcion constructora para crear 

const libro4 = new Libro("Orgullos y Prejucio", "Jane Austen", "Britanica", "1813", "Novela Romantica")
const libro5 = new Libro("1984", "George Orwell", "Britanico", "1949", "Distopia")

libro4.resumen()
libro5.resumen()
console.log(libro5.autor.nombre)

/* OPTIMIZACION CON PROTOYPE DE LA FUNCION CONSTRUCTORA */

//Definimos los metodos en el prototipo Libro

Libro.prototype.resumir = function() {
    console.log(`"${this.titulo}", escrito por ${this.autor.nombre}, es una ${this.genero} publicada en ${this.anioPublicacion}`)
}

libro4.resumir()
libro5.resumir()

console.log(libro4.resumen === libro5.resumen) //False
console.log(libro4.resumir === libro5.resumir) //True

/* EJEMPLO CLASE */

class Libros {
    constructor(titulo, autorNombre, autorNacionalidad, anioPublicacion, genero) {
        this.titulo = titulo,
        this.autor = {
            nombre: autorNombre,
            nacionalidad: autorNacionalidad
        }
        this.anioPublicacion = anioPublicacion, 
        this.genero = genero
    }

    informacion() {
        console.log(`"${this.titulo}", escrito por ${this.autor.nombre}, es una ${this.genero} publicada en ${this.anioPublicacion}`)
    }
}

const libro6 = new Libros("Don Quijote de la Mancha", "Miguel de Cervantes", "Española", "1605", "Novela")
const libro7 = new Libros("Matar a un ruiseñor", "Harper Lee", "Estadounidense", "1960", "Novela")

libro6.informacion()
libro7.informacion()

console.log(libro6.informacion === libro7.informacion)//True