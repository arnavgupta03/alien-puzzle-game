function disableButtons() {
    var ZetaDisabled = true;
    var KappaDisabled = true;
    var PsiDisabled = true;
    var epsilonDone = localStorage.getItem("epsilonDone");

    if (epsilonDone.localeCompare("true") != 0){
        document.getElementById("zeta").disabled = ZetaDisabled;
    }
    document.getElementById("kappa").disabled = KappaDisabled;
    document.getElementById("psi").disabled = PsiDisabled;
}
function onLoad() {
    disableButtons();
}