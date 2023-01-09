let PratoOpcao;
let PratoPreco;
let PratoPrecoNum;
function selecionarPrato (pratoClicado) {

    const pratoSelecionado = document.querySelector('.selecionado');
    
    if (pratoSelecionado !== null){
        // remover a classe selecionado
        pratoSelecionado.classList.remove('selecionado');
    }

    //adicionar a classe selecionado
    pratoClicado.classList.add('selecionado');

    PratoOpcao = document.querySelector('.pratos .selecionado h2');
    PratoPreco = document.querySelector('.pratos .selecionado h3');
    PratoPrecoNum = PratoPreco.innerHTML.replace('R$','');

    habilitarbotao();
}

let BebidaOpcao;
let BebidaPreco;
let BebidaPrecoNum;
function selecionarBebida (bebidaClicada) {

    const bebidaSelecionada = document.querySelector('.bebidas .selecionado');
    
    if (bebidaSelecionada !== null){
        // remover a classe selecionado
        bebidaSelecionada.classList.remove('selecionado');
    }

    bebidaClicada.classList.add('selecionado');

    BebidaOpcao = document.querySelector('.bebidas .selecionado h2');
    BebidaPreco = document.querySelector('.bebidas .selecionado h3');
    BebidaPrecoNum = BebidaPreco.innerHTML.replace('R$','');

    habilitarbotao();
}

let SobremesaOpcao;
let SobremesaPreco;
let SobremesaPrecoNum;
function selecionarSobremesa (sobremesaClicada) {

    const sobremesaSelecionada = document.querySelector('.sobremesas .selecionado');

    if (sobremesaSelecionada !== null){
        // remover a classe selecionado
        sobremesaSelecionada.classList.remove('selecionado');
    }

    sobremesaClicada.classList.add('selecionado');

    SobremesaOpcao = document.querySelector('.sobremesas .selecionado h2');
    SobremesaPreco = document.querySelector('.sobremesas .selecionado h3');
    SobremesaPrecoNum = SobremesaPreco.innerHTML.replace('R$','');

    habilitarbotao();
}

function habilitarbotao() {
    if (PratoOpcao !== undefined && BebidaOpcao !==undefined && SobremesaOpcao !==undefined){
        document.querySelector('.barra-inferior .botao').classList.add('habilitado');
        document.querySelector('.barra-inferior .botao p').innerHTML = "Fechar pedido"; 
    }

}

let precoFinal;
function continuar (){
    //mudar a cor do botão

    if (PratoOpcao !== undefined && BebidaOpcao !==undefined && SobremesaOpcao !==undefined){
    document.querySelector('.barra-inferior .botao').classList.add('habilitado');
    
    
    //colocar o fundo transparente sobre o site
    //exibir detalhes do pedido
    document.querySelector('.detalhespedido').classList.add('mostrar');
    document.querySelector('.fundo').classList.add('mostrar');

    //alterar a mensagem com as opções selecionadas
    const opcaoPrato = document.querySelector('.detalhespedido .pratoEscolhido p');
    opcaoPrato.innerHTML =  PratoOpcao.innerHTML;

    const precoPrato = document.querySelector('.detalhespedido .pratoEscolhido .preco');
    precoPrato.innerHTML = PratoPreco.innerHTML;
    

    const opcaoBebida = document.querySelector('.detalhespedido .bebidaEscolhida p');
    opcaoBebida.innerHTML = BebidaOpcao.innerHTML;

    const precoBebida = document.querySelector('.detalhespedido .bebidaEscolhida .preco');
    precoBebida.innerHTML = BebidaPreco.innerHTML;
    

    const opcaoSobremesa = document.querySelector('.detalhespedido .sobremesaEscolhida p');
    opcaoSobremesa.innerHTML = SobremesaOpcao.innerHTML;

    const precoSobremesa = document.querySelector('.detalhespedido .sobremesaEscolhida .preco');
    precoSobremesa.innerHTML = SobremesaPreco.innerHTML;
    

    const precoTotal = document.querySelector('.detalhespedido .total .preco');

    precoTotal.innerHTML =`R$ ${(((Number(PratoPrecoNum.replace(',','.'))) + (Number(BebidaPrecoNum.replace(',','.'))) + (Number(SobremesaPrecoNum.replace(',','.')))).toFixed(2)).replace('.',',')}`;
precoFinal=precoTotal
}
}

let mensagem;
function mensagemwpp(){

    const nome = prompt('Informe seu nome');
    const endereco = prompt('Endereço para entrega');

    mensagem = `Olá, gostaria de fazer o pedido: 
    - Prato: ${PratoOpcao.innerHTML} 
    - Bebida: ${BebidaOpcao.innerHTML} 
    - Sobremesa: ${SobremesaOpcao.innerHTML}  
    Total: ${precoFinal.innerHTML}
    
    ${nome}
    ${endereco}`;

    const wpp = 'https://wa.me/5533984188518?text=' + encodeURIComponent(mensagem);
    window.open(wpp);
}

function voltar(){
    document.querySelector('.detalhespedido .mostrar').classList.remove('mostrar');
    document.querySelector('.fundo .mostrar').classList.remove('mostrar');
}