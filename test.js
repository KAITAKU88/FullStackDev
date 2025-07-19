function Animal(name, numsLeg, say) {
    this.name = name;
    this.numsLeg = numsLeg;
    this.say = say;
    this.tell = function () {
        console.log(`I'm a ${this.name}, I say ${this.say}`);
    }
}

const dog = new Animal("Dog", 4, "Gâu Gâu");
const duck = new Animal("Duck", 2, "Cạc Cạc");
console.log(dog);
console.log(duck);

dog.tell();
duck.tell();
