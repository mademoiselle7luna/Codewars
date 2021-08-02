function factorial(n) {
    let f_result = 1;
    for (let i = n; i >= 1; i--) {
        f_result *= i;
    }
    return f_result;
}