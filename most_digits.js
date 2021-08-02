function findLongest(array) {
    var longest = 0;
    var maxLength = 0;

    for (var i = 0; i < array.length; i++) {
        let length = array[i].toString().length;

        if (length > maxLength) {
            longest = array[i];
            maxLength = length;
        }
    }
    return longest;
}