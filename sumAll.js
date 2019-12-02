const sumAll = function(a, b) {
    if (a == b) return a; 
    let sum = 0;
    for(i=((a<b)?a:b);i<=((a<b)?b:a);i++)sum+=i; 
        return sum;
    }
        
sumAll(1, 4); 
sumAll(1, 4000); 
sumAll(123,1); 

module.exports = sumAll
