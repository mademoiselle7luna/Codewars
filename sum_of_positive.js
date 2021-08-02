//https://www.codewars.com/kata/5715eaedb436cf5606000381

function positiveSum(arr) {
    var result = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0)
            result += arr[i];
    }
    return result;
}