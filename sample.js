// let arr =[];
// for(let i=0;i<10;i++){
//     arr[i] =i;
   
// }
// console.log(arr);


// function crearte(){
//     let a =[];
//     for(let i=0;i<10;i++){
//         if(i%2==0){
//             a.push(i);
//         }
      
//     }
//     return a;
// }

// console.log(crearte());


// function f(n){
//     let sum =0;
//     for(let i=0;i<=n;i++){
//         sum = sum+i;
//     }
//     return sum;
// }
// console.log(f(4));

// function s(m){
//     let sum = m*(m+1)/2;

//     return sum;
// }
// console.log(s(4));
 
//link


// class Node{
//    constructor(data){
//     this.data = data;
//     this.next = null;


//    }
// }

// class sLinked {
//     constructor(){
//         this.head = null;
//     }

//     add(data){
//         let newNode = new Node(data);
//         if(this.head === null){
//             this.head = newNode;
//             return;
//         }
//         let current = this.head;
//         while(current.next !== null){
//             current = current.next;
//         }
//         current.next = newNode
//     }

//     delete(data) {
//         let temp = this.head;
//         let prev = null;

//         // If the head node itself holds the data to be deleted
//         if (temp !== null && temp.data === data) {
//             this.head = temp.next; // Update head
//             return;
//         }

//         // Search for the node to be deleted
//         while (temp !== null && temp.data !== data) {
//             prev = temp;
//             temp = temp.next;
//         }

//         // If the data was not present in the list
//         if (temp === null) {
//             console.log("no data");
//             return;
//         }

//         // Unlink the node from the linked list
//         prev.next = temp.next;
//     }


//     print(){
//         if(this.head === null){
//             console.log("list empty");
//             return
//         }
//         let current = this.head;
//         while(current !== null){
//             console.log(current.data);
//             current = current.next
//         }
//     }

// }

// let list = new sLinked();


// list.print()
// list.add(2)
// list.add(4)
// list.print()
// list.delete(4)
// list.print()

class Node{
    constructor(value){
        this.value = value;
        this.next = null
    }
}

class Slink{
    constructor(){
        this.head = null;
    }

    add(value){
        let newNode = new Node(value)
        if(this.head === null){
            this.head  = newNode
            return
        }

  

        let current = this.head 
        while(current.next !== null){
            current = current.next
        }
        current.next = newNode;
    }

    print(){
        if(this.head === null){
            console.log("emptyy");
            return
        }
        let current = this.head;
        while(current !== null){
            console.log(current.value);
            current = current.next;

        }

    }

}

let list = new Slink()

list.add(10)
list.add(20)
list.add(30)
list.print()