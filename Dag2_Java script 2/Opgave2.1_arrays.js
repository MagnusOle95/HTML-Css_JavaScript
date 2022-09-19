//Opgave 2.1 A
function max(array) {
    let max = 0;
    for (let i = 0; i < array.length; i++){
        if(array[i] > max){
            max = array[i];
        }
    }
    return max;
}

console.log(max([1,2,4,7,1,2,75,2,35,100,5,6,3,78,66,44]))


//Opgave 2.1 B
function contains(array, element){
let contains = false;
let index = 0;
while(contains == false && index <= array.length){
    if (array[index] == element){
        contains = true;
    }
    else{
        index++;
    }
}
return contains;
}

console.log(contains([1,2,4,7,1,2,75,2,35,100,5,6,3,78,66,44],78))
console.log(contains([1,2,4,7,1,2,75,2,35,100,5,6,3,78,66,44],88))

//Opgave 2.1 C 
function sum(array){
    let sum = 0;
        for(let i of array){
            sum += i;
        }
        return sum;
}

console.log(sum([1,2,3,4,5]))







