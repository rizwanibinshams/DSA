

function reverseString(str){
    if(str.length===0) return "";
    return str[str.length -1] + reverseString(str.slice(0,-1))
}

console.log(reverseString("hello"));