const quarterOf = (month) => { // 1 - 3, 4 - 6, 7 - 9, 10 - 12
    let result = 0;

    if (month < 4) {
        result = 1;
    }
    else if (month > 3 && month < 7) {
        result = 2;
    }
    else if (month > 6 && month < 10) {
        result = 3;
    }
    else if (month > 9 && month < 13) {
        result = 4;
    }
    return result;
}