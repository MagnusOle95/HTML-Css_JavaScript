// opgave10.1.js
class Person {
    constructor(navn) { this.navn = navn; }
    toString() { return this.navn; }
    equals(P) {
        if(!(P instanceof Person)){
            throw new Error("p ikke person");
        }
        if(this.navn.equals(P.navn)){
            return true;
        }else{
            return false;
        }
    }
}

class Studerende extends Person {
    constructor(navn, id) { super(navn); this.id = id; }
    toString() { return super.toString() + ": " + this.id; };
    equals(S) {
        if(!(S instanceof Studerende)){
            throw new Error("S ikke studerende");
        }
        if(this.navn.equals(S.navn && S.id)){
            return true;
        }else{
            return false;
        }
    }
}

class Kat {
    constructor(navn) { this.navn = navn; }
    toString() { return 'Kat: ' + this.navn; };
}

let p1 = new Person("Viggo");
let p2 = new Person("Børge");
let s1 = new Studerende("Ida", 123);
let s2 = new Studerende("Ole", 123);
let k1 = new Kat("Misser");
let k2 = new Kat("Nuller")

let liste = [p1, p2, s1, s2, k1, k2,];

function compare(p1,p2){
    let comp = p1.navn.localeCompare(p2.navn);
    return comp;
}

// compare function. 
console.log(liste.toString());
liste.sort(compare);
console.log(liste.toString());





