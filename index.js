function disableButtons() {
    var epsilonDone = "false";
    var zetaDone = "false";
    var ZetaDisabled = true;
    var KappaDisabled = true;
    var PsiDisabled = true;
    if (localStorage.getItem("epsilonDone") != null){
        epsilonDone = localStorage.getItem("epsilonDone");
    }
    if (localStorage.getItem("zetaDone") != null){
        zetaDone = localStorage.getItem("zetaDone");
    }

    document.getElementById("psi").disabled = PsiDisabled;
    if (epsilonDone.localeCompare("true") != 0){
        document.getElementById("zeta").disabled = ZetaDisabled;
    }
    if (zetaDone.localeCompare("true") != 0){
        document.getElementById("kappa").disabled = KappaDisabled;
    }
}
function onLoad() {
    disableButtons();
}