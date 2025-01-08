
class triNode{
    constructor(){
        this.child = {};
        this.isEnd = false;
    }
}

class Trie{
    constructor(){
        this.root = new triNode();
    }

    insert(word){
        let current = this.root;

        for(let char of word){
            if(!current.child[char]){
                current.child[char] = new triNode();
            }
            current = current.child[char];
        }
        current.isEnd = true;
    }

    search(word){
        let current = this.root;

        for(const char of word){
            if(!current.child[char]){
                return false;
            }
            current = current.child[char];
        }
        return current.isEnd;
    }

    startWith(prefix){
        let current = this.root;
        for(let char of prefix){
            if(!current.child[char]){
                return false;
            }
            current = current.child[char]
        }
        return true
    }

    autoComplete(prefix){
        let current = this.root;
        for(const char of prefix){
            if(!current.child[char]){
                return []
            }
            current = current.child[char]
        }
        const result = [];
        this.dfs(current,prefix,result);
        return result;
    }

    dfs(node,prefix,result){
        if(node.isEnd){
            result.push(prefix)
        }
        for(let char in node.child){
            this.dfs(node.child[char],prefix + char,result)
        }
    }
}


const trie = new Trie();

trie.insert('cat')
trie.insert('car')
trie.insert('cart')
trie.insert('dog')
trie.insert('dove')


console.log(trie.search('car'));
console.log(trie.search("card"));
console.log(trie.startWith('ca'));
console.log(trie.startWith('ba'));
console.log(trie.autoComplete('ca'));
