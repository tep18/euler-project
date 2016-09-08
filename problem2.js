var total2 = 0;
var x = 1;
var y = 0;
while (x && y < 4000000) {
	y += x;
	x += y;
	if (x % 2 ===0) {
		total2 += x;
	}
	else if (y % 2 ===0) {
		total2 += y;
	}
}
console.log(total2);



/*This script totals all numbers in the Fibonacci
Sequence below 4 million*/


document.getElementById("total2").innerHTML = total2;