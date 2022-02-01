$(document).ready(function(){
    //btn like pousada
    var btn_thumb_pousada = $('#thumbs-pousada');
    var contador1 = $('#thumbs-pousada .contador span');
    btn_thumb_pousada.on('click', clickPousada);

    //btn like quartos
    var btn_thumb_quartos = $('#thumbs-quartos');
    var contador2 = $('#thumbs-quartos .contador span');
    btn_thumb_quartos.on('click', clickQuartos);

    //btn like alimentacao
    var btn_thumb_alimentacao = $('#thumbs-alimentacao');
    var contador3 = $('#thumbs-alimentacao .contador span');
    btn_thumb_alimentacao.on('click', clickAlimentacao);

    //btn like pousada
    var btn_thumb_recepcao = $('#thumbs-recepcao');
    var contador4 = $('#thumbs-recepcao .contador span');
    btn_thumb_recepcao.on('click', clickRecepcao);

    function clickPousada(){
        var cont1 = parseInt(contador1.text());
        contador1.text(cont1 + 1);
    };

    function clickQuartos(){
        var cont2 = parseInt(contador2.text());
        contador2.text(cont2 + 1);
    };

    function clickAlimentacao(){
        var cont3 = parseInt(contador3.text());
        contador3.text(cont3 + 1);
    };

    function clickRecepcao(){
        var cont4 = parseInt(contador4.text());
        contador4.text(cont4 + 1);
    };
});