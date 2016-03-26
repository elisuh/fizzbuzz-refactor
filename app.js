
// fizzbuzz loop
function fizzBuzz(number) {
   for (var i = 1; i <= number; i++) {
   if (i%15 === 0) {
    document.getElementById("list").innerHTML = "FizzBuzz";
   }
   else if (i%3 === 0) {
    document.getElementById("list").innerHTML = "Fizz";
  }
  else if (i%5 === 0) {
    document.getElementById("list").innerHTML = "Buzz";
  }
  else {
    document.getElementById("list").innerHTML = i;
  }
}

// prompt user for value, validate and pass through fizzbuzz function

function getValue() {
	var value = prompt("Please enter a number from 1 to 100.");
	value = parseInt(value);
	return fizzBuzz(value);
}