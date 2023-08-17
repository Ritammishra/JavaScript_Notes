const accountId = 144553;
let accoundEmail = "ritam@gmail.com"
var accountPasswrod = "12345"
accountCity = "Kolkata"
let accountState;

// accountId = 2  not allow

accoundEmail = "ritam@maishra"
accountPasswrod = "75668"
accountCity = "wb"


console.log(accountId);

/*   
prefer not to use var
becasue of issue in block scope and functional scope
*/

console.table([accoundEmail, accountId, accountPasswrod, accountState]);