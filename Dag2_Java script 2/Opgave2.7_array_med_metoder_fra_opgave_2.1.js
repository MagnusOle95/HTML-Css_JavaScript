let mitArray = [2,3,4,6,5,2,99,6,44,32,1,2,456,32,1,11,233,4,4,4555,343,2,2,222,1,22,3,]

//Finder max værdi. 
mitArray.maxx = function(){
        let max = 0;
        for (let i = 0; i < this.length; i++){
            if(this[i] > max){
                max = this[i];
            }
        }
        return max;
}

console.log("Test af min metode: " + mitArray.maxx());


//Undersøger om objekt findes i arrayet. 
mitArray.containss = function(værdi){
let contains = false;
let index = 0;
while(contains == false && index <= this.length){
    if (this[index] == værdi){
        contains = true;
    }
    else{
        index++;
    }
}
return contains;
}

console.log("Test contains: " + mitArray.containss(100));
console.log("Test contains: " + mitArray.containss(44));



//Finder summen af alle taldende. 
mitArray.summ = function(){
    let sum = 0;
        for(let i of this){
            sum += i;
        }
        return sum;
}

console.log(mitArray.summ());


