const name2 = "Tallac";
const elevation = 9738;
const funHike = { name2, elevation };
console.log(funHike); // {name: "Tallac", elevation: 9738}
funHike.print(); // Mt. Tallac is 9738 feet tall

const name3 = "Tallac";
const elevation2 = 9738;
const print = function() {
 console.log(`Mt. ${this.name3} is ${this.elevation2} feet tall`);
};
const funHike2 = { name3, elevation, print };
funHike2.print(); // Mt. Tallac is 9738 feet tall

// Old
var skier = {
    name2: name2,
    sound: sound,
    powderYell: function() {
        var yell = this.sound.toUpperCase();
        console.log(`${yell} ${yell} ${yell}!!!`);
    },
    speed: function(mph) {
        this.speed = mph;
        console.log("speed:", mph);
    }
};
   
// New
const skier = {
    name2,
    sound,
    powderYell() {
        let yell = this.sound.toUpperCase();
        console.log(`${yell} ${yell} ${yell}!!!`);
    },
    speed(mph) {
        this.speed = mph;
        console.log("speed:", mph);
    }
};