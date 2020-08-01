var questNum;
function onLoad(){
    questNum = 0;
}
function writeHints() {
    var hints = document.createElement("div");
    hints.innerHTML = "Hint 1: Think about the man stabbed 23 times on March 15. (Et tu, Brute?) <br> Hint 2: The number you require again relates to what letter Zeta is in the Greek alphabet.";
    hints.style.width = "100%";
    hints.style.position = "absolute";
    hints.id = "hints";
    document.body.appendChild(hints);
}
function checkFirstAnswer(){
    var answer = document.getElementById("solution").value;
    var solution1 = "zxgtyrgzux";
    var solution2 = "ZXGTYRGZUX";
    var solution3 = "Zxgtyrgzux";
    if (answer === solution1 || answer === solution2 || answer === solution3){
        alert("Great! You did it.");
        document.getElementById("afterFirstCorrect").value = "Awesome! You found the word for translator, which led you to a translator. But the only translator you could find only works online. So you get on your holo-computer to contact them, and the Zet lessons begin!";
        writeHints();
        document.getElementById("hint").disabled = true;
        document.getElementById("hints").innerHTML = "";
        createChatbox();
    } else {
        alert("Not exactly. Try again!");
    }
}
function createChatbox(){
    var chatbox = document.createElement("div");
    chatbox.innerHTML = '<input id="input" type="text" placeholder="Say Something..."></input>';
    document.body.appendChild(chatbox);
    let firstBot = document.createElement("div");
    firstBot.width = "100%";
    firstBot.position = "absolute";
    firstBot.innerHTML = "Translator: <span id='bot-response'>Hey, I'm going to talk in English for now, but we're going to practice some Zet. First, show me your skills. Translate 'zeta' into Zet.</span>";
    document.body.appendChild(firstBot);
    questNum += 1;
    const inputField = document.getElementById("input");
    inputField.addEventListener("keydown", function(e) {
        if (e.code === "Enter"){
            var input = inputField.value;
            inputField.value = "";
            console.log(input);
            outputUser(input);
            console.log(questNum);
            outputBot(input, questNum);
        }
    });
}
function outputUser(input){
    let userDiv = document.createElement("div");
    userDiv.id = "user";
    userDiv.innerHTML = "You: ".concat(input);
    document.body.appendChild(userDiv);
}
function outputBot(input, questionNum){
    if (questionNum == 1){
        if (input === "fkzg"){
            let botDiv = document.createElement("div");
            botDiv.id = "bot";
            botDiv.innerHTML = 'Translator: <span id="user-response">Correct! Alright, onto your first lesson.</span>';
            document.body.appendChild(botDiv);
            questNum += 1;
        } else {
            let botDiv = document.createElement("div");
            botDiv.id = "bot";
            botDiv.innerHTML = "Translator: <span id='user-response'>Sorry that's incorrect, try again!</span>";
            document.body.appendChild(botDiv);
        }
    }
}