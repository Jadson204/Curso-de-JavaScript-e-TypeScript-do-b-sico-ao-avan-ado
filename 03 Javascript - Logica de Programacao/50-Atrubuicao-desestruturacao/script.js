// .. rest, ... spread
const numeros = [1, 2 ,3 ,4, 5, 6, 7, 8, 9];
const [um, dois, tres, ...resto] = numeros;
console.log(um, dois, tres);
console.log(resto);

const numeros2 = [1000, 2000, 3000 ,4000, 5000, 6000, 7000, 8000, 9000];
const [mil, , tresMil, , cincoMil, , seteMil, , noveMil] = numeros2;
console.log(mil, tresMil, cincoMil);

//                     0          1          2
//                  0  1  2    0  1  2    0  1  2
const numeros3 = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];
console.log(numeros3[1][2]);
const [,[,,seis]] = numeros3;
console.log(seis);