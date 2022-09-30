//Opgave 9.2
class StringStack{
    constructor(){
        this.stack = [];
        this.pos = 0;
    }
    push(objekt){
        this.stack[this.pos] = objekt;
        this.pos++;
    }
    pop(){
        let objekt = this.stack[this.pos - 1];
        this.stack[this.pos - 1] = undefined;
        this.pos--;
        return objekt;
    }
    peek(){
        let objekt = this.stack[this.pos - 1]
        return objekt;
    }

    getStack(){
        return this.stack.toString();
    }
}

//Tester string stack. 
let s1 = new StringStack();
s1.push("Jens");
s1.push("Ole");
s1.push("Hans Erick")
console.log(s1.getStack());
console.log(s1.peek());
console.log(s1.pop());
console.log(s1.getStack());
s1.push("Jens Jensen");
s1.push("Gert hansen");
console.log(s1.getStack());
console.log(s1.pop());
console.log(s1.pop());
console.log(s1.pop());
console.log(s1.getStack());






