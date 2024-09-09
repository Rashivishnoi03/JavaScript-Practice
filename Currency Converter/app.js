const amt = document.querySelector(".amount input");
const BASE_URL = "https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_jcVzU6jELRJffomTsqhOHwUpfzX93vvgiN8wmMyf";
const btn = document.querySelector("form button");
const dropdowns = document.querySelectorAll(".dropdown select");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");

for(let select of dropdowns){
    for (currCode in countryList) {
            let newOption = document.createElement("option");
            newOption.innerText = currCode;
            newOption.value = currCode;
            if(select.name === "from" && currCode === "USD"){
                newOption.selected = "selected";
            }
            else if(select.name === "to" && currCode === "INR"){
                newOption.selected = "selected";
            }
            select.append(newOption);
        }
        select.addEventListener("change",(evt) => {
            updateFlag(evt.target);
        })
}

const updateFlag = (element) => {
let currCode = element.value;
let countryCode = countryList[currCode];
let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
let img = element.parentElement.querySelector("img");
img.src = newSrc;
};

btn.addEventListener("click", async (evt) => {
    evt.preventDefault();
    let amtVal = amt.value;
    if(amtVal === "" || amtVal < 1){
        amtVal = 1;
        amt.value = "1";
    }
    // console.log(fromCurr.value,toCurr.value);
    // const URL = `${BASE_URL}`;    
    let response = await fetch(BASE_URL);
    let Data = await response.json();
    let rate = Data.data[toCurr.value];
    // console.log(d);
    let finalAmount = amtVal * rate;
    msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`
});