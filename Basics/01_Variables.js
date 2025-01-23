const accountId = 144553
let accountEmail = "abc"
var password = "12345" // var had problems with scope, so use let
city = "Pune" // don't use this
let state;

// accountId = 2 // Not Allowed
console.log(accountId);
accountEmail = "xyz"
password = "2531"
city = "Mumbai"

console.table([accountEmail, password, city], state)