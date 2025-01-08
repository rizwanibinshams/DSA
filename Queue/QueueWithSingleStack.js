


class QueueWithSingleStack {
    constructor() {
        this.stack = [];
    }

    enqueue(value) {
        this.stack.push(value);
    }

    dequeue() {
        if (this.stack.length === 0) {
            throw new Error("Queue is empty");
        }

        // Base case: Single element left in the stack
        if (this.stack.length === 1) {
            return this.stack.pop();
        }

        // Pop the top element
        const temp = this.stack.pop();

        // Recursive call to dequeue
        const result = this.dequeue();

        // Push the top element back into the stack
        this.stack.push(temp);

        return result;
    }

    display() {
        console.log("Queue elements:", [...this.stack]);
    }
}

// Example Usage:
const queue = new QueueWithSingleStack();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log(queue.dequeue()); // Output: 10
queue.display(); // Output: Queue elements: [20, 30]
