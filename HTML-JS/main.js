function validarForm() {
    var campoA = parseFloat(document.getElementById("campoA").value);
    var campoB = parseFloat(document.getElementById("campoB").value);
    var mensagem = document.getElementById("mensagem");

    if (campoB > campoA) {
        mensagem.innerHTML = "Formulário válido: B é maior que A.";
        mensagem.style.color = "green";
    } else {
        mensagem.innerHTML = "Formulário inválido: B deve ser maior que A.";
        mensagem.style.color = "red";
    }
}