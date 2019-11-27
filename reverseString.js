const reverseString = function() {
    let str = "hello"; 
    let reversed = ""; 

    for (var i = str.length - 1; i >= 0; i--) { 
        reversed += str[i]; 
    } 
    return reversed;
} //this would satisfy the first test using a for loop however, fails 2 out of 3 specs in the test 

module.exports = reverseString
