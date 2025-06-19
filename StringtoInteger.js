var myAtoi = function (str) {
    str = str.trim().split(/\s+/);
    let s = parseInt(str[0]);
    if (s < -2147483648) return -2147483648;
    if (s > 2147483647) return 2147483647;
    return Number.isNaN(s) ? 0 : s;
};

console.log(myAtoi(' -'))