/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {

    let value = index(nums, 0, nums.length-1, target)
    return value;
    
};

function index(arr, low, high, value) {

    let mid = Math.floor((low+high)/2);
    if(arr[mid] ==value){
        return mid;
    }
    if(low == high || low > high){
        if(value<arr[high])
        return high
        else
           high+1;
    }

    
    if(value<arr[mid]){
        high = mid;
    }
     if(value>arr[mid]){
        low = mid+1;
    }
    return index(arr,low,high, value)

}

console.log(searchInsert([1,3,5,6], 7))
//console.log(searchInsert([1,3,5,6], 2))
//console.log(searchInsert([1,3,5,6], 5))