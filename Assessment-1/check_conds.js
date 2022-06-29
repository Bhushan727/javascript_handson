

// Ques. 

// You are given two numbers A and  B
// . You need to do the following checks:

// 1. if both are divisible by 10 console true.
// 2. if both are not divisible by 10 console false.
// 3. if one of them only is divisible by 10 console true.
// Use operator to do this.

// Note: You have to complete Check function. No need to take any input.

// Input Format :
// The first liine contains two natural numbers a and b ;


// Output Format
//  Return the required result

// function check(a,b)
// {

//     (a%10===0 && b%10===0)? (return(true)) : (return(false));

// }

function check(a,b)
{
    return(((a%10===0 && b%10===0) || (a%10===0 || b%10===0))? true : false  );
}

console.log(check(26,47));









