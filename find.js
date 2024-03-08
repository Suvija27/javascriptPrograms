const array1 = [5, 12, 8, 130, 44];

const found = array1.find((element) => element > 10);

console.log(found);
// const inventory = [
    // { x: "apples", quantity: 2 },
    // { x: "bananas", quantity: 0 },
    // { x: "cherries", quantity: 5 },
  // ];
// const answer = inventory.find((element) =>element.x=== "cherries" );
// console.log(answer);

const fruits =  ["persimon","avacado","banana","apple","kiwi"];
 const output = fruits.find((element) => element.length<5);
 console.log(output);


 const inventory = [
    { x: "apples", quantity: 2 },
    { x: "bananas", quantity: 0 },
    { x: "cherries", quantity: 5 },
  ];
const answer = inventory.find((element) => element.x=="apples");
console.log(answer);

const words=["hello","tag","dog","upgrade"];
// const result = words.find((element) => element.length>3);
const result = words.some((element) => element.length>3);
console.log(result);

const numbers = [3, 1, 4, 1, 5,6];
const num = numbers.find((element) => element %2 === 0);
console.log(num);