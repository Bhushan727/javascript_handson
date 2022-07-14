
// Ques 

// Complete the function in the editor. You have an object as a parameter. In which you have to delete the rollno property from the object and return the object.

// input format 
// You have to give two inputs one name and the second as rollno separated by new line.

// output format 
// If you have deleted the rollno property in the object then the code will print "True" otherwise "False".



function Check(obj1) {
    delete obj1.rollno;
    return obj1;
}


