class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
  }
   
   
  class singlyLinkedList {
    constructor() {
        this.head = null;
    }
   
    append(data) {
        const newNode = new Node(data);
   
        if (this.head === null) {
            this.head = newNode;
            return;
        }
   
        let current = this.head;
        while (current.next !== null) {
            current = current.next;
        }
   
        current.next = newNode;
    }
   
    modifyMiddle(data) {
        if (this.head === null) return;
   
        let slow = this.head;
        let fast = this.head;
   
        while (fast !== null && fast.next !== null) {
            slow = slow.next;
            fast = fast.next.next;
        }
   
        if (slow !== null) {
            slow.data = data;
        }
    }
   
    print() {
        let current = this.head;
        let listStr = '';
   
        while (current !== null) {
            listStr += current.data + ' -> ';
            current = current.next;
        }
   
        console.log(listStr + 'null');
    }
   
    delete(data) {
   
        if (this.head === null) {
            return;
        }
   
        if (this.head.data === data) {
            this.head = this.head.next;
            return;
        }
   
   
    }
   
   
    modifyUsingCount(data) {
        if (this.head === null) return;
   
        let count = 0;
        let current = this.head;
        while (current !== null) {
            count++;
            current = current.next;
        }
   
        let middleIndex = Math.floor(count / 2);
        current = this.head;
   
        for (let i = 0; i < middleIndex; i++) {
            current = current.next;
        }
   
        if (current !== null) {
            current.data = data;
        }
    }
   
    addTheEnd(data) {
        let newNode = new Node(data);
   
        if (this.head === null) {
            this.head = newNode;
            return;
        }
   
        let current = this.head;
   
        while (current.next !== null) {
            current = current.next;
        }
        current.next = newNode;
    }
   
    addToFirst(data) {
        let newNode = new Node(data); // Creating the new node with the NODE class
   
        if (this.head === null) { // if the head reference is null then we find that the list is empty
            this.head = newNode; // assigning the newNode to the head
            return;
        }
   
        newNode.next = this.head; // adding the reference to the newNode to the head
        this.head = newNode; // assigning the head position to the first node
    }
   
    deleteByValue(target) {
        if (this.head === null) { // if the head is null then we not want to change anything this is empty list
            console.log('The list is Empty');
            return;
        }
   
        if (this.head.data === target) { // if the target value is in the head we find then we hide the value successfully
            this.head = this.head.next;
            return;
        }
   
        let current = this.head;
        let previous = null;
   
        while (current !== null && current.data !== target) {// if not find the target we connect to the previous and current value point to the next node
            previous = current;
            current = current.next;
        }
   
        if (current === null) { // if the current reference is null then the list is finished we cant find the target
            console.log('Target is not found');
            return;
        }
   
        previous.next = current.next; // we find the target then the previous of the data will hide and point to the next node
    }
   
   
    search(data) {
        if (this.head === null) return;
   
        let current = this.head;
        while (current !== null) {
            if (current.data === data) {
                return true;
            }
            current = current.next;
        }
   
        return false
    }
   
    count() {
        let count = 0
        if (this.head === null) {
            return count;
        }
   
        let current = this.head;
        while (current !== null) {
            count++;
            current = current.next;
        }
   
        return count;
    }
   
    reverse() {
   
        if (this.head === null) return;
   
        let previous = null;
        let current = this.head;
        let next = null;
   
        while (current !== null) {
            next = current.next;
            current.next = previous;
            previous = current;
            current = next;
        }
   
        this.head = previous;
   
    }
   
   
    elementAddToEnd(data) {
   
        let newNode = new Node(data);
   
        if (this.head === null) {
            this.head = newNode;
        }
   
        let current = this.head;
        while (current.next !== null) {
            current = current.next;
        }
   
        current.next = newNode;
    }
   
    middle() {
        if (this.head === null) return;
   
        let slow = this.head;
        let fast = this.head;
   
        while (fast !== null && fast.next !== null) {
            slow = slow.next;
            fast = fast.next.next;
        }
   
        if (slow !== null) {
            console.log(slow.data)
        }
    }
   
   
    removeDuplicates() {
        if (this.head === null) return;
   
        let current = this.head;
        while (current !== null && current.next !== null) {
            if (current.data === current.next.data) {
                current.next = current.next.next;
            } else {
                current = current.next;
            }
        }
    }
   
    //     Write a function to detect if there is a cycle (loop) in a singly linked list.
    // Hint: Use the two-pointer technique (slow and fast) where fast moves two steps at a time.
   
    detectCycle() {
        if (this.head === null) return;
   
        let slow = this.head;
        let fast = this.head;
   
        while (fast !== null && fast.next !== null) {
            slow = slow.next;
            fast = fast.next.next;
   
            if (slow === fast) {
                return console.log('Data is Cycle')
            }
        }
   
        return console.log('Data is not Cycle')
    }
   
   
   
  }
   
  let list = new singlyLinkedList();
   
  list.append(10);
  list.append(20);
  list.append(30);
  list.append(30);
  list.append(50);
  list.append(60);
  list.append(70);
  list.print();
  list.removeDuplicates();
  list.print();
  list.detectCycle();
  console.log(list)
  list.reverse();
  list.print();
  list.elementAddToEnd(30)
  list.print()
  list.middle()
  console.log('Original List');
  list.print();
  console.log('modified middle List');
  list.modifyMiddle(100);
  list.print();
  console.log('modifiled middle Element using count');
  list.modifyUsingCount(40)
  list.print()
  console.log('new Node added to the End of the list');
  list.addTheEnd(56);
  list.print();
  console.log('new node at the first using addToFirst')
  list.addToFirst(20);
  list.print();
  console.log('Deleting the node from Value');
  list.deleteByValue(40);
  list.print();
  console.log('Searching for the value');
  console.log(list.search(20));
   
   