
// Ques 
// You are given an array A containing the maths marks of students in your class, and your task is to determine if all the students pass in your class or not. A student is declared pass if his maths marks are greater than or equal to 32If all the students pass in your class, return "YES" (without quotes); otherwise, return "NO" (without quotes).
// Note: You have to complete isAllPass function. No need to take any input.


// input format 
// The first line of the input contains an integer N, denoting the number of students in your class.The second line of the input contains N space-separated integers, denoting the maths marks of students in your class.


// output format
// Return "YES" (without quotes) if all the students pass in your class; otherwise, print "NO" (without quotes).



const pass_fail = (n,arr) =>{
    let count=0;
    for(const values of arr)
    {
      if(values<32)
      {
        count++;
      }
    }
    if(count==0)
    {
      return "YES"
    }
    else
    {
      return "NO"
    }
}


console.log(pass_fail(7,[13,89,45,98,67,45,54]));






