//4. The area of a circle is πr² where r is the circle’s radius.
// Provide a JavaScript expression to return a circle’s area where the radius has been
// stored in a variable named radius.
// function to calculate the area of circle

function circle(radius) {
var radius = radius;
// area method
this.area = function () {
return Math.PI * radius * radius;
};
}
var c = new circle(3);
console.log('Area =', c.area().toFixed(2));

//5.  Provide code to create a function named calcCirArea() that returns the area 
//of a  circle for a given radius.

function calcCirArea(radius) { 
return 2 * Math.PI * radius;
}   
console.log(Math.PI);
console.log(calcCirArea(10));

//6. Provide the command to call the calCirArea() function using a value of 15
// for the circle’s radius and storing the result in a variable named finalArea.

function calCirArea(radius) {
var finalArea = (Math.PI * radius) * 2;
return finalArea;
} 
var radius =15;
var finalArea = calCirArea(radius);
var z2 = calCirArea(Math.PI * radius) * 2;;
 

console.log("The final area is" + " " + finalArea );

//8
function init() {
alert('Hi');  
}
  
setTimeout(init, 5000);
//9
function init() {
alert('Hi');  
}
  
setInterval(init, 5000); 

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



//Create an Array called "donuts" that list 7-10 different items
var donuts=[`chocolate`, `glazed`, `strawberry`, `cinnamon twist`, `jelly`, `blueberry`,
 `sprinkle`, `cruller`];
//1 Using a loop, literate through this array and console.log all the donuts
for(let i = 0; i < donuts.length; i++){
    console.log(donuts);
 } 
//2 Write the command to remove the first donut fron the array
//donuts=[`chocolate`, `glazed`, `strawberry`, `cinnamon twist`, `jelly`, `blueberry`,
 //`sprinkle`, `cruller`];
donuts.shift();
console.log(donuts);
//3 Write the command to remove the last donuts from the array
donuts.pop();
console.log(donuts);
//4 Write the command to add a new donut "lime zest" to the front of the array
donuts.unshift(`lime zest`);
console.log(donuts);
//5 Write the command to add another donut "lemon pie" to the end of the array
donuts.push(`lemon pie`);
console.log(donuts);
//6 Use either the join() or toString() method to convert an array to a string.
[`chocolate`, `glazed`, `strawberry`, `cinnamon twist`, `jelly`, `blueberry`,
 `sprinkle`, `cruller`].toString();
[`chocolate`, `glazed`, `strawberry`, `cinnamon twist`, `jelly`, `blueberry`,
 `sprinkle`, `cruller`].join();
  
//7 Write the command to make a copy of the array using slice. The copy should NOT include two donuts.
donuts.slice(2);
//8 Write the command that gives the indexOf where "chocolate" is located.
donuts.indexOf("chocolate");
//9 Write the command that gives the indexOf where "glazed" is located (You may get a negative number).
donuts.indexOf("glazed");
//10 **Using the splice method, remove one donut from the array and add another.
donuts.splice(2, "caramel");
//11 **Create a new variable called withSyed and set it equal to the people array concatenated with the string of "Bob".
var withSyed = donuts.concat ("Bob");
console.log(donuts.concat("Bob"));
//12 **Create a function called getdonuts() that will display all the donuts in your array and display on your page.
function getdonuts(){
document.getElementById("demo").innerHTML = donuts;
}







    
    

