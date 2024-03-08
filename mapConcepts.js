const fruits =  ["persimon","avacado","banana","apple","kiwi"];
 const ab = fruits.map((x) => x.length);
//  console.log(ab);

 const measurements =  [{ width: 2, length: 5, height: 1 },{ width: 4, length: 2, height: 2 },{ width: 2, length: 3, height: 5 }];
 const result = measurements.map((x) => x["width"] *x["length"] *x["height"]);
//  console.log(result);

 const num = [5,6,7,8,9];
 const answer = num.map((x,index) => x + index);
//  console.log(answer);


 const persons = [
    {firstname:"Arivazhaki" , lastname: "Murugaiyan"},
    {firstname:"Harshitha" , lastname: "saravanan"},
    {firstname:"Manivanman" , lastname: "githeesh" }
 ];
const personName =  persons.map((x) => x.firstname + x.lastname );
// console.log(personName);

const dict = [
    {name: "raju" , age: 22},
     {name: "somu" , age: 24}
];

const members = dict.map((x) => x.name + ("-") +x.age);
// console.log(members);

const purchaseList =[{ name:"rice",
    units:2,
    ratePerUnit:60, 
     },
   {
    name:"wheat",
   units:5,
   ratePerUnit:80,
   }];

const output = purchaseList.map((x) => x.name +"-" + (x.units * x.ratePerUnit) );
console.log(output);

const list = purchaseList.map((element) =>({...element , 
totalCost: element.units * element.ratePerUnit
}));
console.log(list);

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
var rates = {
    Carrot: 10,
    Apple: 200,
    Guava: 50,
  };

  const fruitsName = purchases.map((x) =>({...x , rates: rates[x.item]}));
  // const fruitsName = [...purchases , rates];
  console.log(fruitsName);

  const names = ["john" , "Aakash"];
  const details= [{age:22}, {age:24}];

  const detailsofNames = details.map((x , index) => ({name: names[index] , ...x  }));
  console.log(detailsofNames);



 