const arr =[1,2,3];
var sum= 0;

for(i=0; i<arr.length; i++) {
    sum+=arr[i];
}
// console.log(sum); 

const arr1 =[1,2,3];
const arr2 = arr1.map((num) => num * 3);
console.log(arr2);

const isAnimalPresent =(animalName) => {
    const strArr = ["cat","dog","rat","chick","fish"];
    for (let i=0; i<strArr.length; i++) {
        strArr[i] = "animalName"
     if(animalName === "cat") {
        return "Animal Present";
     }
        return "Animal not Present"
        
    }
}
// console.log(isAnimalPresent("rat"));

const arrayy1 = arr(5);
const answer = arrayy1.map(...arr(5));
console.log(answer);






arr = [1,2,3]
n= 2

multiply(arr,2-1)* arr[2-1] => multiply(arr,1)               * arr[1] 
                            =>  (multiply(arr,1-1)*arr[1-1]) * arr[1]    
				=> (multiply(arr,0)*arr[0])   * arr[1]
				=>(1 * arr[0] *arr[1])
				=>1*1*2 =2



              

