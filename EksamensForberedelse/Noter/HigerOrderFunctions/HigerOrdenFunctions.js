
//Array med objekter.  
let users = [
    {
        name: 'Yazeed',
        age: 25
    },
    {
        name: 'Sam',
        age: 30
    },
    {
        name: 'Bill',
        age: 20
    }
];

////////////////////////////////////////////////////////////////////////////////////////////////////////////


//Map
// map kalder en function på hvert element i et array og returnerer et nyt array med resultaterne
// The JavaScript map function allows you to apply a function to all elements of an array. 
// map will output a new array, containing the result of running each item in the array 
// through a function that you provide.


// Eksempel
const aMap1 = [1, 2, 3, 4, 5].map((i) => i + 1)
console.log(aMap1)  // [2,3,4,5,6]

//Samme metode som før med objekter 
const aMap2 = users.map((i) => i.name);
console.log(aMap2)  // ["Yazeed", "Sam", "Bill"]

//Anden metode. 
let getName = (user) => user.name;
let aMap3 = users.map(getName);
console.log(aMap3);
// ["Yazeed", "Sam", "Bill"]

////////////////////////////////////////////////////////////////////////////////////////////////////////////


//Filter 
// filter returnerer et array med de elementer, der tilfredsstiller filteret
// filter is a higher-order function that processes a data structure (usually a list) 
// in some order to produce a new data structure containing exactly those elements 
// of the original data structure for which a given predicate returns the boolean value true

//Eksempel
const aFilter1 = ["hashnode", "is", undefined]
// We could filter out the undefined data by saying
const aFilter2 = aFilter1.filter((x) => x != undefined)
console.log(aFilter2 ) // ["hashnode", "is"]

//Samme metode som før med objekter
const aFilter3 = users.filter((x) => x.name.toLowerCase().startsWith('b'))
console.log(aFilter3)

//Anden metode.
let startsWithB = (string) => string.toLowerCase().startsWith('b');
let namesStartingWithB = users.filter((user) => startsWithB(user.name));
console.log(namesStartingWithB);
// [{ "name": "Bill", "age": 20 }]

////////////////////////////////////////////////////////////////////////////////////////////////////////////


//Reduce 
// The reduce() method reduces the array to a single value, 
// just like filter() and map(). The reduce() method also 
// receives a callback function as an argument

//Eksempel
const aReduce1 = [1,2,3,4]
const sumReduce1 = aReduce1.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(sumReduce1) // 10

//Samme metode som før med objekter med sumere alder. 
//Dog skal vi først lave users array om så det kun indeholder ints og ingen objekter.  
const aMap4 = users.map((i) => i.age);
//Nu kan vi sumere dem. 
const sumReduce2 = aMap4.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(sumReduce2) // 75

//Anden metode.
let totalAge = users.reduce((total, user) => user.age + total, 0);
console.log(totalAge);

//Måde hvis man vil beregne det mindste alder.  
function beregnMin (personerMin,P){
    if (P.age < personerMin) 
        return P.age;
    else
    return personerMin
    }

let mindstealder = users.reduce(beregnMin,users[0].age)
    console.log(mindstealder);

////////////////////////////////////////////////////////////////////////////////////////////////////////////


//Sort
let aSort = [30, 4, 10, 2, 0];

aSort.sort(); // => [ 0, 10, 2, 30, 4 ]
console.log(aSort); // => [ 0, 10, 2, 30, 4 ]

aSort.sort((a, b) => a-b);
console.log(aSort); // => [ 0, 2, 4, 10, 30 ]

aSort.sort((a, b) => b-a);
console.log(aSort); // => [ 30, 10, 4, 2, 0 

////////////////////////////////////////////////////////////////////////////////////////////////////////////


//Foreach
// foreach.js
let aForeach  = [1, 2, 3, 4, 5];
let sumForeach = 0;
aForeach.forEach(element => sumForeach += element);
console.log(sumForeach); // => 15

aForeach.forEach((element) => element++);
console.log(aForeach); // => [1, 2, 3, 4, 5]

//tæller ikke element op, bruger kopi af element
aForeach.forEach((element, index, array) => array[index]++);
console.log(aForeach); // => [ 2, 3, 4, 5, 6]

//Template 
array.forEach(element => {
    
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Find 
// Finder det første i arrayet som opfylder betingelsen. 
let aFind = [1, 2, 3, 4, 5];
console.log(aFind.find(element => element % 2 === 0)); // 2
console.log(aFind.find(element => element === 0)); // undefined


//Chain 
// Gør at man kan sætte funktionerne sammen. 
// dette er gjordt med metoderne map og reduce fra linje 82 og 84
const aChain1 = users.map((i) => i.age).reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(aChain1) // 75

















let stop = 0; //Husk breakpoint så man kan se data fra funktionerne. 