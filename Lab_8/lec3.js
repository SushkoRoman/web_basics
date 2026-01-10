
let x = 10;
let y = 5;
let z = "10";
let obj = { prop: "test" };


console.log("Унарні:");
console.log(typeof x); 
console.log(-y); 
x++; 
console.log(x);
delete obj.prop; 
console.log(obj); 
console.log(!true); 


console.log("\nБінарні:");
console.log(x + y);
console.log("Привіт" + " " + "світ");
console.log(x > y);
console.log(y = 20); 
console.log(x == z); 
console.log(x === z);
console.log(true  false); 


console.log("\nТернарний:");
let result = (y > 10) ? "Більше 10" : "Менше або дорівнює 10";
console.log(result);

console.log("\n");


console.log("--- Завдання 2: concat() ---");

let line1 = "Нехай завжди буде сонце,";
let line2 = "Нехай завжди буде небо,";
let line3 = "Нехай завжди буде мама,";
let line4 = "Нехай завжди буду я.";
let newline = "\n"; 

let poem = line1.concat(newline, line2, newline, line3, newline, line4);

console.log(poem);

console.log("\n");