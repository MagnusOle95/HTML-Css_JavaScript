// Tilføj kode for opgave 4.1 - 4.5 her!

////Opgave 4.1 farver alle afsnit med rød. 
for (let p of document.querySelectorAll('p')){
    p.className = "red";
}


//Opgave 4.2 farver nummer 2 efter overskrift. 
for(let h1 of document.querySelectorAll("h1")){
    let sekundefterOverskrift = h1.nextElementSibling.nextElementSibling;
    sekundefterOverskrift.className = "brown"
   }

/*
// Anden løsning på opgave 4.2 
for(let h1 of document.querySelectorAll("h1 + * + *")){
 h1.className = "test"
}
 */


//Opgave 4.3 giver hvert andet element i listen en lysergra baggrundsfarve.
let count = 0; 
for(let li of document.querySelectorAll("li")){
    if (count % 2 == 0){
        li.className = "graybaground"
    }
    count++;
}

//Opgave 4.4 Finder første afsnit efter hver overskrift og gør det til en underoverskrift.
//Altså erstertter p outer html med h2. 
for (let h1 of document.querySelectorAll("h1")){
    let p = h1.nextElementSibling;
    p.outerHTML = '<h2>' + p.innerHTML + '</h2>';
}

//Opgave4.5 laver et link til hver overskrift med hver sit id. 
let i = 0;
let links;
for (let h1 of document.querySelectorAll("h1")){
    h1.id = "ID:" + i ;
    let link = "<a href = #" + h1.id + "> overskrift </a>";
    links = links + link;
    i++;
}

document.body.innerHTML = links + document.body.innerHTML;







