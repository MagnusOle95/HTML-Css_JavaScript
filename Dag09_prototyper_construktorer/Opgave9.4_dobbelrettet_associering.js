class Person {
    constructor(navn,Gruppe){ 
        this.navn = navn; 
        //this.Gruppe = Gruppe - er ikke nødvendig da setNewGroup, sætter this.Gruppe.
        this.setNewGroup(Gruppe)
    }

    setNewGroup(gruppe){
        if (this.Gruppe != gruppe) {
			let oldGroup = this.Gruppe;
			if (oldGroup != null) {
				oldGroup.removePerson(this);
			}
			this.Gruppe = gruppe;
			if (gruppe != null) {
				gruppe.addPerson(this);
			}
		}
    }
    toString() {
        return this.navn + " " +this.Gruppe.navn;
    }
}

class Gruppe{
    constructor(navn){
        this.navn = navn;
        this.personer = [];
    }
    addPerson(person){
        this.personer.push(person);  
    }
    removePerson(person){
        person.Gruppe = null;
        let index = this.personer.indexOf(person);
        this.personer.splice(index,1);   
    }
    getPersoner(){
        return this.personer;
    }
}

//Opretter gruppen og personer. 
let g1 = new Gruppe("S21");
let p1 = new Person("Magnus",g1);
let p2 = new Person("Mathias",g1);
let p3 = new Person("Jens",g1);

//Tester for gruppens personer, og toString() i person giver gruppen personen er forbundet til. 
console.log(g1.getPersoner().toString());

//Tester remove person. 
g1.removePerson(p2);
console.log(g1.getPersoner().toString());

//Tester setny gruppe i person. 
let g2 = new Gruppe("S22");
p1.setNewGroup(g2);

console.log(g1.getPersoner().toString());
console.log(g2.getPersoner().toString());

//Sætter en person med null i gruppe. 
let p4 = new Person("Morten",null);

//Denne her skal komme med undefined da gruppen ikke er defineret. 
console.log(p4.Gruppe);




