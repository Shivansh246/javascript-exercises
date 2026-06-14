const palindromes = function (str) {
    newStr = str.toLowerCase();
    newStr = newStr.replace(/[^a-zA-Z0-9]/g,"");
    console.log(newStr+"\n");
    let start = 0,end = newStr.length-1;
    while(start<end){
        if(newStr.at(start) != newStr.at(end))return false;
        start++;
        end--;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
