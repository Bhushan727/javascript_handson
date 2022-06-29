

// Shyam has got his marks in three subjects as A, B, and C (out of 100).Write a program to calculate his total marks and his average.


// Note: You have to complete Sum and Average functions. No need to take any input.

// input format 
// The input contains three numbers 
// A, B and C.

// output format
// Return the required result.


function sum(a,b,c) {
    return(a+b+c);
}

function avg(a,b,c) {
    return((a+b+c)/3);
}

console.log("sum = "+sum(70,60,85));
console.log("average = "+avg(70,60,85));
