var capitals = function (word) {
    var ns = [];
    for (var i = 0; i < word.length; i++) {
        if (word.charCodeAt(i) >= 65 && word.charCodeAt(i) <= 90) {
            ns.push(i);
        }
    }
    return ns;
};