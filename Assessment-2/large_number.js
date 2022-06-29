
// Take three numbers and print the largest number among them if all of three are same print  −1
// .

// Note: You have to complete Max_out_of_three. No need to take any input.


// input format 
// The input contains three numbers A, B and C.


// output format 
// Return the maximum number out of the three numbers as result.



function large_num(a,b,c) {
    if(a==b && b==c)
    {
      return(-1);
    }
   else if(a>b)
    {
      if(a>c)
      {
        return(a);
      }
      else
      {
        return(c);
      }
    }
    else if(b>c)
    {
      return(b);
    }
    else
    {
      return(c);
    }
}


console.log(large_num(4,5,3));












