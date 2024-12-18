


function objToString(obj){
    return Object.keys(obj).map(key=> `${key} = ${obj[key]}`).join("&")
}

let obj = {
    name:"rizwan",
    age:22
}

console.log(objToString(obj));
//out => name = rizwan&age = 22