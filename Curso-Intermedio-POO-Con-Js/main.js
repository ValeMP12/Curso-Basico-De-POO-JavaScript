function isObject (subject) {
  return typeof subject == "object";
};

function isArray (subject) {
  return Array.isArray(subject);
}

function deepCopy(subject) {
  let copySubject;

  const subjectIsObject = isObject(subject);
  const subjectIsArray = isArray(subject);

  if (subjectIsArray){
    copySubject = [];
  }else if (subjectIsObject){
    copySubject = {}
  }else{
    return subject;
  }

  for (const key in subject){
    const keyIsObject = isObject(subject[key]);

    if(keyIsObject){
      copySubject[key] = deepCopy(subject[key]); 
    }else{
      if (subjectIsArray){
        copySubject.push(subject[key]);
      }else{
        copySubject[key] = subject[key];
      }
    }
  }
  return copySubject;
}

/*const studentBase = {
  name: undefined,
  age: undefined,
  email: undefined,
  approvedCourses: undefined,
  learninPaths: undefined,
  socialMedia: {
    twitter: undefined,
    facebook:undefined,
    instagram: undefined,
  },
};
*/
function requiredParam (param){
  throw new Error (param + " es obligatorio")
};

function createStudent( {
  name = requiredParam("name"),
  age,
  email = requiredParam("email"),
  twitter,
  facebook,
  instagram,
  approvedCourses = [],
  learningPaths = [],
} = {}){
  return{
    name, 
    age,
    email,
    approvedCourses,
    learningPaths,
    socialMedia: {
      twitter ,
      facebook,
      instagram,
    },
  };
}

const valeria = createStudent();