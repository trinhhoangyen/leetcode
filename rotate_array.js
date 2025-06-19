function test(){
  function changeValue(employee) {
    var newEmployee = {...employee};
    newEmployee.age = 25;
    return newEmployee;
  }

  var yen = { name: "yiyi", age: 24 };
  var yenChange = changeValue(yen);
  console.log(yen);       // { name: "yiyi", age: 24}
  console.log(yenChange); // { name: "yiyi", age: 25}
}

test();