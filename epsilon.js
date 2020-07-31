function writeHint() {
    var hint = document.createElement("div");
    hint.innerHTML = "Hint: Alpha=>Unary, Beta=>Binary, Gamma=>Tertiary, Delta=>Quaternary";
    hint.style.width = "100%";
    hint.style.position = "absolute";
    document.body.appendChild(hint);
}
function checkAnswer(){
    var answer = parseInt(document.getElementById("solution").value);
    var solution = 432044414;
    if (answer == solution){
        var moveOn = document.createElement("div");
        moveOn.innerHTML = "Congratulations! The judge found your answer to be correct and let you conduct your research on Epsilon. When doing your research on the culture of the Epsilonians, you end up reading a book that says that the aliens of the planet Zeta has a culture that is much more interesting. So let's go there!";
        moveOn.style.width = "100%";
        moveOn.style.position = "absolute";
    } else {
        var notYet = document.createElement("div");
        notYet.innerHTML = "Sorry, that's not correct. Try again!";
        notYet.style.width = "100%";
        notYet.style.position = "absolute";
    }
}