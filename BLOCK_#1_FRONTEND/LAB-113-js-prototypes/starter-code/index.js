// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health
        this.strength = strength
    }

    attack() {
        return this.strength
    }

    receiveDamage(damage) {
        this.health -= damage
    }


}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength)
        this.name = name
    }

    receiveDamage(damage) {
        this.health -= damage
        if (this.health > 0) return this.name + " has received " + damage + " points of damage"
        if (this.health <= 0) return this.name + " has died in act of combat"
    }

    battleCry() {
        return "Odin Owns You All!"
    }

}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength)
    }

    receiveDamage(damage) {
        this.health -= damage
        if (this.health > 0) return "A Saxon has received " + damage + " points of damage"
        if (this.health <= 0) return "A Saxon has died in act of combat"
    }

}

// War
class War {
    constructor() {
        this.vikingArmy = []
        this.saxonArmy = []
    }

    addViking(Viking){
        this.vikingArmy.push(Viking)
    }

    addSaxon(Saxon){
        this.saxonArmy.push(Saxon)
    }

    vikingAttack(){
        if(this.vikingArmy.length == 0 || this.saxonArmy.length == 0){
            return this.showStatus()
        }
        let chosenSaxonPosition = Math.floor(Math.random()*(this.saxonArmy.length));
        let chosenVikingPosition = Math.floor(Math.random()*(this.vikingArmy.length));
        let chosenSaxon = this.saxonArmy[chosenSaxonPosition]
        let chosenViking = this.vikingArmy[chosenVikingPosition]

        let result = chosenSaxon.receiveDamage(chosenViking.attack())

        if(chosenSaxon.health<=0){this.saxonArmy.splice(chosenSaxonPosition, 1)} 

        return result;
    }

    saxonAttack(){
        if(this.vikingArmy.length == 0 || this.saxonArmy.length == 0){
            return this.showStatus()
        }
        let chosenSaxonPosition = Math.floor(Math.random()*(this.saxonArmy.length));
        let chosenVikingPosition = Math.floor(Math.random()*(this.vikingArmy.length));
        let chosenSaxon = this.saxonArmy[chosenSaxonPosition]
        let chosenViking = this.vikingArmy[chosenVikingPosition]

        let result = chosenViking.receiveDamage(chosenSaxon.attack())

        if(chosenViking.health<=0){this.vikingArmy.splice(chosenVikingPosition, 1)} 

        return result;
    }

    showStatus(){
        if(this.saxonArmy.length === 0) return "Vikings have won the war of the century!"
        if(this.vikingArmy.length === 0) return "Saxons have fought for their lives and survive another day..."
        if(this.vikingArmy.length >0 && this.saxonArmy.length >0) return "Vikings and Saxons are still in the thick of battle."
    }

}


const soldier1 = new Soldier(10, 2)
const viking = new Viking("Pedro", 30, 6)
const saxon = new Saxon(30, 6)
const parsleyWar = new War()

console.log(soldier1);
console.log(viking);
console.log(viking.battleCry());
console.log(viking.receiveDamage(1));
console.log(viking);
console.log(saxon);
console.log(saxon.attack());
console.log(saxon.receiveDamage(2));
console.log(saxon);

console.log("\n","\n","\n", "WAR BEGIN");

let vikingNumbers = Math.floor(Math.random()*(3)+1);
let saxonNumbers = Math.floor(Math.random()*(3)+1);
let vikingAttacks = Math.floor(Math.random()*(5)+1);
let saxonAttacks = Math.floor(Math.random()*(5)+1);

for (let i = 0; i < vikingNumbers; i++) {
    parsleyWar.addViking(viking);
}

for (let i = 0; i < saxonNumbers; i++) {
    parsleyWar.addSaxon(saxon);
}

for (let i = 0; i < vikingAttacks; i++) {
    parsleyWar.vikingAttack();
}

for (let i = 0; i < saxonAttacks; i++) {
    parsleyWar.saxonAttack();

}

console.log(parsleyWar.showStatus());

console.log(parsleyWar);