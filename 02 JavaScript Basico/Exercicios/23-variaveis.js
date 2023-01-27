let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

let varD = varA;
varA = varB;
varB = varC;
varC = varD;

console.log(varA);
console.log(varB);
console.log(varC);