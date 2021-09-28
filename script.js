

// Display history value
function getHistory() {
   return document.querySelector("#history-value").innerText;
}
function printHistory(num){
    document.querySelector("#history-value").innerText=num;
}

// Display output value
function getOutput() {
   return document.querySelector("#output-value").innerText;
}
function printOutput(num){
    if(num === ""){
        document.querySelector("#output-value").innerText=num;
    } else {
        document.querySelector("#output-value").innerText=getFormattedNumber(num);
    }
}

// Format Number -- eg. 1,123,123
function getFormattedNumber(num){
    let n = Number(num);
    let value = n.toLocaleString('en') 
    return value
}


//Remove comma in history value eg. 1123123
function reverseNumFormat(num){
    return Number(num.replace(/,/g,''))
}

//Clicked button
const operator = document.querySelectorAll(".operator")
for(let i = 0; i<operator.length; i++){
    operator[i].addEventListener("click",function(){
        alert("The operator clicked: " + this.innerHTML)
    })
}

const number = document.querySelectorAll(".number")
for(let j = 0; j<number.length; j++){
    number[j].addEventListener("click",function(){
        alert("The number clicked: " + this.innerHTML)
    })
}

