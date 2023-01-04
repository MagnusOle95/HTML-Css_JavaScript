
let biler = [];
let bil1 = {nummerplade: 222222, vægt: 1200, mærke: "seat", antalhjul: 4};
let bil2 = {nummerplade: 111111, vægt: 900, mærke: "Fiat", antalhjul: 8};
let bil3 = {nummerplade: 333333, vægt: 1500, mærke: "Volvo", antalhjul: 4};
let bil4 = {nummerplade: 444444, vægt: 2000, mærke: "Kia", antalhjul: 8};
let bil5 = {nummerplade: 555555, vægt: 1800, mærke: "Skoda", antalhjul: 4};
biler.push(bil1);
biler.push(bil2);
biler.push(bil3);
biler.push(bil4);
biler.push(bil5);

console.log(biler);


//Laver et array med biler med mere end 8 hjul. 
let getAntalHjul = (P) => P.antalhjul;
let arrayAntalHjul = [];

biler.forEach(P => {
    if(getAntalHjul(P) == 8){
        arrayAntalHjul.push(P);
    }
})
console.log(arrayAntalHjul);

//Nemmere måde at lave denne på. 
biler.filter(p => p.antalhjul == 8);


//Laver et array med alle nummerpladernes nummre
let getNummerPladeNummer = (B) => B.nummerplade;
let arrayMedNummerPladeNummre = [];

biler.forEach(B => {
        arrayMedNummerPladeNummre.push(getNummerPladeNummer(B));
})

console.log(arrayMedNummerPladeNummre);

//Nemmere måde at lave denne på. 
biler.map(B => B.nummerplade);


//Finder den mindste vægt.
function beregnMinVægt (VægtMin,P){
    if (P.vægt < VægtMin) 
        return P.vægt;
    else
    return VægtMin
    }

//Finder bilen med den mindste vægt. 
let mindstevægt = biler.reduce(beregnMinVægt,biler[0].vægt)
console.log(mindstevægt);

//Laver et array med biler der har størst antal hjul. 
let getAntalHjul2 = (P) => P.antalhjul;
let maxHjul = 0;
biler.forEach(P => {
    if(getAntalHjul(P) > maxHjul){
        maxHjul = getAntalHjul(P);
    }
})
console.log(maxHjul);
let bilerMedStørsteantalHjul = biler.filter(p => p.antalhjul == maxHjul);
console.log(bilerMedStørsteantalHjul);

let stop = 0; //Husk breakpoint så man kan se data fra funktionerne. 
