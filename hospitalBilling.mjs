import csvTojson from 'csvtojson';
 
const getCharges = (wardCharges,ward) => {

const services= wardCharges.find(({WardType}) => WardType===ward);
const totalAmount = Number(services.Charges) + Number(services.DoctorFees);
return totalAmount;
};

const addFields =(wardCharges,Detail) => {
  const amount = getCharges(wardCharges,Detail.WardType);
  console.log(amount);
  return {
    ...Detail,
    totalFees: Detail.Days*amount,
  };

};


  const main = async () => {

  const patientData = await csvTojson().fromFile('./patientdatas.csv');
  console.log(patientData);
  const wardCharges = await csvTojson().fromFile('./wardCharges.csv');
  console.log(wardCharges);
  const amount = patientData.map((Detail) => addFields(wardCharges,Detail));
  console.table(amount)
  
};
main();



