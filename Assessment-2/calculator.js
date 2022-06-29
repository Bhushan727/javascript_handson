
// Write a program to make a simple calculator using switch statement that takes operator and two numbers from user and print the result after operation.

// Note: You have to complete Calculator. No need to take any input

// input format
// The input contains a operator symbol 
// (+,−,∗,/) along with two natural numbers B and C.


// output format 
// Return the required result.


function calculator(a,b,c) {
    switch (a) {
        case '+':
            return(b+c);
            break;

        case '-':
            return(b-c);
            break;

        case '*':
            return(b*c);
            break;

        case '/':
            return(b/c);
            break;
    
        default:
            console.log("invalid entry");
            break;
    }
}

console.log(calculator('*',6,3));


