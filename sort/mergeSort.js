

function mergeSort(arr){
    if(arr.length <= 1){
        return arr;
    }

    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0,mid);
    const right = arr.slice(mid);


    const sortedLeft = mergeSort(left);
    const sortedRight = mergeSort(right);

    return merge(sortedLeft,sortedRight)
}

function merge(left,right){
    const result = [];

    let i = 0;
    let j = 0;

    while(i<left.length && j<right.length){
        if(left[i] < right[j]){
            result.push(left[i]);
            i++;
        }else{
            result.push(right[j]);
            j++;
        }
    }

    while(i <left.length){
        result.push(left[i]);
        i++
    }

    while(j < right.length){
        result.push(right[j])
        j++
    }

    return result;
}

let data = [38, 27, 43, 3, 9, 82, 10];
console.log("Sorted Array:", mergeSort(data));





function mergeSort1(arr) {
    if (arr.length <= 1) return arr; // Base case: A single element is already sorted

    const mid = Math.floor(arr.length / 2); // Find the middle
    const left = mergeSort1(arr.slice(0, mid)); // Sort the left half
    const right = mergeSort1(arr.slice(mid));  // Sort the right half

    return merge1(left, right); // Merge the sorted halves
}

function merge1(left, right) {
    const result = [];
    let i = 0, j = 0;

    // Compare and merge elements from both arrays
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    // Add remaining elements from either array
    return result.concat(left.slice(i)).concat(right.slice(j));
}

// Example usage
let data1 = [5, 3, 8, 6, 2, 7, 4, 1];
console.log("Sorted Array:", mergeSort1(data1));
