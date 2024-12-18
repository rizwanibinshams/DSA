

class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}



class linked{
    constructor(){
        this.head = null;
        
    }

    add(value){
        let newNode = new Node(value);

        if(this.head === null){
            this.head = newNode;
            return
        }

        let current = this.head;
        while(current.next !== null){
            
           current = current.next
        }
        
        current.next = newNode
    }

    print(){
        if(this.head === null) {
            return console.log("emptyy");
        }
        let current = this.head;
        let result = ""

        while(current !== null){
            result += current.value;
            current = current.next;
        }
        return console.log(result);
    }
}


let list = new linked()

list.add(10)
list.add(20)
list.add(30)
list.print()