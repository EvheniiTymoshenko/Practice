
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

//Task 15
function myFunction15(a,b){
  return b.split(a).length - 1;
}
myFunction15('m', 'how many times does the character occur in this sentence?');
 
//task 16 Write a function that takes a number (a) as argument. If a is a whole number (has no decimal place), return true. Otherwise, return false.
function myFunction16(a){
  return a - Math.floor(a) === 0; //OR return Number.isInteger(a);
}
myFunction16(4);

//Write a function that takes two numbers (a and b) as arguments. 
//If a is smaller than b, divide a by b. Otherwise, multiply both numbers. Return the resulting value
function myFunction17(a, b){
  return a < b ? a / b : a * b;
}
myFunction17(10,100);

//Write a function that takes a number (a) as argument. Round a to the 2nd digit after the decimal point. Return the rounded number
function myFunction18(a){
return Math.round(a * 100)/100; // OR   return Number(a.toFixed(2));
}
myFunction18(2.12397);

//Write a function that takes a number (a) as argument. Split a into its individual digits and return them in an array. 
//Hint: you might want to change the type of the number for the splitting
function myFunction19(a){
  const string = a + '';
  const strings = string.split('');  
  return strings.map(digit => Number(digit));
  }
myFunction19(10);

//It seems like something happened to these strings. Can you figure out how to clear up the chaos? Write a function 
//that joins these strings together such that they form the following words:. 'Javascript', 'Countryside', and 'Downtown'. 
//You might want to apply basic JS string methods such as replace(), split(), slice() etc.
function myFunction20(a,b){
const reversedStr = b.split('').reverse().join('');
const getFirstLetter = a.charAt(0).toUpperCase() + a.slice(1);
const str = getFirstLetter.concat(reversedStr);
const removePer = str.replace('%', '');
return removePer;
}
myFunction20('java', 'tpi%rcs');

//This challenge is a little bit more complex. Write a function that takes a number (a) as argument. 
//If a is prime, return a. If not, return the next higher prime number.
function myFunction21(a){
  function isPrime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      // console.log(`Num% ${i} =` + `${num % i === 0}`);
      if (num % i === 0) return false;
    }
    // console.log(num);
    return num > 1;
  }
 let n = a;
//  console.log("n=a value = " + n);
 while (!isPrime(n)) n++;
 return n;
}
// myFunction21(38);
// myFunction21(115);
// myFunction21(7);
// myFunction21(2000);

// Write a function that takes two numbers, say x and y, as arguments. 
// Check if x is divisible by y. If yes, return x. If not, return the next higher natural number that is divisible by y
function myFunction22(x, y){
while ( x % y !== 0) x++;
return x;
}
myFunction22(1, 23); //23
myFunction22(23, 23); //23
myFunction22(7, 3); //9
myFunction22(-5, 7); //0

//Write a function that takes two strings (a and b) as arguments. Beginning at the end of 'a', 
//insert 'b' after every 3rd character of 'a'. Return the resulting string.
function myFunction23(a, b){
  let result = [];
  let rest = a;
  while (rest.length) {
    result.push(rest.slice(-3));
    rest = rest.slice(0, -3);
  }
  return result.reverse().join(b);
  }
myFunction23('1234567','.');
// myFunction23('abcde','$');
// myFunction23('zxyzxyzxyzxyzxyz','w');

//Index from string to arr
function myFunction241(str){
const alphabet = 'abcdefghijklmnopqrstuvwxyz';
let getIndex = [];
for (let i = 0; i < str.length; i++){
 const item = str[i];
 getIndex.push(alphabet.indexOf(item) + 1);
}
  }
myFunction241('bnchmf');


//Write a function that takes a string as argument. As it is, the string has no meaning. 
// Increment each letter to the next letter in the alphabet. Return the correct word
function myFunction24(str) {
  const arr = [...str];
  const correctedArray = arr.map(e => String.fromCharCode(e.charCodeAt()+1));
  return correctedArray.join('');
}
myFunction24('bnchmf');