
// Ques 
// Your school has the following grading system based upon the marks(M) obtained by a student:

//  If M≤10, the grade will be E
// .If 11≥M≤20, the grade will be D
// .If 21≥M≤30, the grade will be C
// .If 31≥M≤40, the grade will be B
// .If 41≥M≤50, the grade will be A
// .Your friend will enter his marks out of 50, and your task is to print his grades using a switch statement.

// Note: You have to complete findGrades function. No need to take any input.



// input format 
// The first and the only line of the input contains an integer M, representing the marks that your friend will enter in the grading system.


// output format 
// Return the grade obtained by your friend.


function find_grades(a) {
    if(a<=50 && a>40)
    {
      return('A');
    }
    else if(a>30)
    {
      return('B');
    }
    else if(a>20)
    {
      return('C');
    }
    else if(a>10)
    {
      return('D');
    }
    else
    {
      return('E');
    }
}

console.log(find_grades(45));








