

function countDigit(num){
    if(num === 0) return 0;
    return 1 + countDigit(Math.floor(num/10));
}

console.log((countDigit(123456)));