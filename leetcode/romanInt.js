/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {

    let value = {
        I     :        1,
        V         :    5,
        X        :     10,
        L        :     50,
        C        :     100,
        D       :      500,
        M       :      1000   
    }
    let result = 0
    for(let i=0; i< s.length; i++){
            if(s[i] == 'I'){
                if(i == s.length-1){
                    result+=1;
                    continue;
                } else if(s[i+1] == 'V') {
                    result+= 4;
                    i++;
                    continue;
                }
                else if(s[i+1] == 'X'){
                    result+= 9;
                    i++;
                    continue;
                } else {
                    result+=1;
                    continue;  
                }
            }
            if(s[i] == 'X'){
                    if(i == s.length-1){
                        result+=10;
                        continue;
                    } else if(s[i+1] == 'L') {
                        result+= 40;
                        i++;
                        continue;
                    }
                    else if(s[i+1] == 'C'){
                        result+= 90;
                        i++;
                        continue;
                    } else {
                        result+=10;
                        continue;
                    }
            }
            if(s[i] == 'L'){
                       
                            result+=50;
                            continue;
    
            }
          if(s[i] == 'C'){
                            if(i == s.length-1){
                                result+=100;
                                continue;
                            } else if(s[i+1] == 'D') {
                                result+= 400;
                                i++;
                                continue;
                            }
                            else if(s[i+1] == 'M'){
                                result+= 900;
                                i++;
                                continue;
                            }else {
                                result+=100;
                                continue;
                            }
                            }
                            if(s[i] == 'D'){
                                    result+=500;
                                    continue;
                             
                                }
                                if(s[i] == 'M'){
                                    result+=1000;
                                    continue;
                             
                                }
                                if(value[s[i]]){
                                    result+=value[s[i]];
                                    continue;
                                }
            }
            return result;
      
    
};


console.log(romanToInt('XCVII')) //97

