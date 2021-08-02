//https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9
var number = function (array) {
    var new_array = [];
    for (var i = 0; i < array.length; i++) {
        // new_array.push((i+1) + ": " + array[i]);
        var zmienna = (i + 1) + ": " + array[i];
        new_array.push(zmienna);
    }
    return new_array;
}