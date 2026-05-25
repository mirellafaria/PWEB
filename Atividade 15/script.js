function validar() {

    var nome = document.nomeform.elements["nome"].value;
    var comentario = document.nomeform.elements["comentario"].value;
    var pesquisa = document.nomeform.elements["pesquisa"];

    // validar nome
    if (nome.length < 10) {
        alert("O nome deve ter no mínimo 10 caracteres.");
        return false;
    }

    // validar comentário
    if (comentario.length < 20) {
        alert("O comentário deve ter no mínimo 20 caracteres.");
        return false;
    }

    // validar pesquisa
    var resposta = "";

    for (var i = 0; i < pesquisa.length; i++) {

        if (pesquisa[i].checked) {
            resposta = pesquisa[i].value;
        }

    }

    if (resposta == "") {
        alert("Responda a pesquisa.");
        return false;
    }

    if (resposta == "sim") {
        alert("Volte sempre à esta página!");
    }
    else {
        alert("Que bom que você voltou a visitar esta página!");
    }
    
    return true;
}