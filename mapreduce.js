const students = [
    { name: "Alice", scores: [90, 85, 92] },
    { name: "Bob", scores: [75, 80, 85] },
    { name: "Charlie", scores: [90, 95, 85] },
    { name: "Jack", scores: [100, 100, 100] }
  ];
const totalscores = students.map((element) => ({
    ...element ,
     total:(element.scores.reduce((previousValue,currentValue) => previousValue + currentValue , 0))
    }));

console.log(totalscores);

