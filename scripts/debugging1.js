// Run the program, then correct the errors

// The program should return the value of circumference based on the radius.

console.log("Begin program")

var radius = 10

var circumference = "2" * Math.PI * radius;

console.log("circ of 10: " + circumference)

function getCirc() {
	var radius = document.getElementById('r').value;
	var circumference = (2  * radius) * Math.PI;
	// console.log("Circumference of circle with radius " + radius + ": " + circumference);
	$("#circResult").html("Circumference of circle with radius " + radius + ": " + circumference);
}