// prompt user for value, convert string to number
function getValue() {
	var value = prompt("Please enter a number from 1 to 100.");
	value = parseInt(value);
	return value;
	console.log("Is dis working?");
}

// fizzbuzz loop
function fizzBuzz() {
   for (var i = 1; i <= 100; i++) {
   if (i%15 === 0) {
    document.getElementById("list").innerHTML = "FizzBuzz";
    console.log("fizzbuzz");
   }
   else if (i%3 === 0) {
    document.getElementById("list").innerHTML = "Fizz";
    console.log("fizz");
  }
  else if (i%5 === 0) {
    document.getElementById("list").innerHTML = "Buzz";
    console.log("buzz");
  }
  else {
    document.getElementById("list").innerHTML = i;
    console.log(i);
  }
}
}

// check for decimals
    while(value%1 != 0) {
      value = prompt("No decimals allowed.");
      value = +value; //return numeric value
      if(isNaN(value)) {
        prompt("Please enter a whole number!"); // none of that NaN funny business.
      }
    }

// make sure string isn't empty
    while(value === "") {
      value = prompt("Please type something.");
      value = +value;
    } 

//run functions
  value = getValue();
  fizzBuzz(value);
  






