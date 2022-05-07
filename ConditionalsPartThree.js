const age = parseInt(prompt("How old are you?"));

console.log(isNaN(age));

false || true === true
true || false === false
false && true === false

if(isNaN(age) || age < 0) {
    console.log("please write a real positive number");
} else if (age < 18) {
    console.log("you are too young.");
} else if(age >= 18 && age <= 50){
    console.log("you can drink");
} else {
    console.log("you can't drink");
} 