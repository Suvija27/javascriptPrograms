var purchases = [
  {
    item: 'Carrot',
    units: 20,
  },
  {
    item: 'Apple',
    units: 2,
  },
  {
    item: 'Guava',
    units: 1,
  },
];
var rates = {
  Carrot: 10,
  Apple: 200,
  Guava: 50,
};

var discounts = {
  // values are in percentages.
  Apple: 10,
};

var taxes = {
  // values are in percentages.
  Carrot: 5,
  Guava: 10,
  Apple: 5,
};


// Do not change below this line.
/* Main Function */
// var main = function main() {
  // console.log(getSum());
// };

// main();
// iterate all purchases                      
// const getSum = () =>


 //get unit price and multiply it by no of units                                                               
// const getLineItemPrice = (lineItem) =>
// const getUnitPrice = (itemName) =>
// const getTaxPercent = (productName) => 

// const getDiscountPrice = (productName) => discounts[productName]? discounts[productName]/100 : 0 ; or  u can use shortcircuit operator(or and )
const getDiscountPercent = (productName) => (discounts[productName] || 0) /100;
console.log(getDiscountPercent("Apple"));

const getTaxPercent = (item) =>  (taxes[item] || 0 )/100;
console.log(getTaxPercent("Apple"));

const getUnitPrice =(itemName) => {
const discountAmount = rates[itemName]*getDiscountPercent(itemName);
const taxAmount =  rates[itemName] *getTaxPercent(itemName);
console.log(discountAmount);
console.log(taxAmount);

return rates[itemName]-discountAmount+taxAmount;
};
console.log(getUnitPrice("Apple"));

const getLineItemPrice = (lineItem) => lineItem.units*getUnitPrice(lineItem.item);

const getSum =() => purchases.reduce((accumulator,currentValue) => accumulator + getLineItemPrice(currentValue) , 0);

/* Main Function */
var main = function main() {
  console.log(getSum());
};

main();


