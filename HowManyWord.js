function howMany(sentence) {
    // Write your code here
    sentence = sentence.trim().replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, ' '); console.log(sentence)
    var count = 0;
    if(sentence != ''){
        var tam = sentence.charCodeAt(0);
        var i = 0;
        if( (tam >= 65 && tam <= 90) || (tam >= 97 && tam <= 122) ){
            count = 1;
            i = sentence.indexOf(' ');
        }
        for( var j = i; j < sentence.length; j++){
            if(sentence.charCodeAt(j) == 32 ){
                var codeAt = sentence.charCodeAt(j+1);
                if( (codeAt >= 65 && codeAt <= 90) || (codeAt >= 97 && codeAt <= 122))
                {
                    count ++;
                }
            }
        }
    }
    return count;
}

console.log(howMany('  he is a good /// ,progr5ammer  // . . goof-go '))
