/* 4.1 Dado el siguiente array, devuelve un array con sus nombres 
utilizando .map(). */
const users1 = [
  { id: 1, name: 'Abel' },
  { id: 2, name: 'Julia' },
  { id: 3, name: 'Pedro' },
  { id: 4, name: 'Amanda' }
];

const mappedUser = users1.map((element) => element.name);

console.log(mappedUser);
/* 4.2 Dado el siguiente array, devuelve una lista que contenga los valores 
de la propiedad .name y cambia el nombre a 'Anacleto' en caso de que 
empiece por 'A'. */
const users2 = [
  { id: 1, name: 'Abel' },
  { id: 2, name: 'Julia' },
  { id: 3, name: 'Pedro' },
  { id: 4, name: 'Amanda' }
];

const cleanUser = users2.map((element) => {
  if (element.name.includes("A")) { element.name = "Anacleto"; }
  return element.name;
});

console.log(cleanUser);
/* 4.3 Dado el siguiente array, devuelve una lista que contenga los valores 
de la propiedad .name y añade al valor de .name el string ' (Visitado)' 
cuando el valor de la propiedad isVisited = true. */
const cities = [
  { isVisited: true, name: 'Tokyo' },
  { isVisited: false, name: 'Madagascar' },
  { isVisited: true, name: 'Amsterdam' },
  { isVisited: false, name: 'Seul' }
];

const visitedCities = cities.map((city) => {
  if (city.isVisited) {
    city.name = `${city.name} Visitado`;
  }
  return city.name;
});

console.log(visitedCities);