const valeria = {
    name: "Valeria",
    age: 20,
    cursosAprobados: [
        "Cursos definitivos de HTML y CSS ",
        "Curso Práctico de HTML y CSS",
    ],

    aprobarCurso(nuevoCurso){
        this.cursosAprobados.push(nuevoCurso);
    }
};


function Student(name, age, cursosAprobados){
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
    //Esta es una forma
    //this.aprobarCurso = function(nuevoCurso){
      //  this.cursosAprobados.push(nuevoCurso);
    //}
}
// Se crea este metodo por fuera de la funcion con "prototype"
Student.prototype.aprobarCurso = function(nuevoCurso){
    this.cursosAprobados.push(nuevoCurso);
}
//Crear una instancia 
const monserrat = new Student(
    "Monserrat",
    22, [
        "Curso de Introducción a los videojuegos"
    ]

);

//Prototipo con la sintaxis de clases
class Student2 {
    constructor({name, age,cursosAprobados =[], email}){
        this.name = name;
        this.email = email;
        this.age = age;
        this.cursosAprobados = cursosAprobados;

    }
    aprobarCurso(nuevoCurso){
        this.cursosAprobados.push(nuevoCurso);
    }
};

const juanito = new Student2 ({
    email: "juanito7@gamil.com",
    name: "Juan",
    age: 36,
    //cursosAprobados: ["Curso Análisis de negocios para ciencia de datos","Curso de principios de visualisacion de datos para BI"],
});
