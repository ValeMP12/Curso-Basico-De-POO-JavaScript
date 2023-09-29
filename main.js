class Course {
    constructor ({
        name,
        classes = [],
    }){
        this._name = name;
        this.classes = classes;
    }

    get name(){
        return this._name;
    }
    set name(nuevoNombre){
        if (nuevoNombre === "Curso malito de programacion Básica"){
            console.error("Web... no");
        }else{
            this._name = nuevoNombre;
        }
        
    }
}

const cursoProgBasica = new Course({
    name: "Curso Gratis de Programacion Basica",
});
const cursoDefinitivoHTML = new Course({
    name: "Curso Definitivo de HTML y CSS",
});
const cursoPracticoHTML = new Course({
    name: "Curso Practico de HTML y CSS",
});
class learningPaths {
    constructor({
        name,
        course = [],
    }){
        this.name = name;
        this.course = course;
}
}
const escuelaWeb = new learningPaths({
    name: "Escuela de Desarrollo Web",
    course: [
        cursoProgBasica,
        cursoDefinitivoHTML,
        cursoPracticoHTML,
    ],
});
const escuelaData = new learningPaths({
    name: "Escuela de Data Science",
    course: [
        cursoProgBasica,
        "Curso DataBusiness",
        "Curso Dataviz",
    ],
});
const escuelaVgs = new learningPaths({
    name: "Escuela de Videojuegos",
    course: [
        cursoProgBasica,
        "Curso de Unity",
        "Curso de Unreal",
    ],
});

class Student {
    constructor ({
        name,
        email,
        username,
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        approvedCourses = [],
        learningPaths = [],
    }){
        this.name = name;
        this.email = email;
        this.username = username;
        this.socialMedia = {
            twitter,
            instagram,
            facebook,
        };
        this.approvedCourses = approvedCourses;
        this.learningPaths = learningPaths;
    }
}

const monse = new Student ({
    name: "Monserrat",
    username: "monseP12",
    email: "monserrat@gmail.com",
    twitter: "monseP12"
});

const joana = new Student ({
    name: "Joana",
    username: "joanaP12",
    email: "joanaPG12@gmail.com",
    instagram: "JOANAP12"
});