

function factorial(n){

    if(n<=1){
        return 1;
    }
   
     return n*factorial(n-1);
    
}
console.log(factorial(5));





function fact(n){
    if(n<=1){
        return 1
    }

    return n *fact(n-1)
}


function fibo(n){
    if(n<=0){
        return 0
    }
    if(n===1){
        return 1
    }
    return fibo(n-1) * fibo(n-2)
}


function prime(n,d=2){
    if(n<=2){
        return n === 2

    }
    if(n%d ===0){
        return false
    }
    if(d * d > n){
        return true
    }

    return prime(n,d+1)
}

console.log(prime(11));



