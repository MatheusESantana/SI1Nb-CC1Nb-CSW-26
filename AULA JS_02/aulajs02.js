var x = 10;

if (x > 5) {
    console.log("x é maior que 5");
} else if (x === 5) {

    console.log("x é igual a 5");
} else {

    console.log("x é menor que 5");
}


for (var i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

for (var x = 0; x <= 10; x += 2) {
    console.log(x);
}



for (let i = 0; i < 5; i++) {
    console.log(i);
    console.log(i * 2);
}

for (let i = 0; i < 5; i++) {
    console.log(i * 2 + 1);
}

//Imprimindo os ímpares com while

let j = 0
do {
    console.log(j * 2 + 1)
    j++
}
while
    ((console.log(j * 2 + 1)) < 5);


var IssoEUmaString = "Isso é uma String";
let IssoEumNumero = 42;
const IssoEumBooleano = true;
let issoTambemEUmaString = "42";

if (IssoEumNumero == issoTambemEUmaString) {
    console.log("As strings são iguais");
}
else {
    console.log("As strings são diferentes");
}

if (IssoEumNumero === issoTambemEUmaString) {
    console.log("As strings são iguais");
}

else {
    console.log("As strings são diferentes");
}

console.log(IssoEumNumero + issoTambemEUmaString)

console.log(IssoEumNumero + IssoEumNumero)

var issoEumaGlobal = "Eu sou uma variável global";

{
    let IssoEumaLocal = "Eu sou uma variável local";
    console.log(issoEumaGlobal);
    console.log(IssoEumaLocal);
}

let floatvalue1 = 0.06;
let floatvalue2 = 0.01;
let sum = floatvalue1 + floatvalue2

console.log(floatvalue1 + floatvalue2)
console.log(sum.toPrecision(2))

console.log(Math.E)


function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++)
    {
        if (num % i === 0) return verdadeiro;
    }
    return true;
}

for (let i = 1; i <= 100; i++)
{
    isPrime? console.log(i) :
}



