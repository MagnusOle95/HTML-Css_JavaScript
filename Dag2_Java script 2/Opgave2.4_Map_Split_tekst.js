let teskstStrenge = new Map();
teskstStrenge.set("a","hej med dig");
teskstStrenge.set("b","Hvor gammel er du?");
teskstStrenge.set("c","Jeg er 26 år gammel");

console.log(teskstStrenge.get("b"));

let testord = teskstStrenge.get("b").split(" ");

console.log(testord[2])


//metode der retunere, antallet af ord i en tekststreng, 
function antalAfOrd(tekstStreng){
let words = tekstStreng.split(" ");
return words.length;
}

console.log(antalAfOrd("Hej med jer, hvordan har i det?"))