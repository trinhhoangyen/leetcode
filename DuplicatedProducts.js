'use strict';

const fs = require('fs');

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
 * Complete the 'numDuplicates' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. STRING_ARRAY name
 *  2. INTEGER_ARRAY price
 *  3. INTEGER_ARRAY weight
 */

function numDuplicates(name, price, weight) {
    // Write your code here
    var count = 0;
    if(name.length != price.length || name.length != weight.length)
        return count;
    for(var i = 0; i < name.length -1; i++){
        var loop = [];
        var loopIndex = 0;
        for(var j = i+1; j <= name.length; j++)
            if(name[i] == name[j] && price[i] == price[j] && weight[i] == weight[j])
            {
                count++; 
                loop[loopIndex++] = j;
            }
        for(var a = loop.length-1; a >= 0; a--)
        {
            name.splice(loop[a], 1);
            price.splice(loop[a], 1);
            weight.splice(loop[a], 1);
        }
    }
   return count;
}
