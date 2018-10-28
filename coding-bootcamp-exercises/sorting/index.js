// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

// Note: used for loops here to get access to index and elements. For of loops are used to apply
// operations on each individual element

// O(n^2)
function bubbleSort(arr) {
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < (arr.length - i - 1); j++){
            if(arr[j] > arr[j + 1]){
                const lesserValue = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = lesser;
            }
        }
    }

    return arr;
}

// O(n^2)
function selectionSort(arr) {

}

// O(n * log(n))
function mergeSort(arr) {

}

function merge(left, right) {

}

module.exports = { bubbleSort, selectionSort, mergeSort };
