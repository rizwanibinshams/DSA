class Graph{
    constructor(){
        this.adjacencyList ={}
    }

    addNode(node){
        if(!this.adjacencyList[node]){
            this.adjacencyList[node] = []
        }
    }

    addEdge(node1,node2){
        this.adjacencyList[node1].push(node2)
    }

    removeEdge(node1,node2){
        this.adjacencyList[node1] = this.adjacencyList[node1].filter((neighbor) => neighbor !== node2)
    }

    removeNode(node){
        delete this.adjacencyList[node];
        for(const key in this.adjacencyList){
            this.adjacencyList[key] = this.adjacencyList[key].filter(
                (neighbor) => neighbor !== node 
            )
        }
    }

    display(){
        console.log(this.adjacencyList);
    }
}

const graph = new Graph();

graph.addNode("A");
graph.addNode("B");
graph.addNode("C");
graph.addNode("D");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "D");

graph.display();


