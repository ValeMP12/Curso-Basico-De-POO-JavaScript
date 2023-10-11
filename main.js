class Comment {
    constructor({
        content,
        studentName,
        studentRole = "estudiante"
    }){
        this.content = content;
        this.studentName = studentName;
        this.studentRole = studentRole;
        this.likes = 0;
    }

    publicar(){
        console.log(this.studentName + "(" + this.studentRole + ")");
        console.log(this.likes + "likes");
        console.log(this.content);
    }
}

//Módulos de ECMAScript6
function videoPlay(id){
    const urlSecreta = "https: //platziultrasecretomasquelanasa.com/" + id;
    console.log("Se esta priduciondo desde la url " + urlSecreta);
}
function videoStop(id){
    const urlSecreta = "https: //platziultrasecretomasquelanasa.com/" + id;
    console.log("Pausamos la url " + urlSecreta);
}

class PlatziClass {
    constructor({
        name,
        videoID,


    }){
        this.name = name;
        this.videoID = videoID;
    }

    reprodicir (){
        videoPlay(this.videoID);
    }

    pausar (){
        videoStop(this.videoID);
    }
}

//Getters y Setters
class Course {
    constructor ({
        name,
        classes = [],
        isFree = false,
        lang = "spanish",

    }){
        this._name = name;
        this.classes = classes;
        this.isFree = isFree;
        this.lang = lang;
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
    isFree: true,
});
const cursoDefinitivoHTML = new Course({
    name: "Curso Definitivo de HTML y CSS",
});
const cursoPracticoHTML = new Course({
    name: "Curso Practico de HTML y CSS",
    lang: "english",
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
    publicarComentario(commentContent){
        const comment = new Comment({
            content: commentContent,
            studentName: this.name,

        });
        comment.publicar();

    }
}

class FreeStuden  extends Student{
    constructor(props){
        super(props);
    }

    approvedCourses(newCurse){
        if (newCurse.isFree){
            this.approvedCourses.push(newCurse);
        }else{
            console.warn("Lo sentimos," + this.name + ", solo puedes tomar cursos abiertos");
        }
    }
}

class BasicStudent extends Student{
    constructor(props){
        super(props);
    }

    approvedCourses(newCurse){
        if (newCurse.lang !== "english"){
            this.approvedCourses.push(newCurse);
        }else{
            console.warn("Lo sentimos," + this.name + ", no puedes tomar cursos en inglés");
        }
    }
}
class ExpertStudent extends Student{
    constructor(props){
        super(props);
    }

    approvedCourses(newCurse){
        this.approvedCourses.push(newCurse);
    }
}
class TeacherStudent extends Student{
    constructor(props){
        super(props);
    }
    approvedCourses(newCurse){
        this.approvedCourses.push(newCurse);
    }
    publicarComentario(commentContent){
        const comment = new Comment({
            content: commentContent,
            studentName: this.name,
            studentRole: "profesor",
        });
        comment.publicar();
    }
}



const monse = new FreeStuden ({
    name: "Monserrat",
    username: "monseP12",
    email: "monserrat@gmail.com",
    twitter: "monseP12",
    learningPaths: [
        escuelaWeb,
        escuelaVgs,
    ],
});

const joana = new BasicStudent ({
    name: "Joana",
    username: "joanaP12",
    email: "joanaPG12@gmail.com",
    instagram: "JOANAP12",
    learningPaths: [
        escuelaWeb,
        escuelaVgs,
    ],
});

const valeria = new TeacherStudent({
    name: "Valeria",
    username: "valeriaP12",
    email: "valeriaPG12@gmail.com",
    instagram: "VALERIAP12", 
});