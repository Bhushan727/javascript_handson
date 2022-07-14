
// Ques 

// Complete the function in the editor. In which you are given an object and a digit N as a parameter.In the object there are two variable id and houseno are defined as a data member. You have to multiply both the data members with a given digit N.

// input format 
// There are three line in input, where the first one contains N,
// And the next two lines contains the first data member i.e. id and second data member i.e. houseno.

// output format 
// Just complete the function, No need to print anything.




function Check(a,obj1) {
    // for(let i=0;i<Object.entries(obj1).length;i++)
    // {
    //   Object.values(obj1)[i]*=a;
    // }
    
   obj1.id = obj1.id *a;
   obj1.houseno = obj1.houseno *a;
   
    return obj1;
  }
  








