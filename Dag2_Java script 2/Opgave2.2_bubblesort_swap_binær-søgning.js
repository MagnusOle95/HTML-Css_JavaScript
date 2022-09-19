//Opgave 2.2 A

function bubblesort(array){
    for (let i = array.length - 1; i >= 0; i--) {
        for (let j = 0; j<= i - 1; j++){
            if (array[j] > array[j + 1]){
                swap(array,j);
            }
        }
    }
    }
    
    function swap (array,j){
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
    }
    
    
    let stringliste = ["Bent" , "Frank" , "Børge", "Benny", "Henning", "Flemming"];
    bubblesort(stringliste); 
    console.log(stringliste)
    
    
    //Opgave 2.2 B 
    
    function binaryseach(array, element){
    let found = false;
    let left = 0;
    let right = stringliste.length - 1;
    let middle = -1;
    while (!found && left <= right){
        middle = Math.trunc(left + right)/2;
        let k = stringliste[middle]
        if(k == element){
            indeks = middle;
            found = true;
        }
        else if(k > element){
            right = middle - 1;
        }
        else{
            left = middle + 1;
        }
    }
    return found
    }
    
    console.log(binaryseach(stringliste,"Frank"))