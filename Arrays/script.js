// let marks = [85,96,52,41,78,56];

// console.log(marks);
// console.log(marks.length);   //property

//looping over an array

// let arr = ["rashi", 'ccdcdc',"effc","vddvdvv"];

// for(let i = 0;i<arr.length;i++){
//     console.log(arr[i]);
// }

// for(let i of arr){
//     console.log(i);
//     console.log(i.toUpperCase());
// }

// let student_marks = [85,97,44,37,76,60];
// let sum = 0;
// for(let i = 0;i<student_marks.length;i++)
// {
//     sum = sum + student_marks[i];
// }
// console.log(sum);

// for(let i of student_marks){
//     sum = sum + i;
// }
// let avg_marks = sum/student_marks.length;
// console.log(`average marks of the class = ${avg_marks}`);

// let items = [250,645,300,900,50];
// let offer = 0;
// let index=0;
// for(let val of items){
//     offer = val/10;
//     val = val-offer;
//     console.log(`value at ${index} = ${val}` );
//     index++;
// }

//Array Methods

let food_items = ["potato","tomato","onion","apple"];

food_items.push('rashi','aashi');

console.log(food_items);
// let deletedItem = food_items.pop();
console.log(food_items);
// console.log("deleted",deletedItem);

console.log(food_items.toString());