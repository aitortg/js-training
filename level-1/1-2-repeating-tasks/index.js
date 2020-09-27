/*Definición de la funcion*/
const scheduleTasks = config => {

  /*Se recogen los 3 valores del parametro "config"*/
  const { starting, repeat, each } = config;

  /*Fecha que ira avanzando*/
  const currentDate = new Date(starting);

  /*Variable que retomaremos al final*/
  const outputDate = [];

  /*Se ejecuta el loop mientras coindida la condicion*/
  while (outputDate.length < repeat) {
    const weekday = currentDate.getDay();
    if (weekday !== 0 && weekday !== 6) {
      /*Version legible de la fecha*/
      const readableDate = currentDate.toISOString().substring(0, 10);
      outputDate.push(readableDate);
    };
    /*Sumo los dias "each" para la siguiete ejecución del loop while"*/
    currentDate.setDate(currentDate.getDate() + each);
  };
  return outputDate;
};

module.exports = {
  scheduleTasks,
};
