//Code 1 - Pete, the baker

//Instructions
/*Pete likes to bake some cakes. 
He has some recipes and ingredients. Unfortunately he is not good in maths. 
Can you help him to find out, how many cakes he could bake considering his recipes?

Write a function cakes(), which takes the recipe (object) and the available 
ingredients (also an object) and returns the maximum number of cakes 
Pete can bake (integer). For simplicity there are no units for the amounts
 (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). 
 Ingredients that are not present in the objects, can be considered as 0.

Examples:

// must return 2
cakes({flour: 500, sugar: 200, eggs: 1}, 
	  {flour: 1200, sugar: 1200, eggs: 5, milk: 200}); 
// must return 0
cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, 
	  {sugar: 500, flour: 2000, milk: 2000});
//Outputs */

//solution 
/*function cakes(recipe, available) {
  const obj1 = Object.assign({}, recipe);
  const obj2 = Object.assign({}, available);
  const keys = Object.keys(obj1);
  const keys1 = Object.keys(obj2);
  let c = Infinity;
  if(!keys.every(x => keys1.includes(x))) return 0;
  keys.forEach(z => {
      if(obj2[z] / obj1[z] <= c) {
        c = obj2[z] / obj1[z];
      }
  });

 return Math.floor(c);
}

console.log(cakes({flour: 500, sugar: 200, eggs: 1}, 
    {flour: 1200, sugar: 1200, eggs: 5, milk: 200}));
console.log(cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, 
    {sugar: 500, flour: 2000, milk: 2000}))*/

/* **************** */

//Is my friend cheating?

/*A friend of mine takes a sequence of numbers from 1 to n (where n > 0).
Within that sequence, he chooses two numbers, a and b.
He says that the product of a and b should be equal to the sum of all numbers in the sequence, excluding a and b.
Given a number n, could you tell me the numbers he excluded from the sequence?
The function takes the parameter: n (n is always strictly greater than 0) and returns an array or a string (depending on the language) of the form:

[(a, b), ...] or [[a, b], ...] or {{a, b}, ...} or or [{a, b}, ...]
with all (a, b) which are the possible removed numbers in the sequence 1 to n.

[(a, b), ...] or [[a, b], ...] or {{a, b}, ...} or ...will be sorted in increasing order of the "a".

It happens that there are several possible (a, b). The function returns an empty array (or an empty string) if no possible numbers are found which will prove that my friend has not told the truth! (Go: in this case return nil).

(See examples of returns for each language in "RUN SAMPLE TESTS")

Examples:
removNb(26) should return [(15, 21), (21, 15)]
or

removNb(26) should return { {15, 21}, {21, 15} }
or

removeNb(26) should return [[15, 21], [21, 15]]
or

removNb(26) should return [ {15, 21}, {21, 15} ]
or

removNb(26) should return "15 21, 21 15"
or

in C:
removNb(26) should return  **an array of pairs {{15, 21}{21, 15}}**
tested by way of strings. 

// Solution
function removeNb (n) {
  let sequence = [];
  let i = 1;
  while(i <= n) {
    sequence.push(i);
    i++;
  }
const sum = (n*(n+1)) / 2;
console.log(sum);
let product = [];
// const sum = sequence.reduce((a, b) => a + b);
// sequence.forEach((a,i, arr) => {
//     console.log(a);
//     return arr.forEach((b, i, arr) => {
//         console.log(b);
//         const sum = arr.reduce((a,b) => a+b);
//         if (a * b === sum - (a + b)) {
//           product.push([a, b]);
//         } 
//     });
//   });

for(let i = 0; i < sequence.length; i++) {
  const a = sequence[i];
  const b = Math.floor((sum - a) / (a + 1));
    if (a * b === sum - (a + b) && b < sequence.length) {
        product.push([a, b]);
    } 
  }

return product;
}

console.log(removeNb(1000003));
console.log(removeNb(100));
*/
/*

The prime numbers are not regularly spaced. For example from 2 to 3 the gap is 1. From 3 to 5 the gap is 2. From 7 to 11 it is 4. Between 2 and 50 we have the following pairs of 2-gaps primes: 3-5, 5-7, 11-13, 17-19, 29-31, 41-43

A prime gap of length n is a run of n-1 consecutive composite numbers between two successive primes (see: http://mathworld.wolfram.com/PrimeGaps.html).

We will write a function gap with parameters:

g (integer >= 2) which indicates the gap we are looking for

m (integer > 2) which gives the start of the search (m inclusive)

n (integer >= m) which gives the end of the search (n inclusive)

In the example above gap(2, 3, 50) will return [3, 5] or (3, 5) or {3, 5} which is the first pair between 3 and 50 with a 2-gap.

So this function should return the first pair of two prime numbers spaced with a gap of g between the limits m, n if these numbers exist otherwise nil or null or None or Nothing (depending on the language).

In C++ return in such a case {0, 0}. In F# return [||]. In Kotlin return []

#Examples: gap(2, 5, 7) --> [5, 7] or (5, 7) or {5, 7}

gap(2, 5, 5) --> nil. In C++ {0, 0}. In F# [||]. In Kotlin return[]`

gap(4, 130, 200) --> [163, 167] or (163, 167) or {163, 167}

([193, 197] is also such a 4-gap primes between 130 and 200 but it's not the first pair)

gap(6,100,110) --> nil or {0, 0} : between 100 and 110 we have 101, 103, 107, 109 but 101-107is not a 6-gap because there is 103in between and 103-109is not a 6-gap because there is 107in between.

Note for Go
For Go: nil slice is expected when there are no gap between m and n. Example: gap(11,30000,100000) --> nil

#Ref https://en.wikipedia.org/wiki/Prime_gap

// Solution 
function gap(g, m, n) {
    // your code
    let pre = null;
    for(let i = m; i < n; i++) {
      if(isPrime(i) && isPrime(i+g)) {
        return [i, i+g];
      }
    }
    // console.log(arr);
    // for(let i = 0; i < arr.length; i++) {
    //   if(arr[i+1] - arr[i] === g) {
    //     return [arr[i], arr[i+1]];
    //   }
    // }

    return null;
}

console.log(gap(2,100,110));
console.log(gap(11,30000,100000));

function isPrime(n) {
  if(n === 2) return true;
  for(let i = 2; i < n; i++) {
    if(n % i === 0) return false;
  }

  return true;
}
*/

 /*********************************************/

