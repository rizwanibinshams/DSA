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

// class Node{
//     constructor(value){
//         this.value = value;
//         this.next = null
//     }
// }

// class Slink{
//     constructor(){
//         this.head = null;
//     }

//     add(value){
//         let newNode = new Node(value)
//         if(this.head === null){
//             this.head  = newNode
//             return
//         }

  

//         let current = this.head 
//         while(current.next !== null){
//             current = current.next
//         }
//         current.next = newNode;
//     }

//     print(){
//         if(this.head === null){
//             console.log("emptyy");
//             return
//         }
//         let current = this.head;
//         while(current !== null){
//             console.log(current.value);
//             current = current.next;

//         }

//     }

// }

// let list = new Slink()

// list.add(10)
// list.add(20)
// list.add(30)
// list.print()



// function insertionSort(arr){
//     for(let i =0;i<arr.length;i++){
//         let key = arr[i];
//         let j = i-1;
//         while(j>=0 && arr[j]> key){
//             arr[j+1] = arr[j];
//             j=j-1
//         }
//         arr[j+1] = key
//     }
//     return arr;
// }

// let arr = [2,4,5,7,9,1,6,0,3]
// console.log(insertionSort(arr));



// function quickSort(arr){
//     if(arr.length <=1){
//         return arr
//     }

//     const check = arr[arr.length-1];

//     const left = [];
//     const right = [];

//     for(let i=0;i<arr.length-1;i++){
//         if(arr[i]< check){
//             left.push(arr[i])
//         }else{
//             right.push(arr[i])
//         }
//     }
//     return [...quickSort(left),check,...quickSort(right)]
// }
// let data = [10, 80, 30, 90, 40, 50, 70];
// console.log("Sorted Array:", quickSort(data));



let arr = [1,2,3,4,1,2,3];

function nonDupli(arr){
    let arr1 =[]
    for(let i=0;i<arr.length;i++){
        let count = 0
        for(let j=0;j<arr.length;j++){
            if(arr[i] === arr[j]){
               count++;
               console.log(arr1);
            }
             }
        if(count == 1){
            arr1.push(arr[i])
        }
    }
    return arr1
}

console.log(nonDupli(arr));


let a = 100;
let b = 20;
let c = 30;


function largest(a,b,c){
    return a>b?(a>c ? a:c):(b>c?b:c)
}

console.log(largest(a,b,c));


let arr3 = [2,2,2]
function avg(arr){
    let sum =0;
    for(let x of arr){
        sum+=x
    }
    return sum/arr.length
}

console.log(avg(arr3));


let ar = [4,5,2,3,1,5,8,0,2,9];

function removedupli(arr){
    let result =[]
    for(let i=0;i<arr.length;i++){

        let isDupli = false
        for(let j=0;j<result.length;j++){
           
            if(arr[i] === result[j]){
               isDupli = true;
               break
            }
            
        }
        if(isDupli === false){
            result.push(arr[i])
        }
        
    }
    return result
}

console.log(removedupli(ar));


function rm(arr){
    for(let i=0;i<arr.length;i++){
        for(let j =0;j<arr.length;j++){
            if(arr[i] == arr[j] && i!==j){
                arr.splice(j,1)
                
            }
        }
        for(let k=i+1;k<arr.length;k++){
            let temp ;
            if(arr[i]>arr[k]){
                 temp =arr[i];
                 arr[i] = arr[k];
                 arr[k] = temp
            }
        }
    }
    return arr
}

console.log(rm(ar));