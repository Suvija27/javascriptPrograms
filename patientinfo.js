const csvTojson = require('csvtojson');

const main = async () => {

  const patientData = await csvTojson().fromFile('./patientdatas.csv');
  console.table(patientData);
}
main();