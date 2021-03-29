/**
 * String
 */
var message:string|number;

message="Test";

/**
 * Number
 */

var age: number;
age=15;

/**
 * Boolean
 */

var trueOrFalse:boolean;
trueOrFalse =false;

/**
 * Any
 * Cualquier tipo de dato
 */

var anyTypeofData:any;
anyTypeofData = false;

/**
 * Arrays
 */
var languajes: Array<string>;
languajes=["PHP","TypeScript","Java"];

var numbers: number[];
numbers = [12,5,20,7];

/**
 * Crear tipos de datos
 * type nombre de variable = tipodeDato
 */

type alphanumeric = string|number;

var test:alphanumeric;
test = "15";

console.log(message, age, trueOrFalse, anyTypeofData, languajes, numbers, test);
console.log("Tipo de dato de Test: "+typeof(test));

/**
 * let vs var
 */

var num1 = 10;
var num2 = 12;

if (num1==10) {
    let num1 = 44;
    var num2 = 55;

    console.log(num1, num2);
}

console.log(num1, num2);

