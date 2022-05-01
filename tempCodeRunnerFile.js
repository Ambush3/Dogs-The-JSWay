class Dog {
    constructor(name, species, size, bark) {
        this.name = name;
        this.species = species;
        this.size = size;
        this.bark = bark;
    }

    bark(target) {
        if (this.size > 60) {
            console.log(`${fang.name} is a ${fang.species} dog measuring ${fang.size}`);
            console.log(`Look, a cat! ${fang.name} barks: ${fang.bark()}`);
        };

        if (this.size <= 59) {
            console.log(`${snowy.name} is a ${snowy.species} dog measuring ${snowy.size}`);
            console.log(`Look, a cat! ${snowy.name} barks: ${snowy.bark()}`);
        }
    }

}

const fang = new Dog("Fang", "boarhound", 75, "Grr Grrr");
const snowy = new Dog("Snowy", "terrier", 22, "Yip yip");
