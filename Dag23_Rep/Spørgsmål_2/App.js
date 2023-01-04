
class bil {
    #bilmaerke;
    #pris;
    constructor(bilmaerke, pris) {
        try{
            if(bilmaerke == undefined || pris == undefined){
                throw ("bil oprettes ikke da, bilmærke og pris skal være udfyldt.")
            }
            else{
                this.#bilmaerke = bilmaerke;
                this.#pris = pris;  
            }
        }
        catch(err){
            console.log(err);
        }
    }

    toString(){
        return "Bilmærke: " + this.#bilmaerke + " Pris: " + this.#pris
    }
  }


  class varevogn extends bil {
    #lasteEvne;
    constructor(bilmaerke, pris, lasteEvne) {
        
        try{
            super(bilmaerke, pris);
            if(lasteEvne == undefined){
                throw ("varevogn oprettes ikke da, da lasteevne skal være intastet")   
            }
            else{ 
            this.#lasteEvne = lasteEvne; 
            }  
        }
        catch(err){
            console.log(err);
        }
    }

    toString(){
        return super.toString() + " Lasteevne: " + this.#lasteEvne;
    }
  }


  //Opretter bil og varevogn
  let bilKia = new bil("Kia",200000);
  console.log(bilKia);
  let varevognOpel = new varevogn("Opel", 500000, 2500000);
  console.log(varevognOpel)


  //Tilføjer både bil og varevogn, i en liste. 
  let listeAfBiler = [];
  listeAfBiler.push(bilKia);
  listeAfBiler.push(varevognOpel);
  console.log(listeAfBiler);

  
  //Tester bilernes tostring;
  console.log(bilKia.toString());
  console.log(varevognOpel.toString());
  

  //Tester exception på bil. 
  let testbil = new bil();
  let testvarevogn = new varevogn("test",500,);//ting til superklassen skal være udfyldt. men her tester jeg uden lasteevne.  
  console.log(listeAfBiler)

  let stop = 0;

  //Gør rede for arv. 
  // A subclass is a class that derives from another class. 
  // A subclass inherits state and behavior from all of its ancestors. 
  // The term superclass refers to a class's direct ancestor as well as all of its ascendant classes.



  