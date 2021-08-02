function descendingOrder(n) {
    var to_string = n.toString();
    var splited = to_string.split('');
    var sorted = splited.sort().reverse().join('');

    return parseInt(sorted);

}