function feel() {
    var text;
    var feeling = prompt("How Do You Feel Today?");
    switch (feeling) {
        case "good":
            text = "i hope you always feel GOOD";
            break;
        case "sad":
            text = "its okay, look for someting you love and do it to feel better";
            break;
        case "normal":
            text = "hummm thats nice";
            break;
        default:
            text = "is this what you really feel?";
    }
    document.getElementById("feelbox").innerHTML = text;
}

/// for function
function forFunc() {
    var shayth = { myname: "Shayth", myln: "Bani Baker", born: 1995 };

    var text = "";
    var test;
    for (test in shayth) {
        text += shayth[test] + " ";
    }
    document.getElementById("ABOUT").innerHTML = text;
}

function lab8() {
    var image = document.createElement("IMG");
    image.setAttribute("src", "https://referralrock.com/wp-content/uploads/2018/08/javascript-logo_small.png");
    document.body.appendChild(image);
}