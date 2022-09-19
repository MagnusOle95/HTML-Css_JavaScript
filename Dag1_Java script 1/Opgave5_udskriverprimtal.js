let primtal = [];
let givetPos = 100;
let count = 0;

for(i = 2; i < givetPos; i++){
    count = 0;
    for(let j = 1; j <= i; j++){
        if(i % j == 0){
            count ++;
        }
    }
    if (count == 2){
        primtal.push(i);
    }
}

console.log(primtal)
