

function fibonacci(n) {
    // Write your code here
    if( n < 2) return [0];
    var arr = [0, 1];
    var i = 1;
    while (arr.length < n) {
      if (i == arr[arr.length - 1] + arr[arr.length - 2]) 
        arr[arr.length] = i;
      i++;
    }
  return arr;
}

 console.log(fibonacci(30))
