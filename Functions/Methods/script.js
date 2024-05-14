// function myFunction(){
//     console.log("welcome");
//     console.log("javaScript");
// }
// myFunction();

// function myFunction(msg){
//     console.log(msg,"i'm here");
    
// }
// myFunction('hello');


// function sum(x,y){
//    s = x+y;
//    return s;
// }
// // sum(10,20);
// let v= sum(10,2);
// console.log(v);

//Arrow Function

// const sum = (a,b) => {
//     console.log(a+b);
// }

// const mul = (a,b) => {
//     return a*b;
// }

// const print = () => {
//     console.log("hello");
// }

//Practice

// function countVowels(x){
//     let count=0;
//   for (let i of x)
//     {
//          if(i==='a'||i==='e'||i==='i'||i==='o'||i==='u'){
//             ++count;
//         }
        
//     }
// return count;
// }


// const countVowels = (str) =>{
//     let count = 0;
//     for(const i of str){
//         if(i==='a'||i==='e'||i==='i'||i==='o'||i==='u')
//         {
//             count++;
//         }
//     }
//          return count;
// }



//forEach loop

// let arr = ['acjhdchjb','fkhfhjw','fewhfhwfh'];

// arr.forEach(function printVal(val,index,a) {
//     console.log(val,index,a);
// });

// arr.forEach((val,index,array) => {                   //Arrow Function
//     console.log(val,index,array);
// });

//OR  
// arr.forEach((val,index,array) => {
//     console.log(index,arr);
// });


//Practice

// let arr = [21,52,6   3,42,10];

// arr.forEach((val) => {
// console.log(val*val);
// });

//OR

// let calcSquare = (val) => {
//     console.log(val*val);
// }
// arr.forEach(calcSquare);

//OR

// function calc(x){
//     console.log(x*x);
// }
// arr.forEach(calc);


//MAP

// let num = [25,85,75,30,65];

// let newArr = num.map((val) =>{
//     return val*2;
// });

// console.log(newArr);


//Filter
 
// let arr = [10,50,23,20];

// let newArr = arr.map((val) =>{                 //returns the boolean value for which the condition is true
//         return val%2===0;
// });

// let newArr = arr.filter((val) => {          //returns the value for which the condition is true
//     return val%2 ===0;
// });


// let arr = [1,2,3,4,5,6,7];

// let s = arr.filter((val) => {
//     return val>3;
// })
// console.log(s);


//Reduce

// let arr = [1,2,3,4];

// const output = arr.reduce((prev, curr) =>{
//     return prev + curr;
// })

// console.log(output);


// let arr = [11,2,39,4];

// const output = arr.reduce((prev, curr) =>{            //to print the largest num of an array
//     return prev>curr ? prev : curr;
// })

// console.log(output);



//PRACTICE 
//marks > 90

// let marks = [10,90,58,96,20,98,95];

// const score = marks.filter((val) => {
//     return val>90;
// });
// console.log(score);


//array from 1 to n

let n = prompt("enter a number");
let arr = [];
for(let i = 1;i<=n;i++){
    arr[i-1] = i;
}
console.log(arr);

let arr1 = arr.reduce((res,curr) => {
  return res + curr;
});
console.log(arr1);

let prod = arr.reduce((res, curr) => {
  return res * curr;
});

console.log(prod);