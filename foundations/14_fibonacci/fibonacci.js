const fibonacci = function(num) {
    pos = Number(num);
    if(pos<0) return 'OOPS';
    return fib_helper(pos);
};
const fib_helper = function(pos){
    let arr=[];
    arr.push(0);
    arr.push(1);
    for(let i = 2;i<=pos;i++){
        arr.push(arr[i-1]+arr[i-2]);
    }
    return arr[pos];
}
// Do not edit below this line
module.exports = fibonacci;
