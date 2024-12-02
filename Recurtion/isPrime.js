

// function isPrime(n,divisor=2){
//     if(n<=2){
//         return n===2
//     }
//     if(n%divisor === 0){
//         return false
//     }
//     if(divisor * divisor > n){
//         return true
//     }
//     return isPrime(n,divisor+1)
// }

// console.log(isPrime(10));
// console.log(isPrime(11));
//space and time complexity is O(√n)

//print prime number

function isPrime(n){
    if(n<=2){
        return false
    }
    for(let i = 2; i*i <= n;i++){
        if( n % i === 0){
            return false
        }
        return true;
    }
}


function printPrime(limit){
    for(let i =2 ; i<=limit;i++){
        if(isPrime(i)){
            console.log(i);
        }
    }
}

printPrime(20)