function well(x) {
    let result = "";
    let count = 0;

    for (let i = 0; i < x.length; i++) {
        if (x[i] === "good") {
            count++;
        }
    }
    switch (count) {
        case 0:
            result = "Fail!";
            break;
        case 1:
        case 2:
            result = "Publish!";
            break;
        default:
            result = "I smell a series!";
            break;
    }
    return result;
}