// Given a square matrix, calculate the absolute difference between the sums of its diagonals.

// For example, the square matrix  is shown below:

// 1 2 3
// 4 5 6
// 9 8 9  
// The left-to-right diagonal = . The right to left diagonal = . Their absolute difference is .

// Function description

// Complete the  function in the editor below. It must return an integer representing the absolute diagonal difference.

// diagonalDifference takes the following parameter:

// arr: an array of integers .
// Input Format

// The first line contains a single integer, , the number of rows and columns in the matrix . 
// Each of the next  lines describes a row, , and consists of  space-separated integers .

// Constraints

// Output Format

// Print the absolute difference between the sums of the matrix's two diagonals as a single integer.

// Sample Input

// 3
// 11 2 4
// 4 5 6
// 10 8 -12
// Sample Output

// 15
// Explanation

// The primary diagonal is:

// 11
//    5
//      -12
// Sum across the primary diagonal: 11 + 5 - 12 = 4

// The secondary diagonal is:

//      4
//    5
// 10
// Sum across the secondary diagonal: 4 + 5 + 10 = 19 
// Difference: |4 - 19| = 15

// Note: |x| is the absolute value of x



//solution


// Complete the diagonalDifference function below.
// function diagonalDifference(arr) {

//   let firstDiognal = 0;
//   let secondDiognal = 0;
//   for(let i = 0; i < arr.length; i++) {
//         //console.log(arr[i][i]);
//         firstDiognal += arr[i][i];
//        console.log(arr[i][arr[i].length - (i+1)])
//        secondDiognal += arr[i][arr[i].length - (i+1)];
//   }


// console.log(firstDiognal, secondDiognal);

// return Math.abs(firstDiognal - secondDiognal);

