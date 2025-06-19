var checkPerfectNumber = function (num) {
    let i = parseInt(num / 2);
    let res = 0;
    while (i > 0 && res < num) {
        if (num % i === 0) res += i;
        i--;
    }
    if (res === num)
        return true;
    return false;
};

console.log(checkPerfectNumber(0))