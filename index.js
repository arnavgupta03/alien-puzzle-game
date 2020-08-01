function disableButtons() {
    var epsilonDone = "false";
    var ZetaDisabled = true;
    var KappaDisabled = true;
    var PsiDisabled = true;
    if (localStorage.getItem("epsilonDone") != null){
        epsilonDone = localStorage.getItem("epsilonDone");
    }

    document.getElementById("kappa").disabled = KappaDisabled;
    document.getElementById("psi").disabled = PsiDisabled;
    if (epsilonDone.localeCompare("true") != 0){
        document.getElementById("zeta").disabled = ZetaDisabled;
    }
}
function onLoad() {
    disableButtons();
}