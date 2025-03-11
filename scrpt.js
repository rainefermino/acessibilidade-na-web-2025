document.addEventListener('DOMContentLoaded',function(){
const aumentaFonteBotao=document.getElementById('aumentar-fonte');

let tamanhoAtualfonte=1;
aumentaFonteBotao.addEventListener('click',function(){
    tamanhoAtual +=0.1;
    document.body.style.fontSize=`${tamanhoAtualfonte}rem`
})

})