const reverseString = function(str) {
    let message = "";
    for (i = 0; i <= str.length; i++){
        message += str.slice(str.length - i,str.length - (i-1));
    }
    return message;
};

// Do not edit below this line
module.exports = reverseString;
