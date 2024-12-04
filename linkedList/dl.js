

class DNode{
    constructor(value){
        this.value = value;
        this.next = null
        this.prev = null;
    }
}

class Dlink{
    constructor(){
        this.head = null;
     
        this.tail = null
    }

    add(value){
        let newNode = new DNode(value);
        if(this.head == null){
            this.head = newNode;
            this.tail = newNode;
        }else{
         this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
        }
       
    }

    addFront(value){
        let newNode = new DNode(value);
        if(this.head == null ){
            this.head = newNode;
            this.tail = newNode;
        }else{
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode
        }

    }

    print(){
        let current = this.head;
        let result = ""
        while(current){
            result += current.value + "<-->";
            current = current.next;
        }
        console.log(result + "null");
    }

    printReverse(){
        let current = this.tail;
        let result = "";
        while(current){
            result += current.value + "<-->"
            current = current.prev;
        }
        console.log("null <--> " + result);
    }

    findMid(){
        if(this.head === null){
            console.log("list is empty");
            return
        }

        let slow = this.head;
        let fast = this.head;
        while(fast !== null && fast.next !== null){
            slow = slow.next;
            fast = fast.next.next;
        }
        console.log("middle element is" + slow.value);
        return slow
    }
}

let list = new Dlink();

list.add(10)
list.add(20)
list.add(30)
list.addFront(40)
list.print()
list.findMid()
list.printReverse()