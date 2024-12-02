

//if memory leak happening 

let arr = []

arr.push(2)
arr.push(3)
arr.push(4)

console.log(arr);


// memory leak solved 

let arr1 = []

arr1.push(2)
arr1.push(3)
arr1.push(4)

console.log(arr1);

arr1 =[] // it 
console.log("aftr clear",arr1);