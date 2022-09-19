let stringliste = ["Bent" , "Frank" , "Børge", "Benny", "Henning", "Flemming"];

for (let i = stringliste.length - 1; i >= 0; i--) {
    for (let j = 0; j<= i - 1; j++){
        if (stringliste[j] > stringliste[j + 1]){
            let temp = stringliste[j];
            stringliste[j] = stringliste[j + 1];
            stringliste[j + 1] = temp;
        }
    }
}
console.log(stringliste); 


let target = "Frank";
let indeks = -1;
let left = 0;
let right = stringliste.length - 1;
let middle = -1;
while (indeks == -1 && left <= right){
    middle = Math.trunc(left + right)/2;
    let k = stringliste[middle]
    if(k == target){
        indeks = middle;
    }
    else if(k > target){
        right = middle - 1;
    }
    else{
        left = middle + 1;
    }
}
console.log(indeks)



