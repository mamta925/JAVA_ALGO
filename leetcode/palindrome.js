// /**
//  * @param {number} x
//  * @return {boolean}
//  */
var isPalindrome = function(x) {
    let value = x.toString();
    let start = 0, end = value.length-1;

    while(start<end){
        if(value[start]== value[end]){
            start++;
            end--;
        } else {
            return false;
        }
    }
    if(start>=end){
        return true
    }
    return false;
    
};
/**
 * @param {number} x
 * @return {boolean}
 */
//  var isPalindrome = function(x) {
//     let n = x;
//     let count = 0;
//     while(n>0){
//          count++;
//          n = Math.floor(n/10);
//     }
//     console.log(count)
//     return count
    
// };

// var isPalindrome = function(x) {

//     return x < 0 ? false : (x == x.toString().split("").reverse().join(""));
     
//  };
     

console.log(isPalindrome(121))
// /**
//  * @param {number} x
//  * @return {boolean}
//  */
//  var isPalindrome = function(x) {
//     let n=x
//     let n1=0;
//     while(n>0){
//         n1=(n1*10)+(n%10)
//         n=Math.floor(n/10)
//     }
//     if(n1==x)
//       {
//           return true
//       }
//  return false
    
//  };

//  /**
//  * @param {number} x
//  * @return {boolean}
//  */
// var isPalindrome = function(x) {
//     //guess if it's a uni digit  integer, it's automatically a palindrome
//     if(x < 0 || (x % 10 == 0 && x != 0)) {
//         return false;
//     }
    
//     if(x.toString().split('').reverse().join('') === x.toString())
//     {
//         return true
//     }else{
//         return false
//     }
    
// };