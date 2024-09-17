//Write a function that takes an array (a) and a value (n) as argument. Return the nth element of 'a'
function myFunction(a, n) {

    return a[n - 1];
}
myFunction([1, 2, 3, 4, 5], 3);
myFunction([10, 9, 8, 7, 6], 5);
myFunction([7, 2, 1, 6, 3], 1);

//Write a function that takes an array (a) as argument. Remove the first 3 elements of 'a'. Return the result
function myFunction2(a) {
    return a.slice(3);
}
myFunction2([1, 2, 3, 4]);
myFunction2([5, 4, 3, 2, 1, 0]);
myFunction2([99, 1, 1]);

//Write a function that takes an array (a) as argument. Extract the last 3 elements of 'a'. Return the resulting array
function myFunction3(a) {
    return a.slice(-3);
}

myFunction3([1, 2, 3, 4]);
myFunction3([5, 4, 3, 2, 1, 0]);
myFunction3([99, 1, 1]);

//Write a function that takes an array (a) as argument. Extract the first 3 elements of a. Return the resulting array
function myFunction4(a) {
    let result = [];
    for (let i = 0; i <= 2; i++) {
        result[i] = a[i];
    }
    return result;
}
//OR JUST return a.slice(0, 3);
myFunction4([1, 2, 3, 4]);
myFunction4([5, 4, 3, 2, 1, 0]);
myFunction4([99, 1, 1]);

//Write a function that takes an array (a) and a number (n) as arguments. It should return the last n elements of a.
function myFunction5(a, n) {
    return a.slice(a.length - n);
}
// OR JUST a.slice(-n);
myFunction5([1, 2, 3, 4, 5], 2);
myFunction5([1, 2, 3], 6);
myFunction5([1, 2, 3, 4, 5, 6, 7, 8], 3);

//Write a function that takes an array (a) and a value (b) as argument. 
//The function should remove all elements equal to 'b' from the array. Return the filtered array.
function myFunction6(a, b) {
    return a.filter(cur => cur !== b);
}
myFunction6([1, 2, 3], 2);
myFunction6([1, 2, '2'], '2');
myFunction6([false, '2', 1], false);
myFunction6([1, 2, '2', 1], 1);

//Write a function that takes an array of numbers as argument. Return the number of negative values in the array.
function myFunction8(a) {
    let result = [];
    for (let i = 0; i <= a.length; i++) {
        if (a[i] < 0) {
            result.push(a[i]);
        }
    }
    return result.length; //OR return a.filter((el) => el < 0).length;
}
myFunction8([1, -2, 2, -4]);

// Write a function that takes an array of strings as argument. Sort the array elements alphabetically. Return the result.
function myFunction9(a) {
    return a.sort();
}
myFunction9(['b', 'c', 'd', 'a']);
myFunction9(['z', 'c', 'd', 'a', 'y', 'a', 'w']);

//Write a function that takes an array of numbers as argument. It should return an array with the numbers sorted in descending order
function myFunction10(arr) {
    return arr.sort((a, b) => b - a); //OR arr.sort and then arr.reverse
}
myFunction10([1, 3, 2, 3]);
myFunction10([4, 2, 3, 1]);

//Write a function that takes an array of numbers as argument. It should return the sum of the numbers.
function myFunction11(a) {
    let result = 0;
    for (let i = 0; i < a.length; i++) {
        result += a[i];
    }
    return result; // OR return a.reduce((acc, cur) => acc + cur, 0);
}
myFunction11([10, 100, 40]);
myFunction11([10, 100, 1000, 1]);

myFunction11([-50, 0, 50, 200])


// Write a function that takes an array of numbers as argument. It should return the average of the numbers
function myFunction12(arr) {
    // console.log((a.reduce((acc, cur) => acc + cur, 0)) / a.length);
    return (arr.reduce((acc, cur) => acc + cur, 0)) / arr.length
}
myFunction12([10, 100, 40])
myFunction12([10, 100, 1000])
myFunction12([-50, 0, 50, 200])


//Write a function that takes an array of strings as argument. Return the longest string.
function myFunction13(arr) {
    //console.log(arr.reduce((a, b) => a.length <= b.length ? b : a));
    return arr.reduce((a, b) => a.length <= b.length ? b : a)
}
myFunction13(['I', 'need', 'candy'])

//Write a function that takes an array as argument. It should return true if all elements in the array are equal. It should return false otherwise.
function myFunction14(arr) {
    return arr.every(element => element === arr[0]); //OR return new Set(arr).size === 1
}
myFunction14([true, true, true, true]);
myFunction14(['test', 'test', 'test']);
myFunction14([1, 1, 1, 2]);
myFunction14(['10', 10, 10, 10]);















