// calculadora //

let a = 5;
let b = 5;
console.log (a+b);
b=0;
console.log (a+b);

let suma=(a+b);
let resta=(a-b);
let multiplicacion=(a*b);
let division=(a/b);

console.log(suma);
console.log(resta);
console.log(multiplicacion);
console.log(division);

if(b==0){
    console.log("la division por cero no esta permitida");
}else{
    console.log(a/b);
}

// incia ejercisio de fibonacci //

let anterior = 0; 
let actual = 1; 
let sumafib;


for (let i = 1; i <= 10; i++) {
    console.log(anterior);
    sumafib = anterior + actual;
    anterior = actual;
    actual = sumafib;
}
