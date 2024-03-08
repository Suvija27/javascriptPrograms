const randomNumber=(min , max) => {
    return Math.floor(Math.random()* (max-min + 1) ) + min;
}
// console.log(randomNumber(65,122));


const generateRandomHexCharacter = () => String.fromCharCode(randomNumber(65,122));
// console.log(generateRandomHexCharacter());

const generateRandomString =(length) => {
   var randomString= "" ;
    for(let i=0; i<length; i++) {
       randomString+= generateRandomHexCharacter();
    
    }
    
    return randomString;    
     
}
// console.log(generateRandomString(5));


const generateUUID = () => {
    const array = [8,4,4,4,12];
    const myArray = [];
    for(let i=0; i<array.length; i++) {
       myArray.push(generateRandomString(array[i]));
       
    }
 
return myArray.join("-");
   
} 
// console.log(generateUUID());
const generateUUIDMap = () => {
    const array = [8,4,4,4,12];
    const myArray = [];
   
    const op = (array.map((x) => myArray.push(generateRandomString(x))));
    // console.log(myArray); 
   return myArray.join("-");
} 
console.log(generateUUIDMap());