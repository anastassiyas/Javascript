// Variables
var myName = "Anastassiya Savostina";
var pizzaCount = 8;
var isHungry = true;
var totalCost = pizzaCount * 8.00;

//console.log, alert, document.write, target html element

alert(" Hi! " + myName );

alert(" Pizzas cost " + pizzaCount + " $ per each ");

alert(" Your total is: $ " + totalCost );

alert(" Still Hungry: " + isHungry );


//01 Assignment
// Calculate properties of a circle
// Store a radius into a variable
var radius = 5;

// Calculate the circumference based on the radius
var circumference = Math.PI * 2*radius;

//console.log
console.log( " The circumference is " + circumference );
document.write (" The circumference is " + circumference );
document.getElementById("demo").innerHTML=" The circumference is " + circumference;
// Calculate the area based on the radius
var area = Math.PI * radius*radius;
console.log( " The area is " + area );
document.write (" The area is " + area );
document.getElementById("demo1").innerHTML=" The area is " + area;

// Make a converter to Celsius and to Farenheit
// Store a celsius into a variable
var celsius = 15;
//Convert it to fahrenheit and output "NN°C is NN°F"
var celsiusInFarenheit = (celsius*9)/5 + 32;

console.log (celsius + "°C is " + celsiusInFarenheit + " °F ");
document.write (celsius + " °C is " + celsiusInFarenheit + " °F "); 
document.getElementById("cinf").innerHTML= celsius + " °C is " + celsiusInFarenheit + " °F " ;
//Now store a fahrenheit temperature into a variable.
var fahrenheit = 10;

//Convert it to celsius and output "NN°F is NN°C
var fahrenheitInC = ((fahrenheit - 32)*5)/9;

console.log(fahrenheit + "°F is " + fahrenheitInC + " °C ");
document.write(fahrenheit + "°F is " + fahrenheitInC + " °C ");
document.getElementById("finc").innerHTML= fahrenheit + " °F is " + fahrenheitInC + " °C ";

//Want to find out how old you'll be? Calculate it!

//Store your birth year in a variable.
var birthYear = 1980

//Store a future year in a variable.
var futureYear = 2040

//Calculate your 2 possible ages for that year based on the stored values.
var age  = futureYear - birthYear;

//Output them to the screen like so: "I will be either NN or NN in YYYY", substituting the values.
console.log( " I will be either " + age + " or "  + (age - 1));

document.write(" I will be either " + age + " or "  + (age - 1));
document.getElementById("ages").innerHTML= " I will be either " + age + " or "  + (age - 1);