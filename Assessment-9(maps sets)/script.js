
console.log("Working ");

//Ques 

// Problem:
// You are given a string (STR) of length N, consisting of only the lower case English alphabet.
// Your task is to remove all the duplicate occurrences of characters in the string.

// Input:
// abcadeecfb

// Output:
// abcdef

 

function setUnique(cont)
{
    let uniq = [...new Set(cont)];
    return uniq.join('');
}


let stringS = "abcdeeecfb";
let newUnique = setUnique(stringS);

console.log(newUnique);


// Ques

// Problem:
// You are given a string (STR) of length N, you have to print the count of all alphabet.(using maps)

// Input:
// abcadeecfb

// Output:
// a=2
// b=2
// c=2
// d=1
// e=2
// f=1

function countChrOccurence (str) {
    let charMap = new Map();
    const count = 0;
     for (const key of str) {
      charMap.set(key,count); // initialize every character with 0. this would make charMap to be 'h'=> 0, 'e' => 0, 'l' => 0, 
     }
   
     for (const key of str) {
       let count = charMap.get(key);
       charMap.set(key, count + 1);
     }
   // 'h' => 1, 'e' => 1, 'l' => 2, 'o' => 1
   
     for (const [key,value] of charMap) {
       console.log(key,value);
     }
   // ['h',1],['e',1],['l',2],['o',1]
   }  

countChrOccurence('abcadeecfb');















