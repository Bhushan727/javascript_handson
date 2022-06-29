
// Ques 
// You are given 3 distinct integers X,Y, and Z, and your task is to find and return the second smallest integer among the three provided integers.

// Note: You have to complete findSndSmallest function. No need to take any input.


// input format 
// The first and the only line of the input contains three space-separated integers 
// X, Y, and Z, denoting the integers among which you have to find the second smallest element.

// output format 
// Return the second smallest integer among the three integers given to you.


function second_small(x,y,z) {
    if((x>y && x<z)||(x>z && x<y))
    {
      return(x);
    }
    if((y>x && y<z)||(y>z && y<x))
    {
      return(y);
    }
    if((z>x && z<y)||(z>y && z<x))
    {
      return(x);
    }
}

console.log(second_small(6,3,7));























