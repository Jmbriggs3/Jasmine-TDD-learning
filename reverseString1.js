const reverseString = function(str) {
   return str.split("").reverse(),join("");
} //chaining split,reverse and join methods to reverse a string in JS

reverseString("hello"); 
reverseString("hello there");
reverseString("123! abc!");


module.exports = reverseString
