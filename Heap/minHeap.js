
class MinHeap{
    constructor(){
        this.heap =[];
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
            let parentI = Math.floor((index -1 )/2);
            if(this.heap[index] >= this.heap[parentI]) break ;
            this.swap(index,parentI);
            index = parentI
        }
    }

    removeRoot(){
        if(this.heap.length === 1) return this.heap.pop()
            const root = this.heap[0]
        this.heap[0] = this.heap.pop();
        this.bubbleDown();
        return root;
    }

    bubbleDown(){
        let index = 0;
        let length = this.heap.length;
        while(true){
            let leftChild = 2 * index + 1;
            let rightChild = 2 * index + 2
            let smallest = index;

            if(leftChild < length && this.heap[leftChild] < this.heap[smallest]){
                smallest = leftChild
            }
            if(rightChild < length && this.heap[rightChild] < this.heap[smallest]){
                smallest = rightChild
            }
            if(smallest === index) break;
            this.swap(index,smallest);
            index = smallest;
        }
    }
}

const minHeap = new MinHeap();
minHeap.insert(10);
minHeap.insert(20);
minHeap.insert(5);
minHeap.insert(15);
console.log("Min Heap:", minHeap.heap); // Output: [5, 15, 10, 20]

console.log("Removed Root:", minHeap.removeRoot()); // Output: 5
console.log("Min Heap after removal:", minHeap.heap); // Output: [10, 15, 20]