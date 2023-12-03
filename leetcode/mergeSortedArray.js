var mergeTwoLists = function(nums1, nums2) {
    
    let arr = [];
    let i =0, j=0;

    while(i< nums1.length && j< nums2.length){
        if(nums1[i]<nums2[j]){
            arr.push(nums1[i]); i++;
        } else if(nums1[j]<nums2[i]){
            arr.push(nums1[j]); j++;
        }
        
    }

    while(i< nums1.length){
         arr.push(nums1[i]); i++;
    }
     while(j< nums2.length){
         arr.push(nums1[j]); j++;
    }

    return arr;
};