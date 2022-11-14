var alphabets = document.getElementsByClassName("alphabet");
var numbers = document.getElementsByClassName("number");
var display = document.getElementById("displayBox");
var capsLock = document.getElementById("capsLock");
var string = document.getElementsByClassName("string");
var type = "";


//for DisplayBox (alphabets and numbers)
for (let index = 0; index < alphabets.length; index++) {
    alphabets[index].addEventListener("click", show);
}
for (let index = 0; index < numbers.length; index++) {
    numbers[index].addEventListener("click", show);
}
function show(e) {
    type = this.innerHTML;
    // display.value = type;
    console.log(this.innerText);
    //console.log(e.currentTarget === this);

    if (capsLock.checked == true) {
        for (let index = 0; index < alphabets.length; index++) {
            alphabets[index].style.textTransform = "uppercase";
        }
        display.value += type.toUpperCase();
    } else {
        for (let index = 0; index < alphabets.length; index++) {
            alphabets[index].style.textTransform = "lowercase";
        }
        display.value += type.toLowerCase();
    }
}


//charAt()
function charAt() {
    var display = document.getElementById("displayBox").value;
    var calc = Number(document.getElementById("calculate").value);
    var result = display.charAt(calc);
    alert(result);
}

//charCodeAt()
function charCodeAt() {
    var display = document.getElementById("displayBox").value;
    var calc = Number(document.getElementById("calculate").value);
    var result = display.charCodeAt(calc);
    alert(result);

}

//includes()
function includes() {
    var display = document.getElementById("displayBox").value;
    var calc = document.getElementById("calculate").value;
    var result = display.includes(calc);
    if (result == true) {
        alert("True");
    } else {
        alert("False");
    }

}

//indexOf()
function indexOf() {
    var display = document.getElementById("displayBox").value;
    var calc = document.getElementById("calculate").value;
    var result = Number(display.indexOf(calc));
    alert(result);

}

//lastIndexOf()
function lastIndexOf() {
    var display = document.getElementById("displayBox").value;
    var calc = document.getElementById("calculate").value;
    var result = Number(display.lastIndexOf(calc));
    alert(result);

}

//toUpperCase()
function toUpperCase() {
    var display = document.getElementById("displayBox").value;
    var result = display.toUpperCase();
    alert(result);

}

//toLowerCase()
function toLowerCase() {
    var display = document.getElementById("displayBox").value;
    var result = display.toLowerCase();
    alert(result);

}

//trim()
function trim() {
    var display = document.getElementById("displayBox").value;
    var result = display.trim();
    alert(result);
}

//startsWith()
function startsWith() {
    var display = document.getElementById("displayBox").value;
    var calc = document.getElementById("calculate").value;
    var result = display.startsWith(calc);
    if (result == true) {
        alert("True");
    } else {
        alert("False");
    }

}

//endsWith()
function endsWith() {
    var display = document.getElementById("displayBox").value;
    var calc = document.getElementById("calculate").value;
    var result = display.endsWith(calc);
    if (result == true) {
        alert("True");
    } else {
        alert("False");
    }
}

//Delete btn
function delete1() {
    document.getElementById("displayBox").value = "";
    document.getElementById("calculate").value = "";
}
// Backspace btn
function backSpace(){
    let totalDisplay = display.value;
    display.value = totalDisplay.substr(0,totalDisplay.length-1);
}
//Tab
function tab(){
    display.value += "   ";
}