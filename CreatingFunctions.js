function logCompliment() {
    console.log("You're doing great!");
}
logCompliment();

const logCompliment2 = function() {
    console.log("You're doing great!");
};
logCompliment2();

const logCompliment3 = function(firstName) {
    console.log(`You're doing great, ${firstName}`);
};
logCompliment3("Molly");

const logCompliment4 = function(firstName, message) {
    console.log(`${firstName}: ${message}`);
};
logCompliment4("Molly", "You're so cool");

const createCompliment5 = function(firstName, message) {
    return `${firstName}: ${message}`;
};
console.log(createCompliment5("Molly", "You're so cool"));

function logActivity(name="Shane McConkey", activity="skiing") {
    console.log(`${name} loves ${activity}`);
}
logActivity();

const defaultPerson = {
    name: {
        first: "Shane",
        last: "McConkey"
    },
    favActivity: "skiing"
};
function logActivity2(person=defaultPerson) {
    console.log(`${person.name.first} loves ${person.favActivity}`);
}
logActivity2();

const lordify = function(firstName) {
    return `${firstName} of Canterbury`;
};
console.log(lordify("Dale")); // Dale of Canterbury
console.log(lordify("Gail")); // Gail of Canterbury

const lordify2 = firstName => `${firstName} of Canterbury`;
console.log(lordify2("Dale")); // Dale of Canterbury
console.log(lordify2("Gail")); // Gail of Canterbury

const lordify3 = (firstName, land) => {
    if (!firstName) {
        throw new Error("A firstName is required to lordify");
    }
    if (!land) {
        throw new Error("A lord must have a land");
    }
    return `${firstName} of ${land}`;
};
console.log(lordify3("Kelly", "Sonoma")); // Kelly of Sonoma
console.log(lordify3("Dave")); // ! JAVASCRIPT ERROR

const person = (firstName, lastName) =>({
    first:firstName, last:lastName
});
console.log(person("Brad", "Janson"));

console.log(this);
const tahoe = {
    mountains: ["Freel", "Rose", "Tallac", "Rubicon", "Silver"],
    print: function(delay = 1000) {
        setTimeout(() => {
            console.log(this.mountains.join(", "));
        }, delay);
    }
};
tahoe.print(); // Freel, Rose, Tallac, Rubicon, Silver