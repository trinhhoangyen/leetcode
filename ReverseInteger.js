var reverse = function (x) {
    var res = 0;
    var flag = Math.sign(x);
    if (x < 0) {
        flag = -1;
        x *= flag;
    }
    while (x > 0) {
        var tam = x % 10;
        res = res * 10 + tam;
        x = parseInt(x / 10);
    }
    res *= flag;
    if (res > Math.pow(2, 31) - 1 || res < -Math.pow(2, 31))
        return 0;
    return res;
};

console.log(reverse(123))