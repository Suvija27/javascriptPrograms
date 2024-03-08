const a =[12,28,14,21];
const output = a.reduce((previousValue,currentValue) => previousValue + currentValue);
// console.log(output);

const num=[23,10,30,30];
let initialValue= 20;
const answer= num.reduce((accumulator,currentValue) => accumulator+ currentValue , initialValue);
console.log(answer);
const reducer = (accumulator,currentValue) => (accumulator+ currentValue);
// const answer= num.reduce(reducer,initialValue);
console.log(answer);

const locations = ['Mumbai', 'Delhi','chennai', 'bangalore'];
const result = locations.reduce((previousValue, currentValue) =>  previousValue + currentValue + currentValue , "");
console.log(result);