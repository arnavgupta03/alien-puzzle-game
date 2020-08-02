var questNum;
function onLoad(){
    questNum = 0;
}
function writeHints(){
    var hint = document.createElement("div");
    hint.innerHTML = "Hint: The citizens of this planet are not known for being friendly. Except to Vigenere.";
    hint.style.width = "100%";
    hint.style.position = "absolute";
    hint.id = "hints";
    document.body.appendChild(hint);
}
function checkAnswers(){
    var answer = document.getElementById("solution").value;
    var solution = "Kappa"
    if (answer === solution){
        alert("Nice job! But these Kappans aren't done with you yet...");
    } else {
        alert("These Kappans won't give you forever! Try again!");
    }
    var question2 = document.createElement("div");
    question2.innerHTML = "<label for='question2'>Ghpi abe ndu regt fyr? (Answer in English)</label><input type='text' id='question2' name='question2' placeholder='Your answer here'><button onclick='checkAnswer2()'>Submit</button><br>";
    question2.style.width = "100%";
    question2.style.position = "absolute";
    document.body.appendChild(question2);
}
function checkAnswer2() {
    var answer = document.getElementById("question2");
    var solution = "venom";
    if (answer.toLowerCase() === solution){
        alert("Awesome! The Kappans want to ask you one last question before they give you the venom.");
    } else {
        alert("That wasn't it! Try again!")
    }
    var question3 = document.createElement("div");
    question3.innerHTML = "<label for='question3'>Ghpi ic twxs mieweb npben auieb? (Answer in English)</label><input type='text' id='question3' name='question3' placeholder='Your answer here'><button onclick='checkAnswer3()'>Submit</button><br>";
    question3.style.width = "100%";
    question3.style.position = "absolute";
    document.body.appendChild(question3);
}
function checkAnswer3() {
    var answer = document.getElementById("question3");
    var solution = "blaise de vigenere";
    if (answer.toLowerCase() === solution){
        alert("Awesome! Now get your venom and go.");
    } else {
        alert("Nope! Try again!")
    }
    var onward = document.createElement("div");
    onward.innerHTML = "<button onclick='onwards()'>Submit</button><br>";
    onward.style.width = "100%";
    onward.style.position = "absolute";
    document.body.appendChild(onward);
}
function onwards() {
    localStorage.setItem("kappaDone","true");
    window.location.href = "index.html";
}