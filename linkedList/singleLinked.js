 
//  class Node{
//     constructor(data){
//         this.data = data;
//         this.next = null;
//     }
//  }
 
 
 
//  class SlinkedList{
//     constructor(){
//         this.head = null;
//     }


//     add(data){
//         let newNode = new Node(data);
//         if(this.head === null){
//             this.head = newNode;
//             return;
//         }
//         let current  = this.head;
//         while(current.next !== null){
//             current = current.next;
//         }
//         current.next = newNode;

//     }
//     print(){
//         if(this.head === null){
//             return
//         }
//         let current = this.head;
//         while(current !== null){
//             console.log(current.data);
//             current = current.next;
//         }
//     }
    
// }

// let list = new SlinkedList();
// list.print()
// list.add(5)
// list.add(2)

// list.print();


// class Node{
//     constructor(value){
//         this.value = value;
//         this.next = null;
//     }
// }


// class singleLinked{
//     constructor(){
//         this.head = null
//     }

//     add(value){
//         const newNode = new Node(value)
//         if(!this.head){
//             this.head = newNode;
//             return
//         }
//         let current = this.head;
//         while(current.next){
//             current = current.next;
//         }
//         current.next = newNode;
//     }

//     print(){
//         let current = this.head;
//         let result = "";
//         while(current !== null){
//             result += current.value + "-->";
//             current = current.next;
//         }
//         console.log(result + "null");
//     }
// }

// const list = new singleLinked()
// list.add(10)
// list.add(20)
// list.add(30)
// list.print()


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
        const newNode = new Node(value);
        if(this.head === null){
            this.head = newNode;
            return
        }
        let current = this.head
        while(current.next !== null){
            current = current.next;
        }
        current.next = newNode
    }

    findN(n){
        let count = 1;
        let current = this.head;
        while(n > count){
            current = current.next
            count++;
            
        }
        console.log(current.value);
    }

    print(value){
        let current = this.head ;
        let result = "";
        while(current !== null){
            result += current.value + "-->"
            current = current.next
        }
        console.log(result + "null");
    }
}

const list = new Slink();

list.add(10)
list.add(20)
list.add(30)
list.print()
list.findN(1)

// function findN(n){
//     let count = 0;
//     let current = this.head;
//     if(n === count){
//         current = current.value
//         count++;

//     }
//     console.log(current);
// }
