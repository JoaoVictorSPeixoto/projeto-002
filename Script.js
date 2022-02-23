let cont = 0;
let contador = document.getElementById('cont')
let btns = document.querySelectorAll(".btn")


btns.forEach(function(btn){
    btn.addEventListener('click',function(botão){
       if(botão.currentTarget.id == 'Au'){
           cont++
           contador.textContent = cont;
       }else if( botão.currentTarget.id =='Di'){
           cont--
           contador.textContent = cont;
       }else{
           cont = 0
           contador.textContent = cont;
       }

       if(cont > 0){
           contador.style.color = 'green'
       }else if(cont < 0){
        contador.style.color = 'red'
       }else{
        contador.style.color = 'black'
       }
    })
})

