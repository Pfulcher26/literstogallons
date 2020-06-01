function gallonstoliters(gallons) {
return parseInt((gallons*3.785412)); 
};

const number1 = parseInt(prompt("Enter a number:"));
const result = gallonstoliters(number);
alert(result);
