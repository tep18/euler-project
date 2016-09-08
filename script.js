/*This script checks if a number is divisble by
3 OR 5 and if so, adds the number to the sum*/

var total = 0
for (i = 0; i < 1000; i++) {
	if (i % 3 === 0 || i % 5 === 0) {
		total += i;
	}
}

// Reference to print the results in a webpage
document.getElementById("total").innerHTML = total;


