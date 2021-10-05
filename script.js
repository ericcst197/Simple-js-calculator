

// Display history value
function getHistory() {
    return document.querySelector("#history-value").innerText;
}
function printHistory(num) {
    document.querySelector("#history-value").innerText = num;
}

// Display output value
function getOutput() {
    return document.querySelector("#output-value").innerText;
}
function printOutput(num) {
    if (num == "") {
        document.querySelector("#output-value").innerText = num;
    } else {
        document.querySelector("#output-value").innerText = getFormattedNumber(num);
    }
}

// Format Number -- eg. 1,123,123
function getFormattedNumber(num) {
    if(num == "-"){
        return "";
    }
    let n = Number(num);
    let value = n.toLocaleString('en')
    return value
}


//Remove comma in history value eg. 1123123
function reverseNumFormat(num) {
    return Number(num.replace(/,/g, ''))
}

//Clicked button
const operator = document.querySelectorAll(".operator")
for (let i = 0; i < operator.length; i++) {
    operator[i].addEventListener("click", function () {
        if(this.id == "all-clear"){
            printOutput("");
            printHistory("");
        }
        else if(this.id == "delete"){
            let output= reverseNumFormat(getOutput()).toString();
            if(output){ //if output has a value
                output = output.substr(0, output.length -1);
                printOutput(output)
            }
        }
        else {
            var output= getOutput();
            var history = getHistory();
            if(output == "" && history != ""){
                if(isNaN(history[history.length-1])){
                    history=history.substr(0, history.length -1 )
                }
            }
            if(output != "" || history != "" ){
                output= output==""?
                output:reverseNumFormat(output);
                history = history + output;
                if(this.id=="="){
                    let result = eval(history);
                    printOutput(result);
                    printHistory(""); 
                }
                else{
                    history= history+this.id;
                    printHistory(history);
                    printOutput("");
                }
            }
        }

    })
}

const number = document.querySelectorAll(".number")
for (let j = 0; j < number.length; j++) {
    number[j].addEventListener("click", function () {
        let output= reverseNumFormat(getOutput());
        if (output != NaN){ //if output is a number
            output += this.innerHTML;
            printOutput(output);
        }
        
    })
}

