// javascript/arrays/
// array_learning.js

const cities = ["Praha", "Olomouc", "Trutnov", "Brno"];
console.log("Celá array: " + cities);
console.log("2. město: " + cities[1]);
cities.push("Plzeň");
console.log(cities);

for (let i = 0; i < cities.length; i++) {
  console.log("Město: " + cities[i]);
}
