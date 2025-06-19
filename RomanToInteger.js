var romanToInt = function (s) {
    const getValue = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    let result = 0;
    for (let i = 0; i < s.length; i++) {
        if (getValue[s[i]] < getValue[s[i + 1]]) {
            result += getValue[s[i + 1]] - getValue[s[i]]; i++;
        } else result += getValue[s[i]]
    }
    return result;
}

var r = romanToInt('MCMXCIV');
console.log(r)