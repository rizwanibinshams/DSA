


// const set = new Set([1,2,3,4])

// set.add(5)
// console.log(set.has(4));
// set.delete(2)
// console.log("size",set.size);
// //set.clear()
// for(let i of set){
//     console.log(i);
// }


const map = new Map([["a",1],["b",2]]);

map.set("c",3)

map.delete('c')
console.log(map.size);
console.log(map.has('a'));
//map.clear()
for(let [key,value] of map){
    console.log(`${key} : ${value}`);
}