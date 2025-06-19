'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}



/*
 * Complete the 'fizzBuzz' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function fizzBuzz(n) {
    // Write your code here
    var arr = [];
    for(var i = 1; i <= n & n > 0 && n < 2*Math.pow(10,5); i++)
        if(i % 3 == 0 && i % 5 == 0)
            arr[i] = 'FizzBuzz';
        else if(i % 3 == 0)
                arr[i] = 'Fizz';
            else if (i % 5 == 0)
                    arr[i] = 'Buzz';
                else arr[i] = i;
    for(var j = 1; j <= n; j++)
        console.log(arr[j])
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    fizzBuzz(n);
}