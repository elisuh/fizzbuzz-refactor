// prompt user for value, convert string to number
function getValue(message) {
  var msg = "Please enter a number from 1 to 100."; // default message
  if (message) {
    msg = message; // if the user enters something, prompt with the appropriate message from validateValue function
  }
	return prompt(msg); // return prompt with appropriate message based on value
}

function validateValue(num) {
  if (num === "") {
    return getValue("Please type something."); // check for empty string
  }

  num = parseFloat(num); // converts string to floating number

  if (isNaN(num)) {
    return getValue("That is not a number!"); // check for NaN
  } else if (num%1 !== 0) { 
    return getValue("No decimals allowed."); // check for decimals
  } else {
    return num; 
  }
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




