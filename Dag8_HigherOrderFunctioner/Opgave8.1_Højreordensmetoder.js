
//Opretter personer. 
let person1 = {name:"Bent Hansen", alder: "45", mobilNummer: "22334455"};
let person2 = {name:"Jens Olsen", alder: "22", mobilNummer: "88888888"};
let person3 = {name:"Mården karlsen", alder: "32", mobilNummer: "67847232"};
let person4 = {name:"Bentebent", alder: "37", mobilNummer: "80808983"};
let person5 = {name:"Magnus Larsen", alder: "27", mobilNummer: "28715538"};

let personer = []; 

personer.push(person1);
personer.push(person2);
personer.push(person3);
personer.push(person4);
personer.push(person5);

//Find person med bestemt mobil nummr. 
PersonMedNummer = (person) => person.mobilNummer == "28715538";
result = personer.find(PersonMedNummer);
console.log(result);

// 8.1 - Find den mindste alder. 
//let mindstealder = personer.reduce((personerMin,P) => P.alder < personerMin ? P.alder : personerMin, personer[0].alder)
function beregnMin (personerMin,P){
    if (P.alder < personerMin) 
        return P.alder;
    else
    return personerMin
    }

let mindstealder = personer.reduce(beregnMin,personer[0].alder)
    console.log(mindstealder);

// 8.1 - modifisere arrayet så personer for forløbende id. 
personer.reduce((id, person) => {
    person.id = id++;
    return id;
}
,5
)
personer.forEach(p => console.log(p));
console.log("\n");

//Opgave 8.1 Generer en tekststreng, der indeholder personernes navne, kommasepareret og i sorteret rækkefølge. 
personer.sort((a,b) => a.name.localeCompare(b.name));
personer.forEach(p => console.log(p));
console.log();

let navne = " ";
personer.forEach(p => navne += p.name + ", ");
console.log(navne);


//Opgave 8.1 laver et array med navne og mobilnummer på de personer der er under 30 år.
getAge = (P) => P.alder;
getMobilNumber =(p) => p.mobilNummer;
getName = (P) => P.name;
let arrayMedFolkOver30 = [];

personer.forEach(P => {
    if(getAge(P) <30){
        arrayMedFolkOver30.push(getName(P) + " " + getMobilNumber(P));
    }
})

// for(let i = 0; i < personer.length; i++){
//     if(getAge(personer[i]) < 30){
//         let name = getName(personer[i]);
//         let mobilnummer = getMobilNumber(personer[i]);
//         arrayMedFolkOver30.push(name + " " + mobilnummer);
//     }
// }

console.log(arrayMedFolkOver30);






