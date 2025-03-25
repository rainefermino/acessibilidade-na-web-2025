document.addEventListener('DOMContentLoaded',function(){
const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade')
const opcoesdeAcessibilidade = document.getElementById('opcoes-acessibilidade')

botaoDeAcessibilidade.addEventListener('click', function(){
botaoDeAcessibilidade.classList.toggle('rotacao-botao');
opcoesDeAcessibilidade.classList.toggle('apresenta-lista')
})

const aumentaFonteBotao=document.getElementById('aumentar-fonte');
const diminuirFonteBotao=document.getElementById('diminuir-fonte');


let tamanhoAtualfonte=1;

aumentaFonteBotao.addEventListener('click',function(){
    tamanhoAtualFonte +=0.1;
    document.body.style.fontSize=`${tamanhoAtualfonte}rem`
})

diminuirFonteBotao.addEventListener('click',function(){
    tamanhoAtualFonte -=0.1;
    document.body.style.fontSize=`${tamanhoAtualfonte}rem`
})


})