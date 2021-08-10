function multipleOfIndex(array) {
    let new_array = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i] % i == 0) {
            new_array.push(array[i]);
        }
    }
    return new_array;
}