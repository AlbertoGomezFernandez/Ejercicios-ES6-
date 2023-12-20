/* Crea una función llamada findArrayIndex que reciba como parametros un array de textos y un texto y devuelve la posición del array cuando el valor del array sea igual al valor del texto que enviaste como parametro.

Haz varios ejemplos y compruebalos.

Sugerencia de función:
function findArrayIndex(array, text) {}

Ej array: */
const mainCharacters = [
  "Luke",
  "Leia",
  "Han Solo",
  "Chewbacca",
  "Rey",
  "Anakin",
  "Obi-Wan",
];


const findArrayIndex = (array, text) => {
  const indexOfCharacter = array.indexOf(text);
  /* if (indexOfCharacter > 0) {
    return `El index de ${text} es: ${indexOfCharacter}`;
  } else {
    return "No existe ese personaje en esta lista";
  } */
  return indexOfCharacter;
};

console.log(findArrayIndex(mainCharacters, "Leia"));
