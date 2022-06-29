
// Ques 
// Write a program takes takes three angles and checks whether the triangle is acute or obtuse.

// Note: You have to complete Triangle_Check. No need to take any input


// input format 
// The input contains three numbers A, B and C which denotes the angles of a triangle.

// output format 
// Return the required result.



function check_triangle(a,b,c) {
    let angle;
    if(a>b)
     {
       if(a>c)
       {
         angle=a;
       }
       else
       {
         angle=c;
       }
     }
     else if(b>c)
     {
       angle=b;
     }
     else
     {
       angle=c;
     }
     
     if(angle<90)
     {
       return('acute');
     }
     else
     {
       return('obtuse');
     }
     
}

console.log(check_triangle(60,100,20));




















