function arithmetic(a, b, operator) {
    let result = 0;
    if (operator == "add") {
        result = a + b;
    }
    else if (operator == "subtract") {
        result = a - b;
    }
    else if (operator == "multiply") {
        result = a * b;
    }
    else if (operator == "divide") {
        result = a / b;
    }
    return result;
}