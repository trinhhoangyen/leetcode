/**
 * @param {number[]} digits
 * @return {number[]}
 */

var plusOne = function (digits) {
    var l = digits.length
    if (l > 0) {
        var i = 1;
        digits[l - i] += 1;
        console.log(digits[l - i])
        while (digits[l - i] % 10 === 0 && i <= l) {
            if (i == l) {
                digits[0] = 0;
                digits.unshift(1);
            }
            else {
                digits[l - i] = 0;
                digits[l - i - 1] += 1;
                i++;
            }
        }
    }
    return digits;
};

var arr = [9, 9]
console.log(plusOne(arr))

