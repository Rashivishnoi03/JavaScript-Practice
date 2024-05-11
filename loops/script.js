// for(let i = 1; i<=100; i++){
//     console.log("Loop started");
// }
// console.log("loop ended");

//FOR OF LOOP : 

// let str = "Vis hnoi";
// let size = 0;
// for (let i of str) {
//     console.log("i = ", i);
//     size++;
// }
// console.log("size of string is : ",size);


//FOR IN LOOP : 

// let student = {
//     name: "Rashi",
//     age:23,
//     isPass:true,
// };
 
// for (let key in student) {
    
//     console.log("key=", key, "value=",student[key]);
// }

//Practice Q1:


// for(let num=0;num<=100;num++)
// {
//    if(num%2 === 0){
//     console.log("even numbers are : ",num);
//    }
// }


//Practice Q2 : 

let gameNum = 30;

let userNum = prompt("Guess the game number : ");


while(userNum != gameNum) {

    userNum = prompt("You entered wrong number.Guess again : ");
}

console.log("Congatulations you entered the right number");