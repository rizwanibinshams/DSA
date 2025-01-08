
class QueueWithStacks {
    constructor() {
        this.stack1 = []; // Main stack to hold elements
        this.stack2 = []; // Temporary stack for reordering
    }

    // Enqueue operation: Adds an element to the queue
    enqueue(value) {
        this.stack1.push(value);
    }

    // Dequeue operation: Removes and returns the front element of the queue
    dequeue() {
        if (this.stack2.length === 0) {
            // Move all elements from stack1 to stack2 if stack2 is empty
            while (this.stack1.length > 0) {
                this.stack2.push(this.stack1.pop());
            }
        }

        // If stack2 is still empty, the queue is empty
        if (this.stack2.length === 0) {
            throw new Error("Queue is empty");
        }

        return this.stack2.pop();
    }

    // Display the current state of the queue
    display() {
        const stack2Reversed = [...this.stack2].reverse(); // Reverse stack2 for proper order
        console.log("Queue elements:", [...stack2Reversed, ...this.stack1]);
    }
}

// Example usage:
const queue = new QueueWithStacks();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

queue.display(); // Output: Queue elements: [10, 20, 30]

console.log(queue.dequeue()); // Output: 10
queue.display(); // Output: Queue elements: [20, 30]

queue.enqueue(40);
queue.display(); // Output: Queue elements: [20, 30, 40]

console.log(queue.dequeue()); // Output: 20
queue.display(); // Output: Queue elements: [30, 40]
