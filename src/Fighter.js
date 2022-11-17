/* Fighter class definition */
const MAX_LIFE = 100;
class Fighter {
  constructor(name, strength, dexterity) {
    this.name = name;
    this.strength = strength;
    this.dexterity = dexterity;
    this.life = MAX_LIFE;
  }
  //fight(fightAttac) {};
  getRandom() {
    return Math.floor(Math.random() * (this.strength)+1);
  }
}

module.exports = Fighter;
