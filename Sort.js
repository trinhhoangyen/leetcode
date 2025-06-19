function Sort(items) {
  var arr = [];
  for (var i = 0; i < items.length - 1; i++)
    for (var j = i + 1; j < items.length; j++)
      if (items[i] > items[j]) {
        var tam = items[i];
        items[i] = items[j];
        items[j] = tam;
      } 
      else if (items[i] == items[j]) arr[items[i]] += 1;

  for (var i = 0; i < arr.length; i++)
    if (arr[i] > 0)
      while (items.indexOf(arr[i]) > 0) items.slice(items.indexOf(arr[i]), 1);

  var itemsLength = items.length;
  for (var i = 0; i < arr.length; i++)
    while (arr[i] > 0) {
      items[itemsLength++] = i;
      arr[i] -= 1;
    }
  return items;
}

console.log(Sort([1, 2, 8, 2]));
