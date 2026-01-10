var varString = "Це рядок";
var varNumber = 123;
var varBoolean = true;
var varObject = { name: "Іван" };
var varArray = [1, 2, 3]; 
var varFunction = function() { return "Я функція"; };
var varNull = null;
var varUndefined = undefined;

console.log("'" + varString + "' \t-> тип: " + typeof varString);
console.log(varNumber + " \t\t\t-> тип: " + typeof varNumber);
console.log(varBoolean + " \t\t\t-> тип: " + typeof varBoolean);
console.log("{ name: 'Іван' } \t-> тип: " + typeof varObject);
console.log("[1, 2, 3] \t\t-> тип: " + typeof varArray);
console.log("function() {} \t-> тип: " + typeof varFunction);
console.log(varNull + " \t\t\t-> тип: " + typeof varNull);
console.log(varUndefined + " \t\t-> тип: " + typeof varUndefined);

console.log("\n");
console.log("--- Завдання 2: Зміна типів ---");

let myNumber = 42;
let myString = "123";

myNumber = String(myNumber); 
myString = Number(myString); 

console.log(`myNumber = "${myNumber}" (${typeof myNumber}), myString = ${myString} (${typeof myString})`);

console.log("\n");

let num = 100;
let str = "100";

console.log(`num == str  (100 == "100"): ${num == str}`);// true

console.log(`num === str (100 === "100"): ${num === str}`); // false

console.log("\n");

let secretData = 2;
let secretKey = 3;

console.log(`Оригінальні дані: ${secretData}`);

let encryptedData = secretData ^ secretKey;
console.log(`Зашифровано: ${encryptedData}`);

let decryptedData = encryptedData ^ secretKey;
console.log(`Дешифровано: ${decryptedData}`);