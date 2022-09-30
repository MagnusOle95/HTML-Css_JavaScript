// opgave11.1.js
const userUrl = 'https://jsonplaceholder.typicode.com/users';
// const userUrl = 'https://jsonplaceholder.typicode.com/users/11';
// const userUrl = 'httpz://jsonplaceholder.typicode.com/users';

//Async metode. 
async function getAsync(url) {
    const respons = await fetch(url);
    if (respons.status !== 200) // OK
        throw new Error(respons.status);
    return await respons.json();
}

getAsync(userUrl)
.then(resultat => console.log("Resultat: " + JSON.stringify(resultat)));


//Sync metode. køre den asynkrone metode. synkront. 
// async function synkronMetode(){
// console.log("Start");
// await getAsync (userUrl)
// .then(resultat => console.log("Resultat: " + JSON.stringify(resultat)));
// console.log("Slut");   
// }

// synkronMetode();

//Denne ville komme til at stå før synkron metode. da den kun synkronisere inde i metoden. 
console.log("slut på test");


