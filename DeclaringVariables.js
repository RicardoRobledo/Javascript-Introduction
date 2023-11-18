var pizza = true;
pizza = false;

console.log(pizza); // false

const pizza = true;
//pizza = false;

var topic = "JavaScript";
if (topic) {
 var topic = "React";
 console.log("block", topic); // block React
}
console.log("global", topic); // global React

var topic = "JavaScript";
if (topic) {
 let topic = "React";
 console.log("block", topic); // React
}
console.log("global", topic); // JavaScript

lastName = 'X';
firstName = 'Zero';
middleName = 'AXL';

console.log(lastName + " " + firstName + " " + middleName);
console.log(`${lastName}, ${firstName}, ${middleName}`);

qty = '4';
e = 'Party';
price = '4000';
ticketAgent = 'Zero';

const email = `
Hello ${firstName},
Thanks for ordering ${qty} tickets to ${e}.
Order Details
${firstName} ${middleName} ${lastName}
${qty} x $${price} = $${qty*price} to ${e}
You can pick your tickets up 30 minutes before
the show.
Thanks,
${ticketAgent}`