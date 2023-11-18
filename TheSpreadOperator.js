const peaks = ["Tallac", "Ralston", "Rose"];
const canyons = ["Ward", "Blackwood"];
const tahoe = [...peaks, ...canyons];
console.log(tahoe.join(", ")); // Tallac, Ralston, Rose, Ward, Blackwood

const peaks2 = ["Tallac", "Ralston", "Rose"];
const [last] = peaks2.reverse();
console.log(last); // Rose
console.log(peaks2.join(", ")); // Rose, Ralston,

const peaks3 = ["Tallac", "Ralston", "Rose"];
const [last2] = [...peaks3].reverse();
console.log(last2); // Rose
console.log(peaks3.join(", ")); // Tallac, Ralston, Rose

const lakes = ["Donner", "Marlette", "Fallen Leaf", "Cascade"];
const [first, ...others] = lakes;
console.log(others.join(", ")); // Marlette, Fallen Leaf, Cascade

function directions(...args) {
    let [start, ...remaining] = args;
    let [finish, ...stops] = remaining.reverse();
    console.log(`drive through ${args.length} towns`);
    console.log(`start in ${start}`);
    console.log(`the destination is ${finish}`);
    console.log(`stopping ${stops.length} times in between`);
}
directions("Truckee", "Tahoe City", "Sunnyside", "Homewood", "Tahoma");

const morning = {
    breakfast: "oatmeal",
    lunch: "peanut butter and jelly"
};
const dinner = "mac and cheese";
const backpackingMeals = {
    ...morning,
    dinner
};
console.log(backpackingMeals);