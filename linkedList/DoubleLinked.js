


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