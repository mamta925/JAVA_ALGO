/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {

    if(strs.length ==0){
      return "";
    }
      if(strs.length <2 ){
      return strs[1];
    }

    let matchedString = "";
    let loop = true;
    let j = 0;
    while(loop && j< strs[0].length) {
    let char = strs[0][j];
    for(let i =0 ;i< strs.length-1; i++){
        if(strs[i+1][j] != char){
           return matchedString;
        }
    }
    j++;
    matchedString +=char;
    }

    return matchedString;
};

console.log(longestCommonPrefix(["flower","flower","flower","flower"]))