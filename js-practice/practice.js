
//Return sum of all numbers
function sumNumbers(...numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      sum = sum + numbers[i];
    }
  }
  sumNumbers(4, 5);
  sumNumbers(4, 5, 6, 1);
  sumNumbers(4, 5, 10, 2, 3);

//Return first half of string
function myFunction1(a){
const result = a.length/2;
return a.slice(0, result);
}
myFunction1("abcdefgh");

//Write a function that takes two numbers (a and b) as argument. Return b percent of a 
function myFunction2(a, b){
return (a* b) /100;
}
myFunction2(100,50); //50
myFunction2(10,1); // 0.1
myFunction2(500,25); // 125

//Do correct math
function myFunction3(a, b, c, d, e, f)
{
    return Math.pow( (((a+b)-c)*d)/e , f );
}
myFunction3(6,5,4,3,2,1);

//Check whether a string contains another string and concatenate
function myFunction4(a,b){
    return  a.indexOf(b) === -1 ? a + b : b + a;
}
myFunction4('cheese', 'cake');
myFunction4('lips', 's');
myFunction4('Java', 'script');
myFunction4(' think, therefore I am', 'I');