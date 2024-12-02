 
 class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
 }
 
 
 
 class SlinkedList{
    constructor(){
        this.head = null;
    }


    add(data){
        let newNode = new Node(data);
        if(this.head === null){
            this.head = newNode;
            return;
        }
        let current  = this.head;
        while(current.next !== null){
            current = current.next;
        }
        current.next = newNode;

    }
    print(){
        if(this.head === null){
            return
        }
        let current = this.head;
        while(current !== null){
            console.log(current.data);
            current = current.next;
        }
    }
    
}

let list = new SlinkedList();
list.print()
list.add(5)
list.add(2)

list.print();

