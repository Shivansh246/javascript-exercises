const removeFromArray = function(arr,...args) {
    for(eachArg of args){
        arr=arr.filter(ele=> ele!==eachArg);
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
