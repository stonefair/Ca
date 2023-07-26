
let calculator = document.getElementById('calculator');
let dial = document.querySelector('.numberField'); 
console.log(calculator);

calculator.onclick = function(event) {
    console.log(event);
    // console.log(event.target.innerHTML);

    switch (event.target.innerHTML) {
        case "AC":
            console.log("AC");
            dial.value = "";
            break;

        case "=": 
        dial.value = eval(dial.value)
            console.log("=");
            break;

        case undefined:
            break;

        case "%":
            console.log("%");
            // dial.value += '/'
        default:
            dial.value += event.target.innerHTML;
    }
};