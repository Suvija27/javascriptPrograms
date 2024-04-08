const data = {
    markSheets:[
        {
            student: 'Sriram',
            rollNo: 11,
        },
        {
            student: 'Ram',
            rollNo: 16,            
        },
        {
            student: 'sri',
            rollNo: 18,
        },
        {
            student: 'mani',
            rollNo: 20,
        },
    ] 
};

const studentMarks = {
    '11':{
        tamil: 80,
        english: 90,
        science: 86,
        maths: 97,
        social: 76
    },
    '16':{
        tamil: 60,
        english: 97,
        science: 100,
        maths: 34,
        social: 100
    },
    '18':{
        tamil: 60,
        english: 90,
        science: 66,
        maths: 93,
        social: 46,
    },
    '20':{
        tamil: 40,
        english: 70,
        science: 86,
        maths: 73,
        social: 86,
    },
}
const getTotal = (marks) => marks.tamil+ marks.english + marks.maths + marks.science + marks.social;

const getResult = (marks) => Math.min(marks.tamil,marks.english,marks.maths,marks.science,marks.social) < 35
? "fail"
: "pass";

const reducer=(a,b)=>b.result==="pass"
        ?{passCount:a.passCount+1}
        :{failCount:a.failCount+1}

const getPassFailCount=(studentDetails)=>{
    const passResult=studentDetails.reduce((a,b)=>({...a,...reducer(a,b)}),{passCount:0,failCount:0});
    return passResult; 
    }

const addFields = (element) => ({
    ...element ,
    total: getTotal(studentMarks[element.rollNo]),
    result: getResult(studentMarks[element.rollNo])
});

// console.log(addFields(data.markSheets[0]));

const getRank = (studentDetails) => {
    
    const rankStudents = studentDetails.map((element,index,array) => ({
        ...element,
        rank : element.result === "pass" ? array.filter ((student) => student.total > element.total && student.result !== "fail"). length +1 : "-"

     }));

     return rankStudents;
};


const main =() => {
    const studentDetails = (data.markSheets).map(addFields);
    console.log(studentDetails); 
    const output = getRank(studentDetails);
    console.log(output);
    const passFailCount = getPassFailCount(studentDetails);
    console.log(passFailCount);

}
main();













