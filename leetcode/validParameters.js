/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {

    let map = {
          '(':')',
           '[':']',
            '{':'}'
    }

    let stack = [];

    for(let i=0;i< s.length;i++){

        if(s[i] == '(' || s[i]== '[' || s[i]== '{') {
            stack.push(s[i])
        }
        if(s[i]== ')'|| s[i]== '}'|| s[i]== ']'){
            let pop = stack.pop();
            if(map[pop] != s[i]){
                return false;
            }

        }
          
    }
    if(stack.length) return false;
    return true
    
};

isValid('(]');