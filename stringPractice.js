function reverseString(str) {
    let reversed = '';
    for (i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
  }
   
  function numbersInEachWord(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        let currentChar = str[i];
        let currentIndex = i + 1;
        result += currentChar + currentIndex;
    }
    return result;
  }
   
   
  function findWovels(str) {
    let wovels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    for (i = 0; i < str.length; i++) {
        if (wovels.includes(str[i].toLowerCase())) {
            count++
        }
    }
    console.log(`There are ${count} Number of Wovels letters`);
  }


   
   
  function findVowels(str) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let words = []
   
    for (i = 0; i < str.length; i++) {
        let char = str[i];
   
        for (j = 0; j < vowels.length; j++) {
            if (char === vowels[j] || char === vowels[j].toUpperCase()) {
                words.push(vowels[j])
            }
        }
    }
   
    return words;
  }
   
   
  function compressString(str) {
    let compressed = '';
    let count = 1;
   
    for (i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1]) {
            count++;
        } else {
            compressed += str[i] + count;
        }
    }
   
    return compressed;
  }
   
   
   
  let str = 'aaaaabbbbbbeeeegggghhh'
  let compressedString = compressString(str);
  console.log(compressedString)
   