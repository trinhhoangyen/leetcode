var isValid = function (s) {
    if (s.length % 2 !== 0)
        return false;
    while (s != '') {
        if (s.indexOf('[]') < 0 && s.indexOf('()') < 0 && s.indexOf('{}') < 0) return false;
        s = s.replace('[]', '');
        s = s.replace('()', '');
        s = s.replace('{}', '');
    }
    return true;
};
console.log(isValid("(){}"))