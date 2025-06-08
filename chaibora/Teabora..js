// Declare constants 
const w = 200;
const m = 50;
const t = 1;
const s = 2;

// Declaring variables
let a;
let b;
let c;
let d;
let input;
let u;

// Declare function
function  calculateChaiboraIngridents(u) {
  a = m * u;
  b= t * u;
  c = s * u;
  d = w * u;
  return { a, b, c, d };
}

// Input
input = prompt("Enter the number of cups of tea you want to make:");
u = parseInt(input);

// Output
 calculateChaiboraIngrident(u);
console.log(`To make ${u} cups of tea, you need:`);
console.log(`${a} ml of water`);
console.log(`${b} ml of milk`);
console.log(`${c} tsp of tea`);
console.log(`${d} tsp of sugar`);
console.log("Enjoy your tea!");
