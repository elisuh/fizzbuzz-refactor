// a variable is born
var value

// prompt user for value, convert string to number, check for decimals and empty string
function getValue() {
	value = prompt("Please enter a number from 1 to 100.");
	value = parseInt(value);
    return value;
   }

// check that it's a whole number
function validateValue() { 
  	while(value === "") { // make sure string isn't empty
      value = prompt("Please type something.");
  		}
   while(value%1 != 0) { // check for decimal
		value =	prompt("No decimals allowed.");
 		}
	while(isNaN(value)) {
		value =	prompt("That is not a number!"); // check for NaN
      	}
  return value;
}

// fizzbuzz loop
function fizzBuzz(num) {
   for (var i = 1; i <= num; i++) {
   if (i%15 === 0) {
    document.getElementById("list").innerHTML += "FizzBuzz<br>";
    console.log("fizzbuzz");
   }
   else if (i%3 === 0) {
    document.getElementById("list").innerHTML += "Fizz<br>";
    console.log("fizz");
  }
  else if (i%5 === 0) {
    document.getElementById("list").innerHTML += "Buzz<br>";
    console.log("buzz");
  }
  else {
    document.getElementById("list").innerHTML += i + "<br>";
    console.log(i);
  }
}
}

//run functions
  value = getValue();
  value = validateValue();
  fizzBuzz(value);




