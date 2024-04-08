const factorial = (n) => n === 0
? 1 
: n*factorial(n-1);
console.log(factorial(5));

const star = (n)=> {
   let stars = "";
   if (n === 0) {
     return "*";
     } 
      for(let i=1; i<=n; i++){
      stars+="*";
      }
      star(n-1);
      console.log('\n'+ stars);
  }; 
star(5)


