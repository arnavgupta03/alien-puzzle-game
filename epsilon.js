function writeHint() {
    var hint = document.createElement("div");
    hint.innerHTML = "Hint: Alpha=>Unary, Beta=>Binary, Gamma=>Tertiary, Delta=>Quaternary";
    hint.style.width = "100%";
    hint.style.position = "absolute";
    document.body.appendChild(hint);
}