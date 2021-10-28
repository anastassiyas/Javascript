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



// Calculate properties of a circle
// Store a radius into a variable
var radius = 5;

// Calculate the circumference based on the radius
var circumference = Math.PI * 2*radius;

//console.log
console.log( " The circumference is " + circumference );

// Calculate the area based on the radius
var area = Math.PI * radius*radius;
console.log( " The area is " + area );

document.write( " The circumference is " + circumference );

document.getElementById("demo").innerHTML=" The circumference is " + circumference;


