 const number = (value) => {
    
    if(value % 2 === 0) {
        return "It is even";
    }   
        return "It is odd"; 

}
// console.log(number(78));


const num = (value) => {
    const divisible = value % 2 === 0 ? "It is even" : "It is odd";
    return divisible;
}
console.log(num(48));


const nos = (value) => {
    const divisible = value%2 ===0 && value%9;
    return divisible;
}
console.log(nos(48));


