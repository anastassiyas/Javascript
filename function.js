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


    
