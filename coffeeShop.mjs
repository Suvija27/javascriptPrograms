import csvTojson from 'csvtojson';

// const getRevenue =(shopSales)=> {
//  const amount = (Number(shopSales.Coffee )+ Number(shopSales.Tea)+Number(shopSales.Cake) +
//  Number(shopSales.Biscuit)+ Number(shopSales.Juice))*12;
 
//  return amount;
// }
// const getCharges =(charges)=>(Number(charges.ElectricBill) + Number(charges.GasBill) +
// Number(charges.EmployeeSalary)+Number(charges.Ingredients)+Number(charges.WaterBill)+Number(charges.ShopRent)+
// Number(charges.WifiBill));

// alter method:
const getCharges =(charges)=>{
  const expenses = (Object.values(charges))
  const totalExpenses = expenses.reduce((acc,cv,i) => i!==0 ? Number(acc)+Number(cv):acc,0 )

  return totalExpenses;
};

const getRevenue = (shopSales) => {
  const revenue = (Object.values(shopSales))
  const totalRevenue = revenue.reduce((acc,cv,i)=> i!==0? Number(acc)+Number(cv): acc,0)*12

  return totalRevenue;
}


const addFields =(element,shopSales) => {
  const totalCharges = getCharges(element);
  // console.log(totalCharges);
  const sales = shopSales.find((sale)=> sale.Year===element.Year)
  const totalIncome = getRevenue(sales);

  return {
    year:element.Year,
    totalCharges:totalCharges,
    totalIncome:totalIncome,
    profit:totalIncome-totalCharges,
  }
};


const main = async()=> {
  const shopCharges = await csvTojson().fromFile('./coffeeShopCharges.csv');
  console.log(shopCharges);
  const shopSales = await csvTojson().fromFile('./coffeeShopSales.csv');
  console.log(shopSales);
  const shopProfit = await csvTojson().fromFile('./coffeeShopProfit.csv');
  console.log(shopProfit);
  const shopDetails = shopCharges.map((element) => addFields(element,shopSales) )
  console.log(shopDetails);
};
main();