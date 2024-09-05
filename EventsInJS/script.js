let btn = document.querySelector('button');
// btn.onclick = (evt) => {
    // console.log('Button clicked');
    // let a=8;
    // a++;
    // console.log(a);
 
//     console.log(evt);
//   console.log(evt.type);
//   console.log(evt.target);
//   console.log(evt.clientX , evt.clientY);

// };

btn.addEventListener('click',(e)=>{
    console.log('button was clicked');
    // console.log(e.type);
});
btn.addEventListener('click',()=>{
    console.log('button was clicked - handler 2');
});
const handler =()=>{
    console.log('button was clicked - handler 3');
}
btn.addEventListener('click',handler);
btn.addEventListener('click',()=>{
    console.log('button was clicked - handler 4');
});

btn.removeEventListener('click',handler);

// let div = document.querySelector('div');
// div.onmouseover = () => {
//     console.log('inside div');
// };

//Question

let toggleButton = document.querySelector('.change');
let currMode = "light";
let body = document.querySelector('body');
const btn1 = () => {
   if(currMode == "light"){
    currMode = "dark";
    // document.querySelector('body').style.backgroundColor = "black";
    // document.querySelector('.change').style.backgroundColor = 'yellow'

     body.classList.add('dark');
     body.classList.remove('light');
   }
   else{
    currMode = "light";
    // document.querySelector('body').style.backgroundColor = "white";
    
    body.classList.add('light');
    body.classList.remove('dark');

   }
};
toggleButton.addEventListener('click',btn1);

let btnHover = document.querySelector('.btn');
const btn2 = () => {
    document.querySelector('div').style.backgroundColor = 'green';
    document.querySelector('div').innerHTML = "<i>Hello</i>";
};
btnHover.addEventListener('mouseover',btn2);