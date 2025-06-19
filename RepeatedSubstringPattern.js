var repeatedSubstringPattern = function (s) {
    if (s.length > 10000 || s.length <= 0) return false;
    let i = s.length - 1;
    while (i > 0) {
        let sub = s.substring(0, i);
        console.log(sub)
        console.log(s.indexOf(sub) + " - " + s.lastIndexOf(sub))
        if (s.indexOf(sub) !== s.lastIndexOf(sub) && s.indexOf(sub) + sub.length <= s.lastIndexOf(sub)) {
            while (s.indexOf(sub) >= 0)
                s = s.replace(sub, '');
            i = s.length - 1;
            console.log('sau cat: ' + s)
        }
        if (sub.indexOf(s) >= 0 && s.length % 2 === 0)
            s = '';
        i--;
    }
    return s == '' ? true : false;
};

console.log(repeatedSubstringPattern('babbabbabbabbab'));