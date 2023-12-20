/* Dado el siguiente javascript, utiliza .filter() para mostrar por consola 
los streamers que incluyan la palabra introducida en el input. De esta forma, si 
introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si
introduzco 'i', me deberia de mostrar el streamer 'Rubius' e 'Ibai'. */
const streamers = [
  { name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },
  { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
  { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' },
  { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }
];

const inputElement = document.querySelector("input");


const searchStreamer = (ev) => {
  const inputText = ev.target.value.toLowerCase();

  const selectedStreamer = streamers.filter((streamer) => streamer.name.toLocaleLowerCase().includes(inputText));

  const steamerToShow = selectedStreamer.map((streamer) => streamer.name);
  console.clear();
  console.log(steamerToShow);
};


inputElement.addEventListener("input", searchStreamer);