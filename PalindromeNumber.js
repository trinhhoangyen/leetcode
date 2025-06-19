var isPalindrome = function (x) {
    let s = 0;
    let tam = x;
    while (x > 0) {
        let i = x % 10;
        s = s * 10 + i;
        x = parseInt(x / 10);
    }
    return s == tam;
};

console.log(isPalindrome(01))