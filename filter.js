const num = [1,2,3,4,5,6,7,8,9,10];
const result = num.filter((x) =>x%2===0);
console.log(result);


const num1 = [1,2,3,4,5,6,7,8,9,10];
const answer = num.filter((x) =>x%2 !== 0);
console.log(answer);


const num2 = [12,15,50,89,34,25];
const output =  num2.filter((x) => x%5 ===0);
console.log(output);

const students= [
    {Name: "Akira",
     Tamil: 98,
     English: 60,
     Maths: 77,
},

    {Name:"Aakash",
    Tamil:88,
    English:69,
    Maths:65,
},

    {Name:"John",
     Tamil:65,
     English:78,
     Maths:53,
    
},

    {Name:"Dhuruv",
     Tamil: 90,
     English:99,
     Maths:41
}
]

const marks = students.filter((x) => x.Tamil> 90 || x.English>90 );
console.log(marks);