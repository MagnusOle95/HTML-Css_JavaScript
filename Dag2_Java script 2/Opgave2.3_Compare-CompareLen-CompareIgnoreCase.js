//Opgave 2.3 A

function compare(s1,s2){
    let result;
    if(s1 == s2){
        result = 0;
    }
    else if(s1 > s2){
            result = -1;
        }
    else if (s1 < s2){
        result = 1;
    }
    return result;
}

let s1 = "Bent"
let s2 = "Frank"
console.log(compare(s1,s2));


//Opgave  2.3 B
function compareLen(s1,s2){
    let result;
    if (s1.length == s2.length){
        result = 0;
    }
    else if (s1.length > s2.length){
        result = 1;
    }
    else if (s1.length < s2.length){
        result = -1;
    }
    return result;
}

console.log(compareLen(s1,s2))


//Opgave 2.3 C 

function compareIgnoreCase(s1,s2){
    s1 = s1.toLowerCase(); 
    s2 = s2.toLowerCase();

    let result;
    if(s1 == s2){
        result = 0;
    }
    else if(s1 > s2){
            result = -1;
        }
    else if (s1 < s2){
        result = 1;
    }
    return result;
}

let s3 = "hansi"
let s4 = "GURLI"
console.log(compareIgnoreCase(s3,s4));