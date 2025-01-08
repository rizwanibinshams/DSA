
class GraphMatrix{
    constructor(size){
        this.size = size;
        this.matrix = Array.from({length :size},()=>
            Array(size).fill(0)
        )
    }


    addEdge(i,j){
        this.matrix[i][j] = 1;
    }

    removeEdge(i,j){
        this.matrix[i][j] = 0;
    }

    display(){
        console.log(this.matrix);
    }
}

const graphMatrix = new GraphMatrix(4);

graphMatrix.addEdge(0,1)
graphMatrix.addEdge(0,2)
graphMatrix.addEdge(1,3)
graphMatrix.addEdge(2,3);

graphMatrix.display()