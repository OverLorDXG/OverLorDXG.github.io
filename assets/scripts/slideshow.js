console.log("Script Initiated");

// Variable Set Start

var rHandle = document.querySelector(".rC");
var gHandle = document.querySelector(".gC");
var bHandle = document.querySelector(".bC");

var w = document.querySelector(".rR");
var a = document.querySelector(".gR");
var s = document.querySelector(".bR");

// Variable Set End

// Updating W,A,S Values beforehand & Changing Body Color

update("w", w.value);
update("a", a.value);
update("s", s.value);

bodyChange();

// Update & Changing Body Color Done

// Function Write Start

function update(cho, value) {
    if (cho === "w") {
        rHandle.innerHTML = `R: ${value}`
    } else if (cho === "a") {
        gHandle.innerHTML = `G: ${value}`
    } else if (cho === "s") {
        bHandle.innerHTML = `B: ${value}`
    }
}

function bodyChange() {
    var combined = w.value + "," + a.value + "," + s.value;
    var body = document.body
    body.style.backgroundColor = "rgb(" + combined + ")"
}

function rgbToHex() {
    try {
        var rHex = parseInt(w.value).toString(16).padStart(2, '0');
        var gHex = parseInt(a.value).toString(16).padStart(2, '0');
        var bHex = parseInt(s.value).toString(16).padStart(2, '0');
    } catch (e) {
        return false;
    }
    if (rHex.length > 2 || gHex.length > 2 || bHex.length > 2) return false;
    var hex = '#' + rHex + gHex + bHex;

    var body = document.querySelector("#place");
    body.value = hex;
    body.select()
    body.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(body.value)
}


function randomizer() {
    w.value = Math.floor(Math.random() * 256);
    a.value = Math.floor(Math.random() * 256);
    s.value = Math.floor(Math.random() * 256);
    update("w", w.value);
    update("a", a.value);
    update("s", s.value);

    bodyChange();
}

function rgbCopy() {
    var combined = w.value + "," + a.value + "," + s.value;
    var body = document.querySelector("#place");
    body.value = combined;
    body.select()
    body.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(body.value)
}

function divide() {
    var red = w.value/255
    var green = a.value/255
    var blue = s.value/255
    var reds = String(red).slice(0,5)
    var greens = String(green).slice(0,5)
    var blues = String(blue).slice(0,5)
    var combined = reds + "," + greens + "," + blues
    var body = document.querySelector("#place");
    body.value = combined;
    body.select()
    body.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(body.value)
}

function textedit(cho) {
    if (cho === "rgb") {
        var rgbEle = document.querySelector("#rgb");
        rgbEle.innerHTML = "&raquo; Copied! &laquo;";
        setTimeout(() => {
            rgbEle.innerHTML = "&laquo; Copy RGB &raquo;";
        }, 2000)
    } else if (cho === "hex") {
        var rgbEle = document.querySelector("#hex");
        rgbEle.innerHTML = "&raquo; Copied! &laquo;";
        setTimeout(() => {
            rgbEle.innerHTML = "&laquo; Copy Hex &raquo;";
        }, 2000)
    } else if(cho === "float") {
        var rgbEle = document.querySelector("#toFloat");
        rgbEle.innerHTML = "&raquo; Copied! &laquo;"
        setTimeout(() => {
            rgbEle.innerHTML = "&laquo; To Float &raquo;";
        }, 2000)
    }
}

// Function Write End

window.onload = randomizer();
