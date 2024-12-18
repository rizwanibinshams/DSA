

function bubbleSort(arr){
    let n = arr.length;

    for(let i=0;i<n;i++){
        let swapped = false;
        console.log(`Pass ${i + 1}:`);
        for(let j =0;j<n-i-1;j++){
            if(arr[j]>arr[j+1]){
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
                swapped = true;
            }
            console.log(`  Comparing: ${arr}`);
        }
        if(!swapped){
            break;
        }
    }
    return arr;
}

let arr = [5,3,7,8,1,4]

console.log(bubbleSort(arr));




function bS(arr){
    let n = arr.length ;

    for(let i= 0;i<n;i++){
        let swapp = false;
        let temp = [];
        for(let j=0;j<n-i-1;j++){
            if(arr[j]>arr[j+1]){
                temp  = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                swapp = true;

            }
        }
        if(swapp == false){
            break;
        }
    }
    return arr;
}

let data = [5,3,2,1,5,7,9]

console.log(bS(data));