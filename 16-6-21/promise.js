var num1;
var num2;

function getData() {
    num1 = document.form.firstnum.value;
    num2 = document.form.secondnum.value;
    execute();
}

function division(num1, num2) {
    return num1 / num2;
}

function execute() {
    let p = new Promise((resolve, reject) => {
        let res = division(num1, num2)
        if (res < 2) {
            resolve('The quotient is ' + res + ', which is less than 2');
        }
        else {
            reject('The quotient is ' + res + ', which is greater than or equal to 2');
        }
    })

    p.then((message) => {
        console.log(message)
    }).catch((message) => {
        console.log(message)
        // alert(message)
    })
}