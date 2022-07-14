
// Ques 

// Complete the function in the editor. In which you are given an object as a parameter. You have to return "false" if there is no parameter in the object otherwise return "true".

// input format 
// 0 as a means no variable in an object and 1 means there are variables in an object.

// output format 
// Return "false" if there is no parameter in the object otherwise return "true".


function Check(obj1) {
    if(Object.entries(obj1).length === 0)
    {
      return "false";
    }
    else{
      return "true";
    }
 }
 












