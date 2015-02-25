// Run the program, then correct the errors

// The program should implement a function to convert celsius to Fahrenheit.

var toFahrenheit = function(temperature) {
  return temperature * (9/5) + 32;
};

var temperatureInCelsius = 37;
var temperatureInFahrenheit = toFahrenheit(temperatureInCelsius)

console.log("37C to F: " + temperatureInFahrenheit);

function getFahr() {
	var celsius = document.getElementById('c').value;
	var fahren = toFahrenheit(celsius);
	$("#tempResult").html(celsius + "C is " + fahren + "F");
}



// function getCirc() {
// 	var radius = document.getElementById('r').value;
// 	var circumference = (2  * radius) * Math.PI;
// 	console.log("Circumference of circle with radius " + radius + ": " + circumference);
// }