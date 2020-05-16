$(() => {
    const clear = $("#clear")
    const display = $("#display")
    const equals = $("#equals")
    const add = $("#add")
    const subtract = $("#subtract")
    const multiply = $("#multiply")
    const divide = $("#divide")
    let numArr = []
    let formulaArray = []
    let firstNum;
    let secondNum;
    let result;
    display.val(numArr)

    let logicOperator;


    // display function
    const displayFunc = () => {
        display.val(numArr.join(""))
    }
    // push selected numbers into numArr
    const numPush = (num) => {
        if (numArr[0] === 0) {
            numArr = []
        }
        numArr.push(num)
        displayFunc()
    }
    $("#one").click(() => {
        numPush(1)
    })
    $("#two").click(() => {
        numPush(2)
    })
    $("#three").click(() => {
        numPush(3)
    })
    $("#four").click(() => {
        numPush(4)
    })
    $("#five").click(() => {
        numPush(5)
    })
    $("#six").click(() => {
        numPush(6)
    })
    $("#seven").click(() => {
        numPush(7)
    })
    $("#eight").click(() => {
        numPush(8)
    })
    $("#nine").click(() => {
        numPush(9)
    })
    $("#zero").click(() => {
        numPush(0)
    })

    // clearing the calculator
    clear.click(() => {
        console.log("clicked")
        numArr = [0]
        displayFunc()
    })
    // logical operator functions
    add.click(() => {
        firstNum = 0;
        console.log("add clicked")
        logicOperator = '+';
        firstNum = parseInt(numArr.join(''))
        numArr = []
        displayFunc()
    })
    subtract.click(() => {
        firstNum = 0;
        console.log("subtract clicked")
        logicOperator = '-';
        firstNum = parseInt(numArr.join(''))
        numArr = []
        displayFunc()
    })
    multiply.click(() => {
        firstNum = 0;
        console.log("multiply clicked")
        logicOperator = '*';
        firstNum = parseInt(numArr.join(''))
        numArr = []
        displayFunc()
    })
    divide.click(() => {
        firstNum = 0;
        console.log("divide clicked")
        logicOperator = '/';
        firstNum = parseInt(numArr.join(''))
        numArr = []
        displayFunc()
    })
    equals.click(() => {
        switch (logicOperator) {
            case '+':
                secondNum = parseInt(numArr.join(''));
                result = firstNum + secondNum
                display.val(result)
                break;
            case '-':
                secondNum = parseInt(numArr.join(''));
                result = firstNum - secondNum
                display.val(result)
                break;
            case '*':
                secondNum = parseInt(numArr.join(''));
                result = firstNum * secondNum
                display.val(result)
                break;
            case '/':
                secondNum = parseInt(numArr.join(''));
                result = firstNum / secondNum
                display.val(result)
                break;
        }
    })

})