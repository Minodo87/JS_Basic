let add = document.getElementById('incrementa');
let sub = document.getElementById('decrementa');
let num = document.getElementById('numero');

let contatore = 0;

add.addEventListener('click', function(){
    contatore ++;
    num.innerHTML = contatore;
})

function bloccaPersona(){
    if(contatore >= 10){
        alert("ATTENZIONE!! Il Supermercato è pieno!! Aspettare che qualcuno esca.");
    }
}

sub.addEventListener('click', function(){
    contatore --;
    num.innerHTML = contatore;
})



