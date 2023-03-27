// crea cuatro funciones sum, rest, mult, div que realicen las operaciones suma, resta, multiplicacion y division de dos numeros num1 y num2

function sum (num1, num2) {
  return num1 + num2;
}

function rest (num1, num2) {
  return num1 - num2;
}

function mult (num1, num2) {
  return num1 * num2;
}

function div (num1, num2) {
  return num1 / num2;  
}

function calc(num1, num2, callback) {
	return callback(num1,num2);
}

console.log(calc(2,3,sum))

setTimeout(function () {
	console.log("Hola JavaScript")
}, 2000)

function grettin(name) {
	console.log(`Hola ${name}`)
}

setTimeout(grettin, 2000, "Luis")