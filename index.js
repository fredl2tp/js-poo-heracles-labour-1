// First Labour : Heracles vs Nemean Lion
// use your Figher class here
const Fighter = require("./src/Fighter");

const Fighterinst = [
  new Fighter("Heracles🧔", 20, 6),
  new Fighter("Nemean Lion🦁", 11, 13),
];
//console.log(Fighterinst[0].fight(Fighterinst[1].strength))
//console.log(Fighterinst[0].name, Fighterinst[0].life);
//console.log(Fighterinst[1].name, Fighterinst[1].life);
console.log(Fighterinst[0].life - (Math.max(0,(Fighterinst[1].getRandom()-Fighterinst[0].dexterity))));

