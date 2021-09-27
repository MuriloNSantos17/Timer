let segundos=0;
let timer = document.querySelector('.timer');
var botaoStart = document.querySelector('.start');
var botaoStop = document.querySelector('.stop');
var botaoReset = document.querySelector('.reset');

let relogio;

function iniciar()
{
    clearInterval(relogio);

    relogio = setInterval(()=>{

        let data = new Date(segundos*1000).toLocaleTimeString('pt-BR',{
            timeZone: 'UTC'
        });

        console.log(data);
        segundos++;

        timer.innerHTML=data;
   

    },1000);
}


function pausar(){
    
    clearInterval(relogio);
}


function resetar()
{
    clearInterval(relogio);
    timer.innerHTML="00:00:00";
    segundos=0; 
}





botaoStart.addEventListener('click',()=>{
    iniciar();
});

botaoStop.addEventListener('click',()=>{
    pausar();
});

botaoReset.addEventListener('click',()=>{
    resetar();
});





