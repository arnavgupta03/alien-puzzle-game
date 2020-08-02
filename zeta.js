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
    firstBot.style.color = "white";
    firstBot.style.fontFamily = "sans-serif";
    firstBot.style.fontWeight = "600";
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
    userDiv.style.color = "white";
    userDiv.style.fontFamily = "sans-serif";
    userDiv.style.fontWeight = "600";
    document.body.appendChild(userDiv);
}
function outputBot(input, questionNum){
    if (questionNum == 1){
        if (input === "fkzg"){
            let botDiv = document.createElement("div");
            botDiv.id = "bot";
            botDiv.innerHTML = 'Translator: <span id="user-response">Correct! Alright, onto your first lesson. The translation between English and Zet is called a Caesar Cipher. It is one of the easiest to decode, since you just need to shift the alphabet a certain number of letters. One way to be able to tell how much the shift is between English and another language that uses the Caesar Cipher is to count the number of letters between the most common letter in the other language and the letter e. For example, in Zet, the most common letter is k. What is the shift?</span>';
            botDiv.style.color = "white";
            botDiv.style.fontFamily = "sans-serif";
            botDiv.style.fontWeight = "600";
            document.body.appendChild(botDiv);
            questNum += 1;
        } else {
            let botDiv = document.createElement("div");
            botDiv.id = "bot";
            botDiv.innerHTML = "Translator: <span id='user-response'>Sorry that's incorrect, try again!</span>";
            botDiv.style.color = "white";
            botDiv.style.fontFamily = "sans-serif";
            botDiv.style.fontWeight = "600";
            document.body.appendChild(botDiv);
        }
    } else if (questionNum == 2) {
        if (parseInt(input) === 6){
            let botDiv = document.createElement("div");
            botDiv.id = "bot";
            botDiv.innerHTML = "Translator: <span id='user-response'>Nice job! Onto your final test. Yeah, you only get one lesson. Let's see if you know enough Zet. Translate the following sentence from Zet to English: Nkrv sk Uho-Cgt Qktuho, eua'xk se utre nuvk!</span>";
            botDiv.style.color = "white";
            botDiv.style.fontFamily = "sans-serif";
            botDiv.style.fontWeight = "600";
            document.body.appendChild(botDiv);
            questNum += 1;
        } else {
            let botDiv = document.createElement("div");
            botDiv.id = "bot";
            botDiv.innerHTML = "Translator: <span id='user-response'>No, that's not the right number. Why don't you try again?</span>";
            botDiv.style.color = "white";
            botDiv.style.fontFamily = "sans-serif";
            botDiv.style.fontWeight = "600";
            document.body.appendChild(botDiv);
        }
    } else if (questionNum == 3) {
        if (input.toLowerCase() === "help me obi-wan kenobi, you're my only hope!") {
            let botDiv = document.createElement("div");
            botDiv.id = "bot";
            botDiv.innerHTML = "Translator: <span id='user-response'>Great job! Now you're done. You no longer need me to teach you any more Zet. One problem though. You still haven't paid me. And since I know you don't have any money, I want you to steal a very special liquid from the Planet Kappa. Yes, steal. They won't let you take it that easily. Well, what are you waiting for? Get on with it.</span>";
            botDiv.style.color = "white";
            botDiv.style.fontFamily = "sans-serif";
            botDiv.style.fontWeight = "600";
            document.body.appendChild(botDiv);
            let onwardButton = document.createElement("div");
            onwardButton.id = "onward";
            onwardButton.innerHTML = "<button onClick='onward()'>Onward!</button>";
            document.body.appendChild(onwardButton);
        } else {
            let botDiv = document.createElement("div");
            botDiv.id = "bot";
            botDiv.innerHTML = "Translator: <span id='user-response'>Sorry, that's not it. Try it again!</span>";
            botDiv.style.color = "white";
            botDiv.style.fontFamily = "sans-serif";
            botDiv.style.fontWeight = "600";
            document.body.appendChild(botDiv);
        } 
    }
}
function onward() {
    localStorage.setItem("zetaDone","true");
    window.location.href = "index.html";
}