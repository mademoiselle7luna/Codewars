function noSpace(x) {
    return x.replace(/\s/g, '');
    // \s is the regex for "whitespace", and g is the "global" flag, meaning match ALL \s (whitespaces).
}