/**
 * String
 */
var message;
message = "Test";
/**
 * Number
 */
var age;
age = 15;
/**
 * Boolean
 */
var trueOrFalse;
trueOrFalse = false;
/**
 * Any
 * Cualquier tipo de dato
 */
var anyTypeofData;
anyTypeofData = false;
/**
 * Arrays
 */
var languajes;
languajes = ["PHP", "TypeScript", "Java"];
var numbers;
numbers = [12, 5, 20, 7];
var test;
test = "15";
console.log(message, age, trueOrFalse, anyTypeofData, languajes, numbers, test);
console.log("Tipo de dato de Test: " + typeof (test));
/**
 * let vs var
 */
var num1 = 10;
var num2 = 12;
if (num1 == 10) {
    var num1_1 = 44;
    var num2 = 55;
    console.log(num1_1, num2);
}
console.log(num1, num2);
