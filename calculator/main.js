
let calculator = document.getElementById('calculator');
let dial = document.querySelector('.numberField'); 
let SecretDial = document.querySelector('.numberFieldSecond')
console.log(calculator);

let operator = '';
let opernand = '';
let secondOpernand = '';

calculator.onclick = function(event) {
    console.log(event);
  
    
    switch (event.target.innerText) {
        case "AC":
            console.log("AC");
            dial.value = "";
            operator = '';
            opernand = '';
            secondOpernand = '';
            break;

        case "=": 
        dial.value = eval(dial.value);
        opernand = eval(dial.value);
        SecretDial.value = '';

            console.log("=");
            break;

        case undefined:
            break;

            case '/\n1\n2\n3\n*\n4\n5\n6\n+\n7\n8\n9\n-\n0\nAC\n=':
                console.log(operator);
                console.log(opernand);
                console.log(secondOpernand);
            break;

        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        case '0':
            if (operator === '') {
                opernand += event.target.innerText;
            } else {
                secondOpernand += event.target.innerText;
                opernand = eval(opernand + operator + secondOpernand);
                SecretDial.value = opernand;
                operator = ''
                secondOpernand = ''
            }
            dial.value += event.target.innerText;
            break;
            
        case '/':
        case '*':
        case '+':
        case '-':
            operator = event.target.innerText;
            dial.value += event.target.innerText;

            break;

        // default:
        //     dial.value += event.target.innerText;
    }
};