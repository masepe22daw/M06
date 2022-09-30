var opcions = [0, 1, 2];
var eleccioMaquina;
let a;
let guany=0;
let perd=0;

function aleatori(minim, maxim){
    var numero = Math.floor(Math.random() * (maxim - minim +1) + minim);
    return numero;
}

function usuari(elecciousuari){
    elecciousuari = parseInt(elecciousuari);
    eleccioMaquina = aleatori(0,2);

    if(elecciousuari == 0){ 
        if(opcions[eleccioMaquina] == 1){
            document.getElementById('efecte').innerHTML ='<h1>Has perdut el joc</h1>';
            a=2;
        }else{
            if(opcions[eleccioMaquina] == 2){
                document.getElementById('efecte').innerHTML ='<h1>Has guanyat el joc</h1>';
                a=1;
            }else{
                if(opcions[eleccioMaquina] == 0){
                    document.getElementById('efecte').innerHTML ='<h1>Empat</h1>';
                    
                }
            }
        } 
    }

    if(elecciousuari == 1){
        if(opcions[eleccioMaquina] == 2){
            document.getElementById('efecte').innerHTML ='<h1>Has perdut el joc</h1>';
            a=2;
        }else{
            if(opcions[eleccioMaquina] == 0){
                document.getElementById('efecte').innerHTML ='<h1>Has guanyat el joc</h1>';
                a=1;
                
            }else{
                if(opcions[eleccioMaquina] == 1){
                    document.getElementById('efecte').innerHTML ='<h1>Empat</h1>'; 
                    
                }
            }
        }
    }

    if(elecciousuari == 2) {
        if(opcions[eleccioMaquina] == 1){
            document.getElementById('efecte').innerHTML ='<h1>Has guanyat el joc</h1>';
            a=1;
        
        }else{
            if(opcions[eleccioMaquina] == 0){
                document.getElementById('efecte').innerHTML ='<h1>Has perdut el joc</h1>';
                a=2;
            }else{
                if(opcions[eleccioMaquina] == 2) {
                    document.getElementById('efecte').innerHTML ='<h1>Empat</h1>';
                    
                }
            }
        }
    }

    document.getElementById('efecte').style.display = "";

    window.onload= function comptador(){
        for(let x; x<100 ; x++){
            if(a==1){
                guany+1;
            }
            if(a==2){
                perd+1;
            }
        }
        
    }

    document.getElementById('comptador').innerHTML ='<b>Guanyats= ' + guany + ' Perduts= ' + perd +'</b>';
   
}
