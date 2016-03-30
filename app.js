// prompt user for value, convert string to number
function getValue(message) {
  var msg = "Please enter a number from 1 to 100."; // default message
  if (message) {
    msg = message; // if the user enters something, prompt with the appropriate message from validateValue function
  }
	return parseInt(prompt(msg)); // pars string, convert from prompt to number
}

function validateValue(num) { //check that number is whole
  if (num === "") { // check for empty string
    return getValue("Please type something."); // if empty string, pass this message to getValue
  } else if (num%1 !== 0) { // check for decimals
    return getValue("No decimals allowed."); // if decimal, pass this message to getValue
  } else if (isNaN(num)) { // check for NaN
    return getValue("That is not a number!"); // if NaN, pass this message to getValue
  } else {
    return num; 
  }

// fizzbuzz loop
function fizzBuzz(num) {
   for (var i = 1; i <= num; i++) {
   if (i%15 === 0) {
    document.getElementById("list").innerHTML += "FizzBuzz<br>";
   }
   else if (i%3 === 0) {
    document.getElementById("list").innerHTML += "Fizz<br>";
  }
  else if (i%5 === 0) {
    document.getElementById("list").innerHTML += "Buzz<br>";
  }
  else {
    document.getElementById("list").innerHTML += i + "<br>";
  }
}
}

//run functions
  var value = validateValue(getValue());
  fizzBuzz(value);




