function writeHints() {
    var hints = document.createElement("div");
    hints.innerHTML = "Hint 1: Think about the man stabbed 23 times on March 15. (Et tu, Brute?) <br> Hint 2: The number you require again relates to what letter Zeta is in the Greek alphabet.";
    hints.style.width = "100%";
    hints.style.position = "absolute";
    document.body.appendChild(hints);
}
function checkFirstAnswer(){
    var answer = document.getElementById("solution").value;
    var solution1 = "zxgtyrgzux";
    var solution2 = "ZXGTYRGZUX";
    var solution3 = "Zxgtyrgzux";
    if (answer == solution1 || answer == solution2 || answer == soolution3){
        alert("Great! You did it.");
        document.getElementById("afterFirstCorrect").value = "Awesome! You found the word for translator, which led you to a translator. But the only translator you could find only works online. So you get on your holo-computer to contact them, and the Zet lessons begin!";
    } else {
        alert("Not exactly. Try again!");
    }
}