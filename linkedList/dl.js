

class Node{
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}


class Dlink{
    constructor(){
        this.head = null;
        this.tail = null;
    }

    add(value){
        let newNode = new Node(value)

        if(this.head === null){
            this.head = newNode;
            this.tail = newNode
            return
        }
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
    }

    
    mid(){
        if(this.head == null){
            return;
        }

        let fast = this.head;
        let slow = this.head;

        while(fast!== null && fast.next !== null){
            slow = slow.next;
            fast = fast.next.next;
        }
        console.log(slow.value);
        return slow
    }


    print(){
        if(this.head === null){
            return console.log("emptyy");
        }

        let current = this.head;
        let result = ""
        while(current!== null){
            result += current.value;
            current = current.next;
        }
        console.log(result + "null");
    }
}

let list = new Dlink()

list.add(10)
list.add(20)
list.add(30)
list.add(40)
list.add(50)
list.mid()
list.print()