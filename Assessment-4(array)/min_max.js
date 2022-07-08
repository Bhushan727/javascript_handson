
// Ques 
// Congratulations on making up to this question. Let us give you a fairly simple array problem to solve. If you know how to iterate through the array, you will easily be able to solve this.
// The problem statement is simple- given 
// N elements, find the minimum and maximum numbers among those elements.

// input format 
// First-line contains N representing the length of the array.The second line contains N space-separated integers.


// output format 
// Return minimum and maximum elements.





function arrayMin(arr) {
    let min=arr[0];
   for(let i=0;i<arr.length;i++)
   {
     if(arr[i]<min)
     {
       min=arr[i];
     }
   }
   return min;
 
 }
 
 function arrayMax(arr) {
  let max=arr[0];
   for(let i=0;i<arr.length;i++)
   {
     if(arr[i]>max)
     {
       max=arr[i];
     }
   }
   return max;
 
 
 }


console.log(arrayMin([3,1,4,6,2,7]));
console.log(arrayMax([3,1,4,6,2,7]));







