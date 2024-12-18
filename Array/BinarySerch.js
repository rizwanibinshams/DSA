

let arr = [10,20,30,40,50,60,70,80,90]

function binarySearch(arr,target,left = 0,right = arr.length-1){
    for(let i =0;i<arr.length;i++){

        let mid = Math.floor((left+right)/2);

        if(arr[mid] === target){
            return mid
        }

        if(arr[mid] > target){
            right = mid - 1
        }else{
            left = mid + 1
        }
    }
    return -1
}

let result = binarySearch(arr,10)
console.log(result);



function bs(arr,target){
    let left = 0;
    let right = arr.length-1;
    while(left<= right){
        let mid = Math.floor((left+right)/2)

        if(arr[mid] === target){
            return mid;
        }
        else if(arr[mid] < target){
            left = mid -1
        }else{
            right = mid + 1
        }
    }
    return -1
}

console.log(bs(arr,30));