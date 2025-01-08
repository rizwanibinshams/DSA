class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let newNode = new TreeNode(value);

    if (this.root === null) { 
      this.root = newNode;
      return;
    }

    let current = this.root;

    while (current !== null) {
      if (value < current.value) {
        if (!current.left) {
          current.left = newNode;
          return;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = newNode;
          return;
        }
        current = current.right;
      }
    }
  }

  search(value) {
    let current = this.root;
    while (current) {
      if (value === current.value) return true;
      if (value < current.left) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }

  contains(value) {
    let current = this.root;
    while (current) {
      if (value === current.value) return true;
      current = current < current.value ? current.left : current.right;
    }
    return false;
  }

  delete(value, node = this.root) {
    if (!node) {
      return null;
    }

    if (value < node.value) {
      node.left = this.delete(value, node.left);
    } else if (value > node.value) {
      node.right = this.delete(value, node.right);
    } else {
      if (!node.left) return node.right;
      if (!node.right) return node.left;

      const minValue = this.findMin(node.right);
      node.value = minValue;
      node.right = this.delete(minValue, node.right);
    }
    return node;
  }

  findMin(node) {
    while (node.left) {
      node = node.left;
    }
    return node.value;
  }

  calculateHeight(node = this.root) {
    if (!node) {
      return -1;
    }
    let leftHeight = this.calculateHeight(node.left);
    let rightHeight = this.calculateHeight(node.right);
    return 1 + Math.max(leftHeight, rightHeight);
  }

  calculateWeight(node = this.root) {
    if (!node) {
      return 0;
    }
    let weightleft = this.calculateWeight(node.left);
    let weightright = this.calculateWeight(node.right);
    return node.value + weightleft + weightright;
  }

  inorderTraverse(node = this.root, result = []) {
    if (node) {
      this.inorderTraverse(node.left, result);
      result.push(node.value);
      this.inorderTraverse(node.right, result);
    }
    return result;
  }

  // preorderTraverse(node = this.root, result=[]){
  //     if(node){
  //         result.push(node.value);
  //         this.preorderTraverse(node.left,result);
  //         this.preorderTraverse(node.right,result)
  //     }
  //     return result
  // }

  // postorderTraverse(node = this.root,result = []){
  //     if(node){
  //         this.postorderTraverse(node.left,result)
  //         this.postorderTraverse(node.right,result);
  //         result.push(node.value)
  //     }
  //     return result
  // }
}

let bst = new BinarySearchTree();

bst.insert(14);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);
bst.insert(13);
bst.insert(18);

console.log("contains", bst.contains(15));
console.log("Inorder Traversal:", bst.inorderTraverse());
console.log("Height of the tree:", bst.calculateHeight());
console.log("Weight of the tree:", bst.calculateWeight());

console.log(bst.search(14));
console.log(bst.search(10));

bst.delete(14);
console.log("Inorder Traversal:", bst.inorderTraverse());
