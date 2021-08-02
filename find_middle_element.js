function compare(a, b) {
    return a > b;
}

var gimme = function (inputArray) {
    var copied = [];

    for (var i = 0; i < inputArray.length; i++) {
        copied.push(inputArray[i]);
    }

    copied.sort((a, b) => a > b);

    return inputArray.indexOf(copied[1]);
};