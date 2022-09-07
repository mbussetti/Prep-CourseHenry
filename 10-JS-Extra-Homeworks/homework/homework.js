// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí

var matriz=[];
for (var property in objeto) {
  var array=[];
  array[0]=property;
  array[1]=objeto[property];
  matriz.push(array)
}
return matriz;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí.
  var nuevoArray=[];
  let array = string.split('');
  for (let i = 0; i < array.length; i++) {
    let element = array[i];  
  var cont=0;
  for (let i= 0; i < array.length; i++) {
    
    if(element===array[i]){
    cont++;
  }
  }
  
  nuevoArray.push([element,cont]);
}

const obj = Object.fromEntries(nuevoArray);
return obj;


}

function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  let nuevoArray=[];
  let array2=[];
  let array = s.split('');
  for (i=0; i<array.length; i++) {
    if ( array[i] === array[i].toUpperCase()){
      nuevoArray.push(array[i])
    }else{array2.push(array[i])} 
    }
    let stringMay=nuevoArray.join("");
    let stringMin=array2.join("");

    return stringMay + stringMin;
  }
 


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  let nuevoArray=[];
  let array = str.split(' ');
  
  for (let index = 0; index < array.length; index++) {
    const palabra = array[index];
    let nuevaPalabra="";
    for(let j=palabra.length-1;j>=0;j--){
      nuevaPalabra=nuevaPalabra+ palabra[j];
    }
    nuevoArray.push(nuevaPalabra);
  }
  let nuevoString=nuevoArray.join(" ");
  return nuevoString;
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  let numeroInverso="";
  let string=numero.toString();
  for (let index = string.length-1; index >= 0; index--) {
    numeroInverso= numeroInverso + string[index];
  }
 let numNuevo=parseInt(numeroInverso);
  if(numNuevo === numero){
    return "Es capicua";
  }else return "No es capicua";
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  let nuevaCadena="";
  for (let index = 0; index < cadena.length; index++) {
        if(cadena[index] !== 'a' && cadena[index] !== 'b' && cadena[index] !== 'c'){
          nuevaCadena = nuevaCadena + cadena[index];
        } 
  }
  return nuevaCadena;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  arr.sort(function (a, b) {
    if (a.length > b.length) {
      return 1;
    }
    if (a.length < b.length) {
      return -1;
    }
    // a must be equal to b
    return 0;
  });

return arr;

}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí 
  const array3 = arreglo1.concat(arreglo2); 
  
  let duplicados = [];
 
  const tempArray = [...array3].sort();
 
  for (let i = 0; i < tempArray.length; i++) {
  if (tempArray[i + 1] === tempArray[i]) {
    duplicados.push(tempArray[i]);
  }
}
 
return duplicados; 
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

