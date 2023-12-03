var removeDuplicates = function(nums) {

    let obj = {};
    let j =0;

    for(let i=0; i<nums.length;i++){
        if(!obj.hasProperty([nums[i]])){
               obj[nums[i]] = nums[i];
            nums[j] = nums[i];
            j++;     
        }
    }
    console.log(nums)
    return j;
};
removeDuplicates([0,0,1,1,1,2,2,3,3,4]);