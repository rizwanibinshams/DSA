


class DoubleNode{
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;
    }

}

class DoubleLinked{
    constructor(){
        this.head = null;
        this.tail = null;
    }

    add(value){
        const newNode = new DoubleNode(value);

        if(this.head === null){
            this.head = newNode
            this.tail = newNode
            return
        }
        this.tail.next = newNode;
        newNode.prev = this.tail
        this.tail = newNode
    }

    delete(value){
    
        if(this.head === null){
            return console.log("emptyyy");
        }

        let current = this.head;

        while(current !== null){
            if(current.value === value){
            //single node
                if(current === this.head &&  current === this.tail){
                    this.head == null;
                    this.tail == null
                }
                // value is head
                else if(current === this.head){
                    this.head = current.next;
                    this.head.prev = null;

                }
                //value is tail
                else if(current === this.tail){
                    this.tail = current.prev;
                    this.tail.next = null;
                }
                //node is middle
                else{
                    current.prev.next = current.next;
                    current.next.prev = current.prev;
                }
            }
            current = current.next
        }
    }

    

    print(){
        let current = this.head;
        let result = "";
        while(current){
            result +=  "<-->"+current.value + "<-->"
            current = current.next
        }
        console.log("null"+result + "null");
    }
}

let list = new DoubleLinked();

list.add(10)
list.add(20)
list.add(30)
list.print()