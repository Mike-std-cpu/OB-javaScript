// - La fecha de hoy
const todayis = new Date();
console.log(todayis);
// - La fecha de tu nacimiento
const bday = new Date(1997,11,30);
console.log(bday);
// - Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
const mldate = todayis.getTime() > bday.getTime();
console.log(`Es ${mldate}`);
// - Una variable que contenga el día de tu nacimiento
const bdayday = bday.getDate();
console.log(`El dia de mi nacimiento es: ${bdayday}`);
// - Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)
const bdaymonth = bday.getMonth();
console.log(bdaymonth);
// - Una variable que contenga el año de tu nacimiento (con 4 dígitos)
const bdayyear = bday.getFullYear();
console.log(`El año de mi nacimiento es: ${bdayyear}`);