import fetch from "node-fetch";

const talUrl = 'https://www.random.org/integers/?num=10&min=1&max=6&col=1&base=10&format=plain&rnd=new';

async function get(url) {
    const respons = await fetch(url);
    if (respons.status !== 200) // OK
        throw new Error(respons.status);
    return await respons.json();
}



get(talUrl).then(printerUd);

function printerUd(resultat){
    console.log(resultat);
}



// async function godkendt(url) {
//     const tal = fetch(url);
//     if(respons.status !== 200){
//     return new Promise(function(resolve,reject){
//             console.log(respons);
//             // function afslut(){
//             //     if (number == 10) throw new Error (`${number} fejl ikke okay`);
//             //     else if(number >= 7) reject(`${number} Ikke okay`);
//             //     else if(number < 7) resolve (`${number} Okay`);
//             //     }   
        
//     })
// }
// }
// godkendt(talUrl)



//Promish All settled funktion. giver et array med alle som fortæller hvilke der ikke går godt og hvem der gør. 
// Promise.allSettled([godkendt(),godkendt(),godkendt(),godkendt(),godkendt()])
// .then((resultat)=> {
//     for(let i = 0; i < resultat.length; i++){
//         console.log(resultat[i]);
//     }
// })

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