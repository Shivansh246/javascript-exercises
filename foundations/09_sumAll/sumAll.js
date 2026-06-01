const sumAll = function(a,b) {
    if(!(Number.isInteger(a) && Number.isInteger(b))) return 'ERROR';
    if(a<0 || b<0) return 'ERROR';

    let [small,large]=a>b?[b,a]:[a,b];
    let sum=0;
    for(let i=small;i<=large;i++){
        sum+=i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
