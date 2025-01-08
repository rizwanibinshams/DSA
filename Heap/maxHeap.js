
class MaxHeap{
    constructor(){
        this.heap = [];
    }

    swap(i,j){
        [this.heap[i],this.heap[j]] = [this.heap[j],this.heap[i]]
    }

    insert(value){
        this.heap.push(value);
        this.bubbleUp();
    }

    bubbleUp(){
        let index = this.heap.length -1;
        while(index > 0){
            let parentI = Math.floor((index-1)/2);
            if(this.heap[index] <= this.heap[parentI]) break;
            this.swap(index,parentI);
            index = parentI
        }
    }

    removeRoot(){
        if(this.heap.length ===1 ) return this.heap.pop();
        const root = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown();
        return root;
    }

    bubbleDown(){
        let index = 0;
        let length = this.heap.length;

        while(true){
            let leftChild = 2 * index + 1;
            let rightChild = 2 * index + 2;
            let largest = index;
            if(leftChild < length && this.heap[leftChild] > this.heap[largest]){
                largest = leftChild
            }
            if(rightChild < length && this.heap[rightChild] > this.heap[largest]){
                largest = rightChild;
            }
            if(largest === index) break;

            this.swap(index,largest);
            index = largest

        }
    }
}

const maxHeap = new MaxHeap();
maxHeap.insert(10);
maxHeap.insert(20);
maxHeap.insert(5);
maxHeap.insert(15);
console.log("Max Heap:", maxHeap.heap); // Output: [20, 15, 5, 10]

console.log("Removed Root:", maxHeap.removeRoot()); // Output: 20
console.log("Max Heap after removal:", maxHeap.heap); // Output: [15, 10, 5]