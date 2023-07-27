
let calculator = document.getElementById('calculator');
let dial = document.querySelector('.numberField'); 
console.log(calculator);

calculator.onclick = function(event) {
    console.log(event);
    
    switch (event.target.innerText) {
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

            case '/\n1\n2\n3\n*\n4\n5\n6\n+\n7\n8\n9\n-\n0\nAC\n=':
            break;

        default:
            dial.value += event.target.innerText;
    }
};