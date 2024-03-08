const num = (value) => {
    const divisible = value % 2 === 0 ? "It is even" : "It is odd";
    return divisible;
}
console.log(num(48));

const a =3;
const number = a>0 ? "positive" : "negative";
console.log(number);

const students= [
    {Name: "Akira",
     Tamil: 32,
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

const marks = students[1].Tamil>35? "pass" : "fail";
console.log(marks);

const members = [
    { name:" andrew ",
      age : 23,
},
    { name: "stephen",
       age: 17,
},
]
const vote = members[0].age >=18? "eligible to vote" : "not eligible to vote";
console.log(vote);