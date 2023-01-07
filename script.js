function selecionarPrato (pratoClicado) {

    const pratoSelecionado = document.querySelector('.selecionado');
    
    if (pratoSelecionado !== null){
        // remover a classe selecionado
        pratoSelecionado.classList.remove('selecionado');
    }

    //adicionar a classe selecionado
    pratoClicado.classList.add('selecionado');
}

function selecionarBebida (bebidaClicada) {

    const bebidaSelecionada = document.querySelector('.bebidas .selecionado');
    
    if (bebidaSelecionada !== null){
        // remover a classe selecionado
        bebidaSelecionada.classList.remove('selecionado');
    }

    bebidaClicada.classList.add('selecionado');
}

function selecionarSobremesa (sobremesaClicada) {

    const sobremesaSelecionada = document.querySelector('.sobremesas .selecionado');

    if (sobremesaSelecionada !== null){
        // remover a classe selecionado
        sobremesaSelecionada.classList.remove('selecionado');
    }

    sobremesaClicada.classList.add('selecionado');
}