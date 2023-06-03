var result = document.getElementById("plc")
function button(x) {
result.value += x;  
}
function Clear() {
    result.value ="";
}
function Delete() {
    result.value = result.value.slice (0, -1)
}
function calc() {
    try {
        result.value = eval(result.value);
    }
    catch(err) {
        result.value = "Error";
    }
}