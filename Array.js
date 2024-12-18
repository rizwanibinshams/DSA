
// function result(n,a){
//     for(let i=0;i<n.length;i++){
//         for(let j=i+1;j<n.length;j++){
//             if(n[i]+n[j]== a){
//                 return console.log(n[i],n[j]); ;
//             }
//         }
//     }
//    return null;
// }

// let b = [1,2,3,4,5,6]
// result(b,10)

// O(n)t,
// O(1)s


// function res(n,target){
//     let set = new Set();
   
//     for(let i=0;i<n.length;i++){
//         let num = n[i];
//         let match = target - num;
//         if(set.has(match)){
//             return [num,match]
//         }else{
//             set.add(num)
//         }
//     }
//     return null;
// }

//  let b = [1,2,3,4,5,6]
// console.log(res(b,10)); 

// O(n)s,
// O(1)t

// let target = 6;
// let n = [1,2,6,3,6,7,7,8,6]
// function swap(n,target){
  
//     for(let i in n){
//         if(n[i] == target){
//             let val = n[i];
//             n.push(val)
//             n.splice(i,1)
//         }
//     }
//     return n;
// }

// console.log(swap(n,target));


// function swap(n, target) {
//     let result = [];
//     let targets = [];
//     for (let i = 0; i < n.length; i++) {
//         if (n[i] === target) {
//             targets.push(n[i]); // Collect all target values
//         } else {
//             result.push(n[i]); // Collect non-target values
//         }
//     }
//     return result.concat(targets); // Combine non-target and target values
// }

// let n = [1, 2, 6, 3, 6, 7, 7, 8, 6];
// let target = 6;
// console.log(swap(n, target)); 



//linear search 

// let arr = [2,3,4,5,6,7]
// function lSearch(arr,target){
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]=== target){
//             return i
//         }
//     }
//     return -1
// }

// let res =  lSearch(arr,6)
// console.log(res);

// let arr = [2,3,4,2,3,5,3]

// function lowest(arr){
//     let min = arr[0]
//     for(let i =0; i<arr.length;i++){
//         if(arr[i]<min){
//             min = arr[i]
            
//         }
        
//     }

//     return min;
// }

// let res = lowest(arr)

// console.log(res);



let arr = [1,0,20,4,0,6]
function moveZero(arr){
   
    let nonZeroI = 0

    for(let i =0;i<arr.length;i++){
        if(arr[i] !== 0){
            let temp = arr[nonZeroI]
            arr[nonZeroI] = arr[i];
            arr[i] = temp
            nonZeroI ++;

        }


    }
    return arr;

}

console.log(moveZero(arr));


function removeDupli(arr){
    let result = []

    for(let i= 0;i<arr.length;i++){
        let isDupli = false;

        for(let j =0;j<result.length;j++){
            if(arr[i] === result[j]){
                isDupli = true;
                break;
            }
        }
        if(isDupli !== true){
            result.push(arr[i]) 
        }
    }
    return result
}

console.log(removeDupli(arr));



function isSorted(arr){
    for(let i=1;i<arr.length;i++){
        if(arr[i] < arr[i-1]){
            return false
        }
           
    }
    return true

}
let arr1 = [1,2,3,4,5,6,7]
console.log(isSorted(arr1));


let arr2=[1,2,0,0,5,0,4,9,0]
function mZero(arr2){
    let result = [];
    zcount = 0;

    for(let i=0;i<arr2.length;i++){
        if(arr2[i]===0){
            zcount++
        }else{
            result.push(arr2[i])
        }
    }

    for(let i=0;i<zcount;i++){
        result.push(0)
    }
    return result

}

console.log("zeeeeee",mZero(arr2));