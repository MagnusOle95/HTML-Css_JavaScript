
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

//Opgave 8.1 - Find person med bestemt mobil nummr. 
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

//Opgave 8.1 Generer en tekststreng, der indeholder personernes navne, kommasepareret og i sorteret rækkefølge. 





