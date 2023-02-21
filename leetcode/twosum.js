var twoSum = function(nums, target) {
    for(let i=0; i< nums.length; i++){
          for(let j=i+1; j< nums.length; j++){
              if(nums[i]+nums[j] == target){
                  return [i,j]
              }
    }
    }
};

twoSum([3,2,4],6)

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    let map = new Map();

    for(let i=0;i<nums.length;i++){
        if(map.has(target - nums[i])){
            return [map.get(target - nums[i]), i]
        }else{
            map.set(nums[i],i)
        }
    }
};