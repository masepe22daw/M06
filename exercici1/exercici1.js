var opcions = [0, 1, 2];
var eleccioMaquina;
let guany=0;
let perd=0;
let emp=0;
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
            perd++;
        }else{
            if(opcions[eleccioMaquina] == 2){
                document.getElementById('efecte').innerHTML ='<h1>Has guanyat el joc</h1>';
                guany++;
            }else{
                if(opcions[eleccioMaquina] == 0){
                    document.getElementById('efecte').innerHTML ='<h1>Empat</h1>';
                    emp++;
                }
            }
        } 
    }

    if(elecciousuari == 1){
        if(opcions[eleccioMaquina] == 2){
            document.getElementById('efecte').innerHTML ='<h1>Has perdut el joc</h1>';
            perd++;
        }else{
            if(opcions[eleccioMaquina] == 0){
                document.getElementById('efecte').innerHTML ='<h1>Has guanyat el joc</h1>';
                guany++;
                
            }else{
                if(opcions[eleccioMaquina] == 1){
                    document.getElementById('efecte').innerHTML ='<h1>Empat</h1>'; 
                    emp++;
                }
            }
        }
    }

    if(elecciousuari == 2) {
        if(opcions[eleccioMaquina] == 1){
            document.getElementById('efecte').innerHTML ='<h1>Has guanyat el joc</h1>';
            guany++;
        
        }else{
            if(opcions[eleccioMaquina] == 0){
                document.getElementById('efecte').innerHTML ='<h1>Has perdut el joc</h1>';
                perd++;
            }else{
                if(opcions[eleccioMaquina] == 2) {
                    document.getElementById('efecte').innerHTML ='<h1>Empat</h1>';
                    emp++;
                }
            }
        }
    }

    document.getElementById('efecte').style.display = "";
    document.getElementById('comptador').innerHTML ='<b>Guanyats= ' + guany + ' Perduts= ' + perd +' Empatats= '+ emp +'</b>';
   
}
