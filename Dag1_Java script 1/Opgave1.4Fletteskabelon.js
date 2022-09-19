let liste1 = [3,4,6,4,2,8,129]
let liste2 = [4,5,8,10,29,23,11]

for (let i = liste1.length - 1; i >= 0; i--) {
    for (let j = 0; j<= i - 1; j++){
        if (liste1[j] > liste1[j + 1]){
            let temp = liste1[j];
            liste1[j] = liste1[j + 1];
            liste1[j + 1] = temp;
        }
    }
}
console.log(liste1)


for (let i = liste2.length - 1; i >= 0; i--) {
    for (let j = 0; j<= i - 1; j++){
        if (liste2[j] > liste2[j + 1]){
            let temp = liste2[j];
            liste2[j] = liste2[j + 1];
            liste2[j + 1] = temp;
        }
    }
}
console.log(liste2)


//Total flet. 
let newlist = [];
let i1 = 0;
let i2 = 0;

//fletter så længe der er noget i begge lister.
while (i1 < liste1.length && i2 < liste2.length){
    if(liste1[i1] <= liste2[i2]){
        newlist.push(liste1[i1])
        i1++;
    }
    else{
       newlist.push(liste2[i2])
       i2++; 
    }
}


//Tømmer den liste der ikke er tom. 
while (i1 < liste1.length){
    newlist.push(liste1[i1]);
    i1++;
}

while (i2 < liste2.length){
    newlist.push(liste2[i2])
}


//printer den nye liste ud. 

console.log(newlist)



