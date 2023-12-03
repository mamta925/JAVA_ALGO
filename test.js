
function breakPalindrome(palindrome) {
    if(palindrome.length===1 && palindrome[0]=='a'){
        return "IMPOSSIBLE";
    }
    if(palindrome.length===1){
        return "";
    }
 for(let i=0;i<Math.floor(palindrome.length/2);++i){
     if(palindrome[i]!='a'){
         return palindrome.substr(0,i)+'a'+palindrome.substr(i+1);
     }
 }
 return "IMPOSSIBLE";
 // palindrome.substr(0,palindrome.length-1)+'b';
 
 }

 console.log(breakPalindrome("aaabbaaa"))