
// - Un nuevo Set con los nombres de tu familia
const miSet = new Set([
"Martha",
"Miguel",
"Eduardo",
"JMiguel"
]);
// - Modifica el Set original añadiendo tu nombre (duplicado) (debería darte lo mismo)
miSet.add("JMiguel");
console.log(miSet);
// - Modifica el Set original añadiendo el nombre "Javascript" (ya que empieza a formar parte de tu vida ;)
miSet.add("Javascript");
console.log(miSet);