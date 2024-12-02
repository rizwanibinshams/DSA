
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



