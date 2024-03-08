
const points = [40, 100, 1, 5, 25, 10];

// const answer = points.sort(;

    const items = [
        { name: "Edward", value: 21 },
        { name: "Sharpe", value: 37 },
        { name: "And", value: 45 },
        { name: "The", value: -12 },
        { name: "Magnetic", value: 13 },
        { name: "Zeros", value: 37 },
      ];
      
const output = items.sort((a, b) => b.value - a.value);
// console.log(output);

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

const output1 = students.map((x) =>({...x , Total: x.Tamil + x.English + x.Maths})) ;

const resultt = output1.sort((a,b) =>a.Total-b.Total);
console.log(resultt);

const numbers = [3, 1, 4, 1, 5,6];

      