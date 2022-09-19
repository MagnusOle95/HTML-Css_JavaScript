//Opretter arrayet. 
let personer = [];

function tilføjPerson (navn,eMail,mobilNr){
    let objekt = {"Navn":navn, "eMail": eMail, "mobilNr":mobilNr};
    personer.push(objekt);
}

tilføjPerson("Per","Per@mail.com",11223344);
tilføjPerson("Magnus","Magnus.s.larsen@hotmail.com",28715538);

console.log(personer[0]);
console.log(personer[1]);




