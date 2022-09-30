//Opgave 8.5 a
function Compose1(f1,f2,x){
    return f1 (f2(x));
}

function Compose2 (f1,f2){
    return function(x) {return f1 (f2(x))};
}

function Compose3(array){
    return function(x) {
        let sum = x;
        for (let i = array.length - 1; i >= 0; i--){
            result = array[i](sum);
        }
        return sum;
    }
}

let f = function (x) { return x * x; };
let g = function (x) { return x + 5; };
let h = (x) => 7 * x;

console.log(Compose1(f, g, 4));  //81
let gh = Compose2(g, h);
console.log(gh(7)); //54
let fSubtract3h = Compose3([f, (k) => k - 3, h]);
console.log(fSubtract3h(3)); //18*18=324




