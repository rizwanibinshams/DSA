

class TreeNode{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}


class BinaryTree{
    constructor(){
        this.root = null;
    }

    insert(value){
        const newNode = new TreeNode(value)

        if(!this.root){
            this.root = newNode;
            return
        }
        let queue = [this.root];
        while(queue.length){
            const current = queue.shift();
            if(!current.left){
                current.left = newNode;
                return
            }else  if(!current.right){
                current.right = newNode;
                return
            }else{
                queue.push(current.left);
                queue.push(current.right);

            }
        }
    }
    inorderTraversal(node = this.root,result=[]){
        if(node){
            this.inorderTraversal(node.left,result)
            result.push(node.value)
            this.inorderTraversal(node.right,result)
        }
        return result
    }

    preorderTraversal(node = this.root,result=[]){
        if(node){
            result.push(node.value);
            this.preorderTraversal(node.left,result);
            this.preorderTraversal(node.right,result)
        }
       return result;
    }

    postorderTraversal(node = this.root,result=[]){
        if(node){
            this.postorderTraversal(node.left,result);
            this.postorderTraversal(node.right,result)
            result.push(node.value)
        }
        return result
    }
}

const tree = new BinaryTree()
tree.insert(1)
tree.insert(2)
tree.insert(3)
tree.insert(4)
tree.insert(5)

console.log("Inorder Traversal",tree.inorderTraversal());
console.log("preorderTraversal",tree.preorderTraversal());
console.log("postorderTraversal",tree.postorderTraversal());