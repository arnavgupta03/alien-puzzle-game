function disableButtons() {
    var epsilonDone = "false";
    var zetaDone = "false";
    var kappaDone = "false";
    var ZetaDisabled = true;
    var KappaDisabled = true;
    if (localStorage.getItem("epsilonDone") != null){
        epsilonDone = localStorage.getItem("epsilonDone");
    }
    if (localStorage.getItem("zetaDone") != null){
        zetaDone = localStorage.getItem("zetaDone");
    }
    if (localStorage.getItem("kappaDone") != null){
        kappaDone = localStorage.getItem("kappaDone");
    }

    if (epsilonDone.localeCompare("true") != 0){
        document.getElementById("zeta").disabled = ZetaDisabled;
    }
    if (zetaDone.localeCompare("true") != 0){
        document.getElementById("kappa").disabled = KappaDisabled;
    }
    if (kappaDone.localeCompare("true") == 0){
        var win = document.createElement("div");
        win.innerHTML = "<p align='center'>Congratulations! You've bested all the planets! Rejoice in your glory!</p>";
        win.style.position = "absolute";
        win.style.color = "white";
        win.style.width = "100%";
        win.style.fontFamily = "sans-serif";
        win.style.textAlign = "center";
        document.body.appendChild(win);
    }
}
function onLoad() {
    disableButtons();
}