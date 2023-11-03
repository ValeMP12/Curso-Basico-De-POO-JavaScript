//const obj1 = {
  //a: "a",
  //b: "b",
  //c:{
    //d: "d",
    //e: "e",
  //}
//};

//const obj2 = JSON.stringify(obj1);
//const stringifiedComplexObj = JSON.stringify(obj1);
//const obj2 = JSON.parse(stringifiedComplexObj);

//fuction recursiva(){
 // if (/*validacion*/){
    //llamados recursivos
  //}else{
    // llamados normales, sin recursividad
  //}
//}

const numeritos = [0,1,2,3,4,5,6,7,8,4574,3,6,3];
//let numerito = 0;
//for (let index = 0; index < numeritos.length; index ++){
  //numerito = numeritos[index];
  //console.log({index, numerito});
//};

// RECURSIVIDAD
function recursiva(numbersArray){
  if (numbersArray.length != 0) {
    const firstNum = numbersArray [0];
    console.log(firstNum);
    numbersArray.shift()
    recursiva(numbersArray);
  }
};