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


//******12 exercise Solutions***********
//1 Write an expression that uses at least 3 different arithmetic operators.
// // The expression should equal 42.
// // Hint: +, -, *, /, and % are possible arithmetic operators
// // Your Code:
var one=6 * 7
var two=84/2
var three=2%4 +40
var four=100/4 +17
console.log(6 * 7);
console.log(84/2);
console.log(2%4 +40);
console.log(100/4 +17);
//2 Create three variables a string with the name of your favorite food, a boolen answering if it's good for you, and a number with its calories. The first letter of the string should be capitalized. 
// // Your Code:
var favFood= "Meatloaf"
var health= false;
var calories = 1000;

//template literal ES6

console.log("My favourite food is" + favFood + "Is it healthy?" + health + "calories" );
console.log(`My favourite food is ${favFood} Is it healthy? ${health} calories `);
console.log("Chocolate");
// // 3 Create an array called egFamily and add "Julia", "James", and your name to the array. Then, print the egFamily to the console using console.log.
// // Your Code:
var egFamily= ["Julia", "James", "Anastassiya", "Ali"];
console.log (egFamily[2]);
console.log (egFamily[3]);

// // 4 Fix the right side expression so it evaluates to true.
// // "ALL Strings are CrEaTeD equal" == "All STRINGS are CrEaTED Equal"
// // Your Code:
var answer = "ALL Strings are CrEaTeD equal" == "ALL Strings are CrEaTeD equal";
console.log(answer);
// // 5 Use this equation and the variables fahrenheit and celsius to print the Fahrenheit equivalent of 12°C.
// //  Use the Celsius-to-Fahrenheit formula to set the fahrenheit varible:
// //F = C x 1.8 + 32
// //Log the fahrenheit variable to the console.
// // Your Code:
var celsius=12;
var farenheit= celsius * 1.8 +32;
console.log(farenheit);

// //6 Build a string using concatenation by combining the lines from this famous haiku poem by Yosa Buson.
// // Blowing from the west
// // Fallen leaves gather
// // In the east.
// // Each string should be printed on its own line.
// // Hint: You will need to use special characters to produce the following output. For a refresher, feel free to review the previous Escaping Strings topic in this lesson.
// // Your Code:
var haiku = "Blowing from the west\n" + "Fallen leaves gather\n" + "In the east." ;
console.log(haiku);

// //get7 Define two variables called thingOne and thingTwo and assign them values. Print the values of both variables in one console.log statement using concatenation. For example,
// // red blue
// // where "red" is the value of thingOne and "blue" is the value of thingTwo. Don't forget to use semicolon at the end of each statement!
// // Your Code:
var thingOne="red";
var thingTwo="blue";
console.log(thingOne + thingTwo);
//  //8 Create a variable called fullName and assign it your full name as a string
// // Create a variable called age and addign it your age.
// // Create a varaibel called quote and assign your favorite quote as a string. 
// // Print out the results 
// // Your Code:
var fullName = "Anastassiya Savostina";
//  //9 Create a variable called bill and assign it the result of 10.25 + 3.99 + 7.15 (don't perform the calculation yourself, let JavaScript do it!). Next, create a variable called tip and assign it the result of multiplying bill by a 15% tip rate. Finally, add the bill and tip together and store it into a variable called total.
// // Print the total to the JavaScript console.
// // Hint: 15% in decimal form is written as 0.15_._
// // TIP: To print out the total with a dollar sign ( $ ) use string concatenation. To round total up by two decimal points use the toFixed() method. To use toFixed() pass it the number of decimal points you want to use. For example, if total equals 3.9860, then total.toFixed(2) would return 3.99.
// // Your Code:

// //10 Use your variables and string concatenation to create your own awesome message and store it in an awesomeMessage variable. Finally, print your awesome message to the JavaScript console.
// // Your Code:
//  //11 Create 2 variables one called big and one called small. Set the strings to each: "I am Big like a elepant!" "I am Small like a mouse!". Use string methods to make the 
// //'small' variable lowercase and the 'big' variable capital.
// //console.log out the results
// // Your Code:
// //12 Create a variable called 'my time' that will display the currenttime using a ' new Date()' method
//    Create a variable called 'message' that wil introduce the call.//    Concatinate the two variables together
var message= "It is currently..."
var myTime= new Date();

console.log(message + myTime)
var small= " I am a small like a mouse";
var big= "I am a big like an elephant";
console.log (small.toLowerCase() + big.toUpperCase())

//The Geometrizer

//Create 2 functions that calculate properties of a circle, using the definitions here.

//Create a function called calcCircumfrence:

//Pass the radius to the function.
//Calculate the circumference based on the radius, and output "The circumference is NN".

function calcCircumfrence(radius) {
var a = (Math.PI * radius) * 2;
console.log(" The circumfrence is " + a + " . ");
  }
//Create a function called calcArea:

function calcArea(radius) {
var b = (Math.PI * radius) * radius;
console.log(" The area is " + b + " . ");
}

//Pass the radius to the function.
//Calculate the area based on the radius, and output "The area is NN".

calcCircumfrence(10);
calcArea(5);



let str1 = "Hello ";
let str2 = "today is!" + new Date();
let str3 = " Have a nice day!";
console.log(str1 + str2+ str3+ "Tomorrow is Hump Day" + "That is mid-week");
console.log('${str1}  ${str2} ${str3}  Tomorrow is Hump Day. That is mid-week');

function getAge() {
    var mes= prompt("What is your name?");
    alert(`Hello ${mes}`);
}

getAge();

function sayHello() {
    var mes1= prompt("What is your name?");
    document.GetElementById("demo-6").innerHTML= "Hello " + mes1;
}
 
function toCelsius(f) {
    return (5/9) * (f-32);
}

document.getElementById("demo-0").innerHTML=toCelsius(77);
document.getElementById("demo-1").innerHTML=toCelsius(35);
document.getElementById("demo-2").innerHTML=toCelsius(20);


function calculateDeg() {
    var degree=document.getElementById("deg").value;
    var tempCalc=(5/9) * (degree-32);
    console.log( " Your degree is " + tempCalc + " in farenheit!!");
    document.getElementById("celDeg").innerHTML= Math.round(tempCalc);

};
calculateDeg(); 

document.write ('Hello World' + '<br/>'); 
document.write ('Hello World' + '<br/>'); 
document.write ('Hello World' + '<br/>'); 
document.write ('Hello World' + '<br/>'); 
document.write ('Hello World' + '<br/>'); 
document.write ('Hello World' + '<br/>'); 
document.write ('Hello World' + '<br/>'); 
document.write ('Hello World' + '<br/>'); 
document.write ('Hello World' + '<br/>');

for(let i = 0; i < 10; i++) {
document.write('Hello World' +'<br/>' ); 
}



function calCirArea(radius) {
    var x =Math.PI *2*radius
    console.log('The final area is' + 'x' + '.');
}
    calCirArea(15)
    
//Array Literal
//WE assign to Array to a variable
const colors=[`brown`, `pink`,`blue`, `teal`, `red`]
const myAges=[10, 13, 16, 18, 21]
const compNums=[12>12, 9===`nine`, 1==2, `eight`===`EIGHT`, 5>=5]

//JS Keyword build-in JAvascript methods new Array()
var colors=new Array(`brown`,`pink`,`blue`, `teal`, `red`);
var myAges=new Array(10, 13, 16, 18, 21)