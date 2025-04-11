/*
How do you reverse a string?
How do you determine if a string is a palindrome?
How do you calculate the number of numerical digits in a string?
How do you find the count for the occurrence of a particular character in a string?
How do you find the non-matching characters in a string?
How do you find out if the two given strings are anagrams?
How do you calculate the number of vowels and consonants in a string?
How do you total all of the matching integer elements in an array?
How do you reverse an array?
How do you find the maximum element in an array?
How do you sort an array of integers in ascending order?
How do you print a Fibonacci sequence using recursion?
How do you calculate the sum of two integers?
How do you find the average of numbers in a Array?
How do you check if an integer is even or odd?
How do you find the middle element of a Array?
How do you merge two sorted Array?


Loop

for
while
do...while

for of
for in

.forEach
.map
.filter
.reduce
*/

let a = "rohit sharma"; // amrahs tihor

let arr = a.split("");

let arr2 = [];

for(let i = a.length-1; i >= 0; i--)
{
    arr2.push(arr[i])
}

let b = arr2.join("");

// console.log(b)

// nitin

let x = "541DFDRe4er1fertg";
let counter = 0;
for(let i = 0; i <= x.length-1; i++)
{
    if(! isNaN(x[i]))
    {
        counter++;
    }
}

// console.log(counter);


let y = "100";

if(typeof y =="number"){
    // console.log("****")
}
else{
    // console.log("####")

}

let z = "aasrsa";
let obj = {};

/*
    {
        a : 3,
        s : 4
    }
*/