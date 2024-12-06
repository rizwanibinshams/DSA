


function findWovels(str){
 let wovels = ['a', 'e', 'i', 'o', 'u']
 let count = 0;

 for(let i = 0; i<str.length;i++){
    if(wovels.includes(str[i])){
        count++
    }
 }
 console.log(`There are ${count} Number of Wovels letters`);
}

  let str = "helloi"

  findWovels(str)