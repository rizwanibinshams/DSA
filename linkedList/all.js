class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
    }

    // Add a node at the end
    append(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
    }

   //Add a Node at the Beginning
    prepend(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        newNode.next = this.head;
        this.head = newNode;
    }
   
    // Delete Node with a Specified Value

    deleteValue(value) {
        if (!this.head) return;
    
        // If head needs to be removed
        if (this.head.value === value) {
            this.head = this.head.next;
            return;
        }
    
        let current = this.head;
        while (current.next && current.next.value !== value) {
            current = current.next;
        }
    
        if (current.next) {
            current.next = current.next.next;
        }
    }

// Insert a Node After and Before a Node
    insertAfter(x, value) {
        let current = this.head;
        while (current && current.value !== x) {
            current = current.next;
        }
        if (current) {
            const newNode = new Node(value);
            newNode.next = current.next;
            current.next = newNode;
        }
    }

//Insert Before

    insertBefore(x, value) {
        if (!this.head) return;
    
        if (this.head.value === x) {
            this.prepend(value);
            return;
        }
    
        let current = this.head;
        while (current.next && current.next.value !== x) {
            current = current.next;
        }
    
        if (current.next) {
            const newNode = new Node(value);
            newNode.next = current.next;
            current.next = newNode;
        }
    }


    //Remove Duplicates in a Sorted Singly Linked List

    removeDuplicates() {
        let current = this.head;
        while (current && current.next) {
            if (current.value === current.next.value) {
                current.next = current.next.next;
            } else {
                current = current.next;
            }
        }
    }

    // Display the list
    printList() {
        let current = this.head;
        let result = "";
        while (current) {
            result += current.value + " -> ";
            current = current.next;
        }
        console.log(result + "null");
    }

    printReverse(current = this.head) {
        if (!current) return;
        this.printReverse(current.next);
        console.log(current.value);
    }
}

// Example usage
const list = new SinglyLinkedList();
list.append(10);
list.append(20);
list.append(30);
list.printList(); // Output: 10 -> 20 -> 30 -> null



// Convert Array to Linked List

function arrayToLinkedList(arr) {
    const linkedList = new SinglyLinkedList();
    arr.forEach(value => linkedList.append(value));
    return linkedList;
}