class StackWithSingleQueue {
    constructor() {
        this.queue = [];
    }

    push(value) {
        this.queue.push(value);
        for (let i = 0; i < this.queue.length - 1; i++) {
            this.queue.push(this.queue.shift());
        }
    }

    pop() {
        if (this.queue.length === 0) {
            throw new Error("Stack is empty");
        }
        return this.queue.shift();
    }

    top() {
        if (this.queue.length === 0) {
            throw new Error("Stack is empty");
        }
        return this.queue[0];
    }

    display() {
        console.log("Stack elements:", [...this.queue]);
    }
}

// Example Usage:
const stack = new StackWithSingleQueue();
stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack.pop()); // Output: 30
stack.display(); // Output: Stack elements: [20, 10]
