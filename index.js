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
    if (kappaDone === "true"){
        var win = document.createElement("div");
        win.innerHTML = "<p align='center'>Congratulations! You've bested all the planets! Rejoice in your glory!</p>";
    }
}
function onLoad() {
    disableButtons();
}