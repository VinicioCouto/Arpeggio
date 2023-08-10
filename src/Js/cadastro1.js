function validarFormulario() {
    var email = document.forms["meuFormulario"]["email"].value;
    var senha = document.forms["meuFormulario"]["senha"].value;
    var nome = document.forms["meuFormulario"]["nome"].value;

    if (senha == "" || email == "") {
        alert("Por favor, preencha todos os campos obrigatórios.");
        return false;
    } 

    var formatoEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

    if (!email.match(formatoEmail)) {
        alert("Por favor, insira um endereço de e-mail válido.");
        return false;
    } 

    if (senha.length < 5) {
        alert("A senha deve ter pelo menos 5 caracteres.");
        return false;
    } 

    window.location.href = "cadastro2att.html";
    return false;



}