function sortear(){

    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    if (quantidade>=(ate-de+1)){
        alert('A quantidade de números é maior que o range escolhido');
        return;
    }

    if(de >= ate){
       alert('O valor de "de" é maior que o de "ate"');
        return;
    }
    
    let numerosSorteados = [];

    for (let i=0;i<quantidade;i++){
        let numero = numeroAleatorio(de, ate);

        while (numerosSorteados.includes(numero)){
            numero = numeroAleatorio(de, ate);
        }
       
        numerosSorteados.push(numero);
    
    ativarBotaoReiniciar();
        
        
    }

    let textoFinal = document.getElementById('resultado');
    textoFinal.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${numerosSorteados}</label>`;
    
}

function numeroAleatorio(min, max){
    return Math.floor(Math.random() * (max - min) + min);
}

function ativarBotaoReiniciar(){
    let botao = document.getElementById('btn-reiniciar');
    if(botao.classList.contains('container__botao-desabilitado')){
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    }else{
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
    
}


function reiniciar(){
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    textoFinal.innerHTML = ' <label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    ativarBotaoReiniciar();
    
}

