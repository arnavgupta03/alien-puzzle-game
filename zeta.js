function writeHints() {
    var hints = document.createElement("div");
    hints.innerHTML = "Hint 1: Think about the man stabbed 23 times on March 15. (Et tu, Brute?) <br> Hint 2: The number you require again relates to what letter Zeta is in the Greek alphabet.";
    hints.style.width = "100%";
    hints.style.position = "absolute";
    document.body.appendChild(hints);
}
function checkAnswer(){
    var answer = document.getElementById("solution").value;
    var solution1 = "zxgtyrgzux";
    var solution2 = "ZXGTYRGZUX";
    var solution3 = "Zxgtyrgzux";
    if (answer == solution1 || answer == solution2 || answer == soolution3){
        alert("Great! You did it.");
    } else {
        alert("Not exactly. Try again!");
    }
}