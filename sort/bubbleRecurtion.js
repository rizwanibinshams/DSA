

function bubbleSort(arr,n= arr.length){
    if(n===1){
        return arr;
    }

    for(let i=0;i<n-1;i++){
        if(arr[i]>arr[i+1]){
            [arr[i],arr[i+1]] = [arr[i+1],arr[i]]
        }
    }

    return bubbleSort(arr, n-1)
}

let arr = [3,5,7,4,8,9,1]

console.log(bubbleSort(arr));