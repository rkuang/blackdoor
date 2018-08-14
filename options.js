function onclick() {
    console.log("add clicked");
    let input = document.getElementById("textField").value;
    console.log(input);
}

document.getElementById("myButton").addEventListener('click', onclick);