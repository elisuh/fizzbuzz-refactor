var i = prompt("Please enter a number from 1 to 100.");

function convert() {
	var i = +"i";
}

function count() {
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