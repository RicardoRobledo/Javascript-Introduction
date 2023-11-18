var log = function(message) {
    console.log(message);
};
log("In JavaScript, functions are variables");

const log = message => {
    console.log(message);
};

const obj = {
    message: "They can be added to objects like variables",
    log(message) {
        console.log(message);
    }
};
obj.log(obj.message);

const messages = [
    "They can be inserted into arrays",
    message => console.log(message),
    "like variables",
    message => console.log(message)
];
messages[1](messages[0]); // They can be inserted into arrays
messages[3](messages[2]); // like variables

const insideFn = logger => {
    logger("They can be sent to other functions as arguments");
};
insideFn(message => console.log(message));
// They can be sent to other functions as arguments

const createScream = function(logger) {
    return function(message) {
        logger(message.toUpperCase() + "!!!"); //logger is saved
    };
};
const scream = createScream(message => console.log(message));
scream("functions can be returned from other functions");
scream("createScream returns a function");
scream("scream invokes that returned function");

const createScream2 = logger => message => {
    logger(message.toUpperCase() + "!!!");
};

const string = "Restaurants in Hanalei";
const urlFriendly = "";
for (var i = 0; i < string.length; i++) {
    if (string[i] === " ") {
        urlFriendly += "-";
    } else {
        urlFriendly += string[i];
    }
}
console.log(urlFriendly); // "Restaurants-in-Hanalei"

const string2 = "Restaurants in Hanalei";
const urlFriendly2 = string.replace(/ /g, "-");
console.log(urlFriendly2);

const loadAndMapMembers = compose(
    combineWith(sessionStorage, "members"),
    save(sessionStorage, "members"),
    scopeMembers(window),
    logMemberInfoToConsole,
    logFieldsToConsole("name.first"),
    countMembersBy("location.state"),
    prepStatesForMapping,
    save(sessionStorage, "map"),
    renderUSMap
);
getFakeMembers(100).then(loadAndMapMembers);

const target = document.getElementById("target");
const wrapper = document.createElement("div");
const headline = document.createElement("h1");
wrapper.id = "welcome";
headline.innerText = "Hello World";
wrapper.appendChild(headline);

const rateColor = (color, rating) => ({
    ...color,
    rating
});

let list = [{ title: "Rad Red" }, { title: "Lawn" }, { title: "Party Pink" }];

const addColor = function(title, colors) {
    colors.push({ title: title });
    return colors;
};
console.log(addColor("Glam Green", list).length); // 4
console.log(list.length); // 4

const addColor2 = (title, array) => array.concat({ title });
console.log(addColor2("Glam Green", list).length); // 4
console.log(list.length); // 3

const addColor3 = (title, list) => [...list, { title }];

const frederick = {
    name: "Frederick Douglass",
    canRead: false,
    canWrite: false
};
function selfEducate() {
    frederick.canRead = true;
    frederick.canWrite = true;
    return frederick;
}
selfEducate();
console.log(frederick);

const frederick2 = {
    name: "Frederick Douglass",
    canRead: false,
    canWrite: false
};
const selfEducate2 = person => {
    person.canRead = true;
    person.canWrite = true;
    return person;
};
console.log(selfEducate2(frederick2));
console.log(frederick2);

const frederick3 = {
    name: "Frederick Douglass",
    canRead: false,
    canWrite: false
};
const selfEducate3 = person => ({
    ...person,
    canRead: true,
    canWrite: true
});
console.log(selfEducate3(frederick3));
console.log(frederick3);

const schools = ["Yorktown", "Washington & Liberty", "Wakefield"];
console.log(schools.join(", "));

const wSchools = schools.filter(school => school[0] === "W");
console.log(wSchools);

const highSchools = schools.map(school => `${school} High School`);
console.log(highSchools.join("\n"));
console.log(schools.join("\n"));

const highSchools2 = schools.map(school => ({ name: school }));
console.log(highSchools2);

let schools3 = [
    { name: "Yorktown" },
    { name: "Stratford" },
    { name: "Washington & Liberty" },
    { name: "Wakefield" }
];
const editName = (oldName, name, arr) =>
    arr.map(item => {
        if (item.name === oldName) {
            return {
                ...item,
                name
            };
        } else {
            return item;
        }
    });
