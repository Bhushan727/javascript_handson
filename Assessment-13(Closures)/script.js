

// Ques 1
     function countered(){
    var counter = 0;

    function IncreaseCounter() {
        return counter += 1;
    };

    return IncreaseCounter;
}

var counter = countered();
// alert(counter());
// alert(counter());
// alert(counter());
// alert(counter());

// prints 1,2,3,4 

// Ques 2
let count = 0;
(function immediate() {
  if (count === 0) {
    let count = 1 ;
    console.log(count); // What is logged?
  }
  console.log(count); // What is logged?
})();

//output will be 1 
//output will be 0

// Ques 3
for (var i = 0; i < 3; i++) {
    setTimeout(function log() {
      console.log(i); // What is logged?
    }, 1000);
  }
 
//   output is 3 for 3 times


// Ques 4

// Write a code to calculate area of a rectangle using inner function. In this case outer function should accept parameter length and inner function should accept parameter breadth.
// 
 
const outre = (length) => {
  return function(breadth)
  {
    return length*breadth;
  }
}

const area = outre(3);
console.log(area(4));

// Ques 5
// Take a variable in outer function and create an inner function to increase the counter every time it is called

function outer()
{
  let count = 0;
  return function()
  {
    count++;
    console.log(count);
  }
} 

const func = outer();
func();

// Ques 6
// Print Output

var a = 12;
(function () {
  alert(a);
})();


// Ques 7
// var a = 10;
var x = (function () {
  var a = 12;
  return function () {
    alert(a);
  };
})();
x();

// Ques 8
// var globalVar = "xyz";

var globalVar = "xyz";

(function outerFunc(outerArg) {
    var outerVar = 'a';
    
    (function innerFunc(innerArg) {
    var innerVar = 'b';
    
    console.log(
        "outerArg = " + outerArg + "\n" +
        "innerArg = " + innerArg + "\n" +
        "outerVar = " + outerVar + "\n" +
        "innerVar = " + innerVar + "\n" +
        "globalVar = " + globalVar);
    
    })(456);
})(123);


















