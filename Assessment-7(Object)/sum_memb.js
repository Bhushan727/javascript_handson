
// Ques 

// You are given a function Check which takes an object Obj as a parameter.Your taks is to find out the sum of the three data members of the object. The data members are named as p1, p2, p3.

// Note: You have to complete Check function. No need to take any input.

// input format 
// The input contains three number 
// p1, p2 and p3, which represents the data members of the object.

// output format 
// Return the sum of all members of the given object.


function Check(obj1) {
  
    let  sum = Object.values(obj1).reduce((acc,curr) => acc+=curr,0 )
    return sum;
  }
  

