const sandwich = {
    bread: "dutch crunch",
    meat: "tuna",
    cheese: "swiss",
    toppings: ["lettuce", "tomato", "mustard"]
};
const { bread, meat } = sandwich;
console.log(bread, meat); // dutch crunch tuna
bread = "garlic";
meat = "turkey";
console.log(bread); // garlic
console.log(meat); // turkey
console.log(sandwich.bread, sandwich.meat); // dutch crunch tuna

const lordify4 = regularPerson => {
    console.log(`${regularPerson.firstname} of Canterbury`);
};
const regularPerson = {
    firstname: "Bill",
    lastname: "Wilson"
};
lordify4(regularPerson); // Bill of Canterbury

const lordify5 = ({ firstname }) => {
    console.log(`${firstname} of Canterbury`);
};
const regularPerson2 = {
    firstname: "Bill",
    lastname: "Wilson"
};
lordify5(regularPerson2); // Bill of Canterbury

const regularPerson3 = {
    firstname: "Bill",
    lastname: "Wilson",
    spouse: {
        firstname: "Phil",
        lastname: "Wilson"
    }
};
const lordify6 = ({ spouse: { firstname } }) => {
    console.log(`${firstname} of Canterbury`);
};
lordify6(regularPerson3); // Phil of Canterbury