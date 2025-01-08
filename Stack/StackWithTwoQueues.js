class StackWithTwoQueues {
    constructor() {
        this.queue1 = [];
        this.queue2 = [];
    }

    push(value) {
        this.queue2.push(value);
        while (this.queue1.length) {
            this.queue2.push(this.queue1.shift());
        }
        [this.queue1, this.queue2] = [this.queue2, this.queue1];
    }

    pop() {
        if (this.queue1.length === 0) {
            throw new Error("Stack is empty");
        }
        return this.queue1.shift();
    }

    top() {
        if (this.queue1.length === 0) {
            throw new Error("Stack is empty");
        }
        return this.queue1[0];
    }

    display() {
        console.log("Stack elements:", [...this.queue1]);
    }
}

// Example Usage:
const stack = new StackWithTwoQueues();
stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack.pop()); // Output: 30
stack.display(); // Output: Stack elements: [20, 10]
