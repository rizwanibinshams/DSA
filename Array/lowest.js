

let arr = [2,4,65,6,7,21,1,5,8]

function lowest(arr){
    let min = arr[0];
    for(let i in arr){
        if(arr[i] < min){
            min = arr[i]
        }
    }
    return min;
}

let result = lowest(arr)

console.log(result);


function largest(arr){
    let max = arr[0];
    for(let i of arr){
        if( i > max ){
            max = i
        }
    }
    return max
}

let maximum = largest(arr)

console.log("maximum ", maximum);