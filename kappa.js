function checkAnswer(){
    var answer = document.getElementById("solution").value;
    var solution1 = "Kappa"
    if (answer == solution1){
        alert("Nice job! But these Kappans aren't done with you yet...")
    } else {
        alert("These Kappans won't give you forever! Try again!")
    }
}

function writeHints(){
    var hint = document.createElement("div");
    hint.innerHTML = "Hint: The citizens of this planet are not known for being friendly. Except to Vigenere.";
    hint.style.width = "100%";
    hint.style.position = "absolute";
    document.body.appendChild(hint);
}