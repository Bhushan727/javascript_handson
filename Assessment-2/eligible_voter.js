
// You are given an integer 
// A, denoting the age of a person, and your task is to determine whether he/she is eligible to vote or not.

// Note: You have to complete isEligible function. No need to take any input


// input format 
// The first and the only line of the input contains an integer A, representing the age of a person.

// output format 
// If the person is eligible to vote, return "Eligible for Voting" otherwise, return "Not Eligible for Voting" (without quotes).


function eligible_voter(a) {
    if(a>=18)
    {
      return("Eligible for Voting");
    }
    else
    {
      return("Not Eligible for Voting");
    }
}

console.log(eligible_voter(17));;














