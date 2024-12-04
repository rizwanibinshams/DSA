
//time and space complexity

// O(n)

function sumOfN(n){
    if(n<=0){
        return 0
    }
    return n + sumOfN(n-1)
}

console.log(sumOfN(5));

// sum of an array 

function sumOfArray(arr,n){
    if(n<=0){
        return 0
    }
    return arr[n-1] + sumOfArray(arr,n-1)
}

let arr = [1,2,10,4,5]
console.log(sumOfArray(arr,5));