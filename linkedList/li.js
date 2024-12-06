

 class Node{
    constructor(value){
        this.value = value;
        this.next = null
    }
 }


 class Slink{
    constructor(){
        this.head = null
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

    delete(value){
        if(this.head === value){
            this.head = this.head.next;
            return
        }
       let current = this.head;
        while(current.next !== null){
            if(current.next.value === value){
                current.next  = current.next.next;
            return 
            }
            current = current.next;
        }
        

    }

    addAfter(target,newValue){
        let newNode = new Node(newValue)
        let current = this.head;
        while(current.next !== null){
            if(current.value === target){
                newNode.next  = current.next;
                current.next = newNode
            }
            current = current.next;
        }
    }

    print(){
        if(this.head === null){
            return console.log("empty");
        }
        let current = this.head;
        let result = "";
        while(current !== null){
            result += current.value+ "--->"
           
            current = current.next;
        }
        return console.log(result);
    }
    
 }

 let list = new Slink()
 list.add(10)
 list.add(20)
 list.add(30)
 list.add(40)
 list.add(50)
 list.addAfter(30,31)
 list.delete(40)

 list.print()



 class DNode{
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null
    }
 }


 class Dlink{
    constructor(){

        this.head = null;
        this.tail = null;
    }

    add(value){

        let newNode = new DNode(value)
        if(this.head === null){
            this.head = newNode;
            this.tail = newNode;
            return
        }

        this.tail.next = newNode;
        newNode.prev = this.tail
        this.tail = newNode


    }


    delete(value){
       if (this.head === null){
            return console.log("nothing to delete");
            
        }
        let current = this.head;

        while(current !== null){
            if(current.value === value ){
                //node is single node
                if(current === this.head && current === this.tail){
                    this.head = null;
                    this.tail = null;
                }
                // value is head
                else if(current === this.head){
                    this.head = current.next;
                    this.head.prev = null
                }
                //value is tail;
                else if(current === this.tail){
                    this.tail = current.prev;
                    this.tail.next = null

                }

                // value is middle
                else{
                    current.prev.next = current.next;
                    current.next.prev = current.prev
                }
            }
            current = current.next
        }

    }

    addHead(value){
        let newNode = new DNode(value)
        let current = this.head;
        current.prev = newNode;
        newNode.next = current;
        this.head = newNode

    }


    addLast(value){
        let newNode = new DNode(value);

        let current = this.tail;
        
        newNode.prev = current;
        current.next= newNode;
       
        newNode = this.tail

    }




    print(){
        if(this.head === null){
            return console.log("emptyy");
        }

        let current = this.head;
        let result = "";
        while(current !== null){
            result += "<--->" + current.value + "<--->"
            current = current.next
        }
        return console.log(result + "null");
    }
 }

 let dlist = new Dlink()

 dlist.add(20)
 dlist.add(30)
 dlist.add(40)
 dlist.addHead(10)
// dlist.delete(30)
// dlist.delete(20)
dlist.addLast(66)
 dlist.print()