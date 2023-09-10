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
