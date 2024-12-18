


function quickSort(arr){
    if(arr.length <= 1){
        return arr;
    }

    const check = arr[arr.length-1]

    const left = [];
    const right = [];

    for(let i =0;i<arr.length-1;i++){
        if(arr[i]<check){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return [...quickSort(left),check,...quickSort(right)]
}

let data = [10, 80, 30, 90, 40, 50, 70];
console.log("Sorted Array:", quickSort(data));