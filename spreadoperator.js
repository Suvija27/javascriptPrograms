const fruitRates = {apple:200, banana: 180,orange:100};
const vegetableRates = {carrot:90,brijal:80,beetroot:55};
const fruitsveggies = {...fruitRates , ...vegetableRates};
console.log(fruitsveggies);


const myVehicle = {
    brand: 'Ford',
    model: 'Mustang',
    color: 'red'
  }
  
  const updateMyVehicle = {
    type: 'car',
    year: 2021, 
    color: 'yellow'
  }
const vehicle = {...myVehicle ,...updateMyVehicle};
console.log(vehicle);

const array1 =[1,2,3];
const array2 = [...array1, 4,5,6];
console.log(array2);

var purchases = [
  {
  item: 'Apple',
  units: 2,
},
{
  item: 'Guava',
  units: 1,
},
{
  item: 'Carrot',
  units: 20,
}
];
var vegetables = {
  item: 'potato',
  units: 30,
};
console.log([...purchases , vegetables]);