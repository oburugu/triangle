function triangleTracker(){
var a= parseInt(prompt("enter the length"));
var b= parseInt(prompt("enter the height"));
var c=parseInt(prompt("enter the hypotenuse"));
if (isNan(a)===true || isNan(b)===true || isNan(c)===true || a<=0 || b<=0 || c<=0) {
alert("input a valid number")
}
else if ((a===b) &&(b==c)) {
alert("This is an equilateral triangle");
}
else if ((a===b) || (b===c) || (a===c)) {
alert("This is an isosceles triangle");
} else if((a+b) <=c || (b+c) <=a || (a+c) <=b) {
alert("This is not a triangle")
} else {
alert ("scalene")
}
}
