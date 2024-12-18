

class Queue{
    constructor(){
        this.items = []
    }

    enqueue(data){
      return  this.items.push(data)
    }

    dequeue(){
        return this.items.shift()
    }

    display(){
        if(this.isEmpty()){
            console.log("emptyyy queue");
        }else{
            console.log(this.items);
        }
    }
    isEmpty(){
      return  this.items.length === 0
    }
}

let queue = new Queue();

queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(40)

queue.display()

queue.dequeue()
queue.display()