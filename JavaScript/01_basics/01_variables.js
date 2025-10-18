const accountId = 1445553;
let accountEmail = "hitesh@google.com";
var accountPassword = "12345";
accountCity = "Jaipur";
let accountState;

// accountId = 2  // This would cause an error since accountId is const

accountEmail = "hc@hc.com";
accountPassword = "21212121";
accountCity = "Bengaluru";

/*
Prefer not to use var because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity]);

console.log(accountState)
