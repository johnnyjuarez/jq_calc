$(() => {
    const clear = $("#clear")
    const display = $("#display")
    let numArr = []
    display.val(numArr)


    // display function
    const displayFunc = () => {
        display.val(numArr.join(""))
    }
    // push selected numbers into numArr
    const numPush = (num) => {
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
})