let updatedSchools = editName("Stratford", "HB Woodlawn", schools3);
console.log(updatedSchools[1]); // { name: "HB Woodlawn" }
console.log(schools3[1]); // { name: "Stratford" }

const editName2 = (oldName, name, arr) =>
arr.map(item => (item.name === oldName ? { ...item, name } : item));

const schools4 = {
    Yorktown: 10,
    "Washington & Liberty": 2,
    Wakefield: 5
};
const schoolArray = Object.keys(schools4).map(key => ({
    name: key,
    wins: schools4[key]
}));
console.log(schoolArray);

const ages = [21, 18, 42, 40, 64, 63, 34];
const maxAge = ages.reduce((max, age) => {
    console.log(`${age} > ${max} = ${age > max}`);
    if (age > max) {
        return age;
    } else {
        return max;
    }
}, 0);
console.log("maxAge", maxAge);

const max = ages.reduce((max, value) => (value > max ? value : max), 0);

const colors = [
{
    id: "xekare",
    title: "rad red",
    rating: 3
},
{
    id: "jbwsof",
    title: "big blue",
    rating: 2
},
{
    id: "prigbj",
    title: "grizzly grey",
    rating: 5
},
{
    id: "ryhbhsl",
    title: "banana",
    rating: 1
}];
const hashColors = colors.reduce((hash, { id, title, rating }) => {
    hash[id] = { title, rating };
    return hash;
}, {});
console.log(hashColors);

const colors2 = ["red", "red", "green", "blue", "green"];
const uniqueColors = colors2.reduce(
    (unique, color) =>
    unique.indexOf(color) !== -1 ? unique : [...unique, color],
    []
);
console.log(uniqueColors);

const invokeIf = (condition, fnTrue, fnFalse) => condition ? fnTrue() : fnFalse();
const showWelcome = () => console.log("Welcome!!!");
const showUnauthorized = () => console.log("Unauthorized!!!");
invokeIf(true, showWelcome, showUnauthorized); // "Welcome!!!"
invokeIf(false, showWelcome, showUnauthorized); // "Unauthorized!!!"

const userLogs = userName => message => console.log(`${userName} -> ${message}`);
const log = userLogs("grandpa23");
log("attempted to load 20 fake members");
log(`successfully loaded members`)
log("encountered an error loading members")

const countdown = (value, fn) => {
    fn(value);
    return value > 0 ? countdown(value - 1, fn) : value;
};
countdown(10, value => console.log(value));

const countdown2 = (value, fn, delay = 1000) => {
    fn(value);
    return value > 0 ? setTimeout(() => countdown2(value - 1, fn, delay), delay) : value;
};
const log = value => console.log(value);
countdown2(10, log);

const dan = {
    type: "person",
    data: {
        gender: "male",
        info: {
            id: 22,
            fullname: {
                first: "Dan",
                last: "Deacon"
            }
        }
    }
};
const deepPick = (fields, object = {}) => {
    const [first, ...remaining] = fields.split(".");
    return remaining.length ? deepPick(remaining.join("."), object[first]) : object[first];
};
deepPick("type", dan); // "person"
deepPick("data.info.fullname.first", dan); // "Dan"

const template = "hh:mm:ss tt";
const clockTime = template
    .replace("hh", "03")
    .replace("mm", "33")
    .replace("ss", "33")
    .replace("tt", "PM");
console.log(clockTime);

setInterval(logClockTime, 1000);
function logClockTime() {
    // Get Time string as civilian time
    let time = getClockTime();
    // Clear the Console and log the time
    console.clear();
    console.log(time);
}
function getClockTime() {
    // Get the Current Time
    let date = new Date();
    let time = {
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds(),
        ampm: "AM"
    };
// Convert to civilian time
if (time.hours == 12) {
time.ampm = "PM";
} else if (time.hours > 12) {
time.ampm = "PM";
time.hours -= 12;
}
// Prepend a 0 on the hours to make double digits
if (time.hours < 10) {
time.hours = "0" + time.hours;
}
// prepend a 0 on the minutes to make double digits
if (time.minutes < 10) {
time.minutes = "0" + time.minutes;
}
// prepend a 0 on the seconds to make double digits
if (time.seconds < 10) {
time.seconds = "0" + time.seconds;
}
// Format the clock time as a string "hh:mm:ss tt"
return time.hours + ":" + time.minutes + ":" + time.seconds + " " + time.ampm;
}