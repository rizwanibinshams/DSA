

class Stack{
    constructor(){
        this.items =[];

    }

    push(data){
       return this.items.push(data);

    }

    pop(){
        if(this.isEmpty()){
            return null;
        }

        return this.items.pop()
    }

    display(){
        if(this.isEmpty()){
            console.log("empty stack");
        }
        console.log(this.items);
    }

    isEmpty(){
        return this.items.length === 0 ;
    }
}

let stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);

stack.display()


stack.pop()
stack.display()

stack.pop()
stack.pop()
stack.pop()
stack.display()