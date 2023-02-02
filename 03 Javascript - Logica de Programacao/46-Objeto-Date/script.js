const tresHoras = 60 * 60 * 3 * 1000
const data = new Date(0 + tresHoras);
console.log(data.toString());


const data2 = new Date(2023, 1, 02, 10, 15, 27, 500); // (Ano, Mês, Dia, Hora, Minuto, Segundos, Milésimos)
console.log(data2.toString());

const data3 = new Date('2023-02-02 10:30:00');
console.log(data3.toString());

console.log('Data: ', data3.getDate());
console.log('Mês: ', data3.getMonth()); // Começa do 0
console.log('Ano: ', data3.getFullYear());
console.log('Hora: ', data3.getHours());
console.log('Minuto: ', data3.getMinutes());
console.log('Segundo: ', data3.getSeconds());

console.log(Date.now());