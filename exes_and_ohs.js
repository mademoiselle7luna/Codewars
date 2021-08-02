// https://www.codewars.com/kata/55908aad6620c066bc00002a
function XO(str) {
    let o_counter = 0;
    let x_counter = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] == 'o' || str[i] == 'O') {
            o_counter++;
        }
        if (str[i] == 'x' || str[i] == 'X') {
            x_counter++;
        }
    }
    return o_counter == x_counter;
}