// }
// console.log(diagonalDifference([
//     [-1, 1, -7, -8],
//     [-10, -8, -5, -2],
//    [0, 9, 7, -1],
//      [4, 4, -2, 1]
//   ]));
// console.log('*************************');
// console.log(diagonalDifference([
//   [6, 6, 7, -10, 9, -3, 8, 9, -1],
//   [9, 7, -10, 6, 4, 1, 6, 1, 1],
//   [-1, -2, 4, -6, 1, -4, -6, 3, 9],
//   [-8, 7, 6, -1, -6, -6, 6, -7, 2],
//   [-10, -4, 9, 1, -7, 8, -5, 3, -5],
//   [-8, -3, -4, 2, -3, 7, -5, 1, -5],
//   [-2, -7, -4, 8, 3, -1, 8, 2, 3],
//   [-3, 4, 6, -7, -7, -8, -3, 9, -6],
//   [-2, 0, 5, 4, 4, 4, -3, 3, 0]
//   ]));

 /*********************************************/

// Given an array of integers, calculate the fractions of its elements that are positive, negative, and are zeros. Print the decimal value of each fraction on a new line.

// Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to  are acceptable.

// For example, given the array  there are  elements, two positive, two negative and one zero. Their ratios would be ,  and . It should be printed as

// 0.400000
// 0.400000
// 0.200000
// Function Description

// Complete the plusMinus function in the editor below. It should print out the ratio of positive, negative and zero items in the array, each on a separate line rounded to six decimals.

// plusMinus has the following parameter(s):

// arr: an array of integers
// Input Format

// The first line contains an integer, , denoting the size of the array. 
// The second line contains  space-separated integers describing an array of numbers .

// Constraints

 

// Output Format

// You must print the following  lines:

// A decimal representing of the fraction of positive numbers in the array compared to its size.
// A decimal representing of the fraction of negative numbers in the array compared to its size.
// A decimal representing of the fraction of zeros in the array compared to its size.
// Sample Input

// 6
// -4 3 -9 0 4 1         
// Sample Output

// 0.500000
// 0.333333
// 0.166667
// Explanation

// There are  positive numbers,  negative numbers, and  zero in the array. 
// The proportions of occurrence are positive: , negative:  and zeros: 

//solution 

// Complete the plusMinus function below.
// function plusMinus(arr) {

//   let pos = 0, neg = 0, zero = 0;

//   arr.forEach(num => {
//     if(num < 0) {
//       neg += 1;
//     } else if( num === 0) {
//       zero += 1;
//     } else {
//       pos += 1;
//     }
//   })

// console.log((pos/arr.length).toFixed(6));
// console.log((neg/arr.length).toFixed(6));
// console.log((zero/arr.length).toFixed(6));
// }

// console.log(plusMinus([-4, 3, -9, 0, 4, 1]));

 /*********************************************/

// Consider a staircase of size :

//    #
//   ##
//  ###
// ####
// Observe that its base and height are both equal to , and the image is drawn using # symbols and spaces. The last line is not preceded by any spaces.

// Write a program that prints a staircase of size .

// Function Description

// Complete the staircase function in the editor below. It should print a staircase as described above.

// staircase has the following parameter(s):

// n: an integer
// Input Format

// A single integer, , denoting the size of the staircase.

// Constraints

//  .

// Output Format

// Print a staircase of size  using # symbols and spaces.

// Note: The last line must have  spaces in it.

// Sample Input

// 6 
// Sample Output

//      #
//     ##
//    ###
//   ####
//  #####
// ######
// Explanation

// The staircase is right-aligned, composed of # symbols and spaces, and has a height and width of .

//Solution


// Complete the staircase function below.
// function staircase(n) {
// let str = [];
// for(let i = 0; i < n; i++) {
//    for(let x = 0; x < (n - (i+1)); x++) {
//       str.push(' ');
//   }
//   for(let j = 0; j <= i; j++) {
//    str.push('#');
//   }
//   str.push('\n');
// }
// console.log(str.join(''));
// }
// staircase(4);

 /*********************************************/

// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

// For example, . Our minimum sum is  and our maximum sum is . We would print

// 16 24
// Function Description

// Complete the miniMaxSum function in the editor below. It should print two space-separated integers on one line: the minimum sum and the maximum sum of  of  elements.

// miniMaxSum has the following parameter(s):

// arr: an array of  integers
// Input Format

// A single line of five space-separated integers.

// Constraints


// Output Format

// Print two space-separated long integers denoting the respective minimum and maximum values that can be calculated by summing exactly four of the five integers. (The output can be greater than a 32 bit integer.)

// Sample Input

// 1 2 3 4 5
// Sample Output

// 10 14
// Explanation

// Our initial numbers are , , , , and . We can calculate the following sums using four of the five integers:

// If we sum everything except , our sum is .
// If we sum everything except , our sum is .
// If we sum everything except , our sum is .
// If we sum everything except , our sum is .
// If we sum everything except , our sum is .
// Hints: Beware of integer overflow! Use 64-bit Integer.

// Need help to get started? Try the Solve Me First problem

//Solution

// function miniMaxSum(arr) {

//     arr.sort((a,b) => a-b);
//     let miniSum = 0,
//         maxSum = 0;
//         arr.forEach((num, i, arr) => {
//             if(i < arr.length - 1) {
//               miniSum += num;
//             } 

//             if(i > 0 ) {
//               maxSum += num;
//             }
//         })
//         console.log(miniSum, maxSum);
//     console.log(arr);
// }

// miniMaxSum([1,2,3,4,5]);
// miniMaxSum([2,3,5,4,9,10]);

/************************************/

// We define a magic square to be an  matrix of distinct positive integers from  to  where the sum of any row, column, or diagonal of length  is always equal to the same number: the magic constant.

// You will be given a  matrix  of integers in the inclusive range . We can convert any digit  to any other digit  in the range  at cost of . Given , convert it into a magic square at minimal cost. Print this cost on a new line.

// Note: The resulting magic square must contain distinct integers in the inclusive range .

// For example, we start with the following matrix :

// 5 3 4
// 1 5 8
// 6 4 2
// We can convert it to the following magic square:

// 8 3 4
// 1 5 9
// 6 7 2
// This took three replacements at a cost of .

// Function Description

// Complete the formingMagicSquare function in the editor below. It should return an integer that represents the minimal total cost of converting the input square to a magic square.

// formingMagicSquare has the following parameter(s):

// s: a  array of integers
// Input Format

// Each of the lines contains three space-separated integers of row .

// Constraints

// Output Format

// Print an integer denoting the minimum cost of turning matrix  into a magic square.

// Sample Input 0

// 4 9 2
// 3 5 7
// 8 1 5
// Sample Output 0

// 1
// Explanation 0

// If we change the bottom right value, , from  to  at a cost of ,  becomes a magic square at the minimum possible cost.

// Sample Input 1

// 4 8 2
// 4 5 7
// 6 1 6
// Sample Output 1

// 4
// Explanation 1

// Using 0-based indexing, if we make

// -> at a cost of 
// -> at a cost of 
// -> at a cost of ,
// then the total cost will be .

//solution

// // Complete the formingMagicSquare function below.
// function formingMagicSquare(s) {
//   const l = s.length;
//   const magicConst = (l*(l*l + 1)) / 2;
//   console.log(magicConst);
//   let arr = [];
//   s.forEach(el => {
//     console.log(el);
//     const sum = el.reduce((a,b) => a + b);
//     console.log(sum, magicConst);
//     if(sum < magicConst || sum > magicConst) {
//       arr.push(Math.abs(Math.abs(sum) - magicConst));
//     }
//   });
//   console.log(arr);
//   return arr.reduce((a, b) => a + b);
// }

// console.log(formingMagicSquare([
//   [4, 8, 2],
//   [4, 5, 7],
//   [6, 1, 6]
//   ]));
// console.log('****************************');
// console.log(formingMagicSquare([
//     [4, 9, 2],
//     [3, 5, 7],
//     [8, 1, 5]
//   ]));
// console.log('****************************');
// console.log(formingMagicSquare([
//     [5, 3, 4],
//     [1, 5, 8],
//     [6, 4, 2]
//   ]));


// Discussions
// Given an integer 'n' , print "hello world" 'n' number of times separated by '-' character.
// Input Format

// Integer n

// Output Format

// "HelloWorld" n times separated by ' - '

// Sample Input

// 2

// Sample Output

// HelloWorld-HelloWorld

// Explanation

//Since the input is 2 , I print HelloWorld 2 times separated by ' - '

//Solution

// function processData(input) {
//     let str = '';
//     //Enter your code here
//     for(let i = 0; i < input; i++) {
//        str += 'HelloWorld-';
//     }
//     str = str.slice(0,-1);
//     console.log(str);
// } 

// processData(4);

// function v(arr, k) {

//     for(let i = 0; i < arr.length; i++) {
//       if(arr[i] === k) {
//         return console.log('YES')
//       }
//     }

//     return console.log('NO');
// }

// v([1,2,3,4,5,1], 3);

// function oddNumbers(l, r) {
//     let arr = [];
//     for (let i = l; i <= r; i++) {
//   if(i % 2 !== 0) {
//    arr.push(i);
//   }
//     }
//     return arr.join('\n');
// }

// console.log(oddNumbers(2, 5));


/*************/

//Arrays: Left Rotation

// function rotLeft(a, d) {

// let i = 0;
// while(i < d) {
//   a.push(a.shift());
//   i++;
// }

// return a;
// }

// console.log(rotLeft([1,2,3,4,5], 4))

/****************************/

//New Year Chaos 1




// function minimumBribes(q) {
//   let bribe = 0;
//   let chaotic = false;
//   const l = q.length;

//   for(let i = 0; i < l; i++) {
//     console.log(i, q[i]);
//     console.log('1.|**********|');
//     if(q[i] - (i + 1) > 2) {
//       alert("I am in");
//       chaotic = true;
//       break;
//     }
//     console.log('************************************');
//     console.log(q[i]-1-1);
//     console.log('************************************');
//     for(let j = Math.max(0, q[i]-1-1); j < i; j++) {
//       console.log(j);
//       console.log('2.|**********|');
//       console.log(q[j], q[i]);
//       if(q[j] > q[i]) bribe++;
//       console.log('bibe-------->|**********|');
//       console.log(bribe);

//     }
//     console.log('Iteration endddddddddddddddd');
//   }

//   if(chaotic) {
//     console.log('Too chaotic');
//   } else {
//     console.log(bribe);
//   }
// }

// //minimumBribes([1,2,3,4,5]);
// minimumBribes([2,1,5,3,4]);

//

// function minimumSwaps(arr) {
//   let swaps = 0;
  
//  for(let i = 0; i < arr.length - 1; i++) {
//     if(arr[i] > arr[i + 1]) {
//       console.log(arr[i], arr[i + 1]);
//       let x = arr[i];
//       console.log(x);
//       arr[i] = arr[i + 1];
//       arr[i + 1] = x;
//       console.log(arr[i], arr[i + 1]);
//       swaps++;
//     }
//  }
// console.log(arr);
// return console.log(swaps);
// }

// minimumSwaps([7, 1, 3, 2, 4, 5, 6])

// function minimumSwaps(arr) {
//   let swap = 0;

//   for(let i = 0; i < arr.length; i++) {
//     if(i+1 != arr[i]) {
//       let t = i;
//       while(arr[t] != i + 1) {
//           t++;
//       }

//       const temp = arr[t];
//       arr[t] = arr[i];
//       arr[i] = temp;
//       swap++;
//     }
//   }

//   return console.log(swap);
// }

// minimumSwaps([7, 1, 3, 2, 4, 5, 6])

/***********************/
function buildSubsequences(s) {
    // Write your code here
    let arr2 = [];
    //console.log(arr);
    for (let i = 0; i < s.length; i++) {
      //arr2.push(s[i]);
        for (let j = i + 1; j <= s.length; j++) {
            arr2.push(s.slice(i, j));
        }
    }

   return arr2.sort();
}

console.log(buildSubsequences('gkak'));
/******************************************/
