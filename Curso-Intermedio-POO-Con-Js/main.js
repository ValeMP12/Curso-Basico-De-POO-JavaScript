function isObject(subject) {
  return typeof subject == "object";
}

function isArray(subject) {
  return Array.isArray(subject);
}

function deepCopy(subject) {
  let copySubject;

  const subjectIsObject = isObject(subject);
  const subjectIsArray = isArray(subject);

  if (subjectIsArray) {
    copySubject = [];
  } else if (subjectIsObject) {
    copySubject = {};
  } else {
    return subject;
  }

  for (const key in subject) {
    const keyIsObject = isObject(subject[key]);

    if (keyIsObject) {
      copySubject[key] = deepCopy(subject[key]);
    } else {
      if (subjectIsArray) {
        copySubject.push(subject[key]);
      } else {
        copySubject[key] = subject[key];
      }
    }
  }
  return copySubject;
}

function requiredParam(param) {
  throw new Error(param + " es obligatorio");
}

function LearningPath({ name = requiredParam("name"), courses = [] }) {
  this.name = name;
  this.courses = courses;
  /* 
  const private = {
    "_name": name,
    "_courses": _courses,
  };*/
  /*
  const public = {
    get name() {
      return private["_name"];
    }, 

    set name(newName){
      if (newName.length != 0) {
        private["_name"] = newName;
      } else {
        console.warn("Tu nombre debe tener al menos 1 caracter");
      }
    },
    get _courses() {
      return private["_courses"];
    }, 
  };

  return public;
  */
}

function Student({
  name = requiredParam("name"),
  age,
  email = requiredParam("email"),
  twitter,
  facebook,
  instagram,
  learningPaths = [],
  approvedCourses = [],
} = {}) {
  this.name = name;
  this.age = age;
  this.email = email;
  this.approvedCourses = approvedCourses;
  this.socialMedia = {
    twitter,
    facebook,
    instagram,
  };

  const private = {
    "_learningPaths": [],
  };

  Object.defineProperty(this, "learningPaths", {
    get() {
      return private;
    },

    set(newLp) {
      if (newLp instanceof LearningPath) {
        private["_learningPaths"].push(newLp);
      } else {
        console.warn(
          "Algunos de los LPs no es una instancia del prototipo LearningPath");
      }
    },
    
  });

  for (learningPathIndex in learningPaths) {
    this.learningPaths = learningPaths[learningPathIndex];
  }
}

const escuelaWeb = new LearningPath({
  name: "Escuela de WebDev ",
});
const escuelaData = new LearningPath({
  name: "Escuela de Data Science",
});

const valeria = new Student({
  name: "Valeria",
  email: "valeria10@gmail.com",
  learningPaths: [escuelaWeb, escuelaData],
});

// Ejemplo de cómo agregar un LearningPath
//valeria.learningPaths = {
//name: "Programación",
//courses: ["JavaScript", "Python"],
//};
