//Ques 1
// Create one function with zero parameter having a console statement;

function noParam()
{
    console.log("function with no parameter");
}
noParam();

//Ques 2
//  Create one function which takes two values as a parameter and print the sum of them as "Sum of 3, 4 is 7"

function sum(a,b,c)
{
    console.log(a+b+c);
}
sum(3,4,7);


// Ques 3
// Create one arrow function

const arrow = () => {
    console.log("this is an arrow function");
}

arrow();

// Ques 4
// Print output: 
var x = 21;
var girl = function () {
    console.log(x);
    var x = 20;
};
girl ();

// Output will be undefined ,because hoisting is happening here and second initialization is taking priority

// Ques 5
// Print output: 
var x = 21;
girl1 ();
console.log(x)
function girl1() {
    console.log(x);
    var x = 20;
};

// Undefined in line 46


// Ques 6
// Print output

// var x = 21;
// a();
// b();
// console.log(a);
// a = function() {
    
//    x = 20;
//   console.log(x);
// };
// b = function() {
    
//     x = 40;
//    console.log(x);
// };

// Output - Not defined for functions coz, hoisting performs for only normal functions

 
// Ques 7
// Write a function that accepts parameter n and returns factorial of n

 const factorial = (n) => {
    let fact = 1;
    if(n<=0)
    {
        console.log("invalid Number");
    }
    else
    {
       
        for(let i=n ; i>0; i--)
        {
            fact *= i;
        }
    }
    return fact;
 }


console.log(factorial(5));












