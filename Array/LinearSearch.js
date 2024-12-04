

let arr = [2,4,5,6,7,8,9]
function leniarSearch(arr,target){
    for(let i = 0; i<arr.length; i++){
        if(arr[i] === target){
            return i
        }
    }
    return -1
}
let result = leniarSearch(arr,5)

console.log(result);