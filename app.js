var value

// prompt user for value, convert from string

function getValue() {
	var value = prompt("Please enter a number from 1 to 100.");
	value = parseInt(value);
	return value;
}

// fizzbuzz loop
function fizzBuzz() {
   for (var i = 1; i <= 100; i++) {
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
// checks for decimals
    while(value%1 != 0) {
      value = prompt("No decimals allowed");
      value = +value;
      if(isNaN(value)) {
        prompt("Please enter a whole number!");
      }
    }

    //Make sure string isn't empty
    while(value === "") {
      value = prompt("Please type Something");
      value = +value;
    } 

//run functions
  value = getValue();
  fizzBuzz(value);
  }






