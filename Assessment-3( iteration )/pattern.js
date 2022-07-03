

// Ques 

// Write a program which ask user for no of lines and print a pattern using an asterik .

// Note: You have to complete Print_pattern. No need to take any input.


// input format 
// The input contains a single number N.


// output format 
// Print the required pattern.



function pattern(n) {
    for(let i=0;i<n;i++)
  {
    for(let j=0;j<=i;j++)
    {
    //   process.stdout.write('*');
        console.log('*');
    }
    console.log('');
  }
}


pattern(5);

























