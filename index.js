function insrt(num) {
    if ($(".display").val() === "0") {
        $(".display").val("")
    }
    if ($(".display").val().includes('.')) {
        $(".display").val()
    }
    $(".display").val($(".display").val() + num)
}
function eql() {
    $(".display").val(eval($(".display").val()))
}
function c() {
    $('.display').val('0')
}