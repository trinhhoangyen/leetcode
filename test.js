const isClosing = char => [')', ']', '}'].includes(char);

const getOppositeTo = {
    '(': ')',
    '{': '}',
    '[': ']',
    'C': 100,
    'D': 500,
    'M': 1000
}
var isValid = function (s) {
    if (s === "") {
        return true;
    }

    const input = s.split("");

    if (input.length % 2 !== 0) {
        return false;
    }
    const stack = [];

    for (let i = 0; i < input.length; i++) {
        const character = input[i];
        if (isClosing(character)) {
            const lastChar = stack.pop();
            console.log(getOppositeTo['C'])
            if (getOppositeTo[lastChar] !== character) {
                return false;
            }
        } else {
            stack.push(character);
        }
    }

    if (stack.length > 0) {
        return false;
    }
    return true;
};

console.log(isValid('(){}'))