
async function godkendt() {
    return new Promise(function(resolve,reject){
        let number = Math.trunc(Math.random() * 10);
        setTimeout(afslut, 500);
        function afslut(){
        if (number == 10) throw new Error (`${number} fejl ikke okay`);
        else if(number >= 7) reject(`${number} Ikke okay`);
        else if(number < 7) resolve (`${number} Okay`);
        }
    })
}


//Promish All settled funktion. giver et array med alle som fortæller hvilke der ikke går godt og hvem der gør. 
Promise.allSettled([godkendt(),godkendt(),godkendt(),godkendt(),godkendt()])
.then((resultat)=> {
    for(let i = 0; i < resultat.length; i++){
        console.log(resultat[i]);
    }
})

//promish all funktion. giver array resultat hvis alle går godt, eller den første der ikke går godt.
// Promise.all([godkendt(),godkendt(),godkendt(),godkendt(),godkendt()])
// .then((resultat)=> {
//     console.log(resultat);
// })
// .catch((resultat) =>{
//         console.log(resultat);
// })

//Promish any giver array resultat.errors når alle fejler eller den første der går godt. 
// Promise.any([godkendt(),godkendt(),godkendt(),godkendt(),godkendt()])
// .then((resultat)=> {
//     console.log(resultat);
// })
// .catch((resultat) =>{
//     console.log(resultat);
//     for(let i = 0; i < resultat.errors.length; i++){
//         console.log(resultat.errors[i]);
//     }
// })














