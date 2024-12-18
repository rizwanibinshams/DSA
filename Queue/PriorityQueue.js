

class PriorityQueue{
    constructor(){
        this.queue = []
    }

    enqueue(data,priority){
        const newItem = {data,priority};
        let added = false;


        for(let i =0;i<this.queue.length;i++){
            if(newItem.priority <this.queue[i].priority){
                this.queue.splice(i,0,newItem);
                added = true;
                break;
            }
        }
        if(!added){
            this.queue.push(newItem)
        }
    }


    dequeue(){
        if(this.isEmpty()){
            return console.log("emptyy");
        }

        return this.queue.shift();
    }

    display(){
        console.log(this.queue);
    }

    isEmpty(){
        return this.queue.length === 0;
    }
}

let pq = new PriorityQueue();

pq.enqueue("last prio",3)
pq.enqueue("second prio",2)
pq.enqueue("first prio",1)
pq.display()

pq.dequeue()

pq.display()