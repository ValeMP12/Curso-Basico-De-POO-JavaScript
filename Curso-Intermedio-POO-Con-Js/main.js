const valeria = {
    name: "Valeria",
    age: 20,
    approvedCourses: ["Curso 1"],
    addCouse(newCourse){
        console.log("This", this);
        console.log("This.approvedCourse", this.approvedCourses);
        this.approvedCourses.push(newCourse);
    }
};

//console.log(Object.keys(valeria));
//console.log(Object.getOwnPropertyNames(valeria));
//console.log(Object.entries(valeria));



//Object.defineProperty(valeria, "pruebNASA", {
  //  value: "extraterrestres",
   // enumerable: false,
   // writable: false,
    //configurable: false,
//});

//Object.defineProperty(valeria, "navigator", {
  //  value: "Chrome",
    //enumerable: false,
    //writable: true,
    //configurable: true,
//});

//Object.defineProperty(valeria, "editor", {
 //   value: "VSCode",
  //  enumerable: true,
  //  writable: false,
   // configurable: true,
//});

//Object.defineProperty(valeria, "terminal", {
  //  value: "WSL",
   // enumerable: true,
   // writable: true,
   // configurable: false,
//});
Object.seal(valeria);
Object.freeze(valeria);

console.log(Object.getOwnPropertyDescriptors(valeria));