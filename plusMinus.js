function plusMinus(arr, n) {
    var positiveCount = 0, negativeCount = 0, zeroCount = 0;
    for(var i = 0; i< n; i++){
        if(arr[i] === 0){
            zeroCount++;
        }else if(arr[i] < 0 ){
            negativeCount++;
        }else{
            positiveCount++;
        }
    }
    console.log((positiveCount/n).toFixed(6));
    console.log((negativeCount/n).toFixed(6));
    console.log((zeroCount/n).toFixed(6));
}
var arr = [5,6,4,0,-2,4,-5,2];
n = arr.length;
plusMinus(arr, n);
