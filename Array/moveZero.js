

let arr =[1,0,3,0,4,5,6,0]



function moveZero(arr){
    let result = [];
    zcount = 0;

    for(let i=0;i<arr.length;i++){
        if(arr[i]===0){
            zcount++;
        }else{
            result.push(arr[i])
        }
    }

    for(let i=0;i<zcount;i++){
        result.push(0)
    }
    return result;
}

console.log(moveZero(arr));