const repeatString = function(str, num) {
    let message = '';
    if (num < 0 ) {
        return 'ERROR';
    }
    for (i = 0;i < num; i++){
        message += str;
    }
    return message;
};

// Do not edit below this line
module.exports = repeatString;
