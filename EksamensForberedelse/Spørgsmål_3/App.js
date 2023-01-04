
async function getTalSystem(){
    return new Promise(function(resolve,reject){
        let number = Math.trunc(Math.random() * 2000 );
        let tid = Math.ceil(Math.random() * 3);
        setTimeout(afslut, tid * 1000);
        function afslut(){
        if (number % 17 == 0) resolve (`${number} Okay`);
        else reject(`${number} Ikke okay`);
        }
    })
}

// Promise.allSettled([getTalSystem(),getTalSystem(),getTalSystem()])
// .then((resultat) =>{
//     for(let i = 0; i < resultat.length; i++){
//         console.log(resultat[i]);
//     }
// })

function prøvAntalGangeThen(antalgange){
    let tabelmedGetTalsystem = [];
    for(let i = 0; i < antalgange; i++){
    tabelmedGetTalsystem.push(getTalSystem());
    }

    
    Promise.allSettled(tabelmedGetTalsystem)
    .then((resultat) =>{
        for(let i = 0; i < resultat.length; i++){
            if(resultat[i].status == 'fulfilled'){
                console.log(resultat[i].value);   
        }
        } 
    })
}

async function prøvAntalGangeAwait(antalgange){
    let tabelmedGetTalsystem = [];
    for(let i = 0; i < antalgange; i++){
    tabelmedGetTalsystem.push(getTalSystem());
    }
    let resultat = await Promise.allSettled(tabelmedGetTalsystem)
        for(let i = 0; i < resultat.length; i++){
            if(resultat[i].status == 'fulfilled'){
                console.log(resultat[i].value);   
        }
        } 
    }




//Husk den viser kun den der er fulfilled. se koden ovenover.
prøvAntalGangeThen(20);
prøvAntalGangeAwait(20);


