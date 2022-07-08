
// Ques 

// You are provided an array of integers and you have to increment all array elements by 1 and then print whole array.

// You have to complete Inc_Arr. No need to take any input.

// input format 
// The input contains a single number N, then N array elements as input.

// output format 
// Print the required answer in the function itself.



const increment = (array,n) => {
    let new_array=(array.map(item => item+1));
  for(const values of new_array)
  {
    console.log(values);
  }
}

increment([1,2,3,4,5],5);










