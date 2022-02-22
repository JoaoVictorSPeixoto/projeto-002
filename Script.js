let cont = 0;
let contador = document.getElementById('cont')

function Diminuir(){
    cont -= 1;

    contador.innerHTML = cont;

    if(cont < 0 && cont != 0){
        contador.style.color = 'red'
    }else{
        contador.style.color = 'green'
    }
    if(cont == 0){
        contador.style.color = 'black'
    }
}

function Resetar(){
    contador.innerHTML = 0;
    cont = 0
    if(cont < 0 && cont != 0){
        contador.style.color = 'red'
    }else{
        contador.style.color = 'green'
    }

    if(cont == 0){
        contador.style.color = 'black'
    }
}

function Aumentar(){
    cont += 1;

    contador.innerHTML = cont;
    if(cont < 0 && cont != 0){
        contador.style.color = 'red'
    }else{
        contador.style.color = 'green'
    }

    if(cont == 0){
        contador.style.color = 'black'
    }
}