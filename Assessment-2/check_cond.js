
// Write a program that takes a number and prints whether the number is divisible by 6 and 9 or not.

// Note: You have to complete Check_divisibility. No need to take any input


// input format 
// The input contains a single number N.

// output format 
// If the condition is satisfied return "Divisible by both" (without quotes) else return "Not Divisible by both" (without quotes). 


function check_conds(n) {
    if(n%6===0 && n%9===0)
    {
      return("Divisible by both");
    }
    else{
      return("Not divisible by both");
    }
}

console.log(check_conds(54));








