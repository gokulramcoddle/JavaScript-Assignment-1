// Q3 a) Remove the number "6" from the array and console the length of the array.
let numbers = ["1", "2", "3", "4", "5", "6", "7"];
let index = numbers.indexOf("6");

if (index !== -1) {
    numbers.splice(index, 1);
}
console.log("Array length after removal:", numbers.length);

// Q3 b) Convert all items to numbers and console each item's data type.
numbers = ["1", "2", "3", "4", "5", "6", "7"];
numbers.forEach(num => {
    let convertedNum = Number(num);
    console.log(`${convertedNum} - ${typeof convertedNum}`);
});

// Q3 c) Remove the last three items and console the array, then add "one" and "two" to the beginning.
numbers = ["1", "2", "3", "4", "5", "6", "7"];
numbers.splice(-3);
console.log("Array after removing last 3 items:", numbers);

numbers.unshift("one", "two");
console.log("Array after adding 'one' and 'two':", numbers);

// Q3 d) Concatenate all items as a string and sum all numbers after conversion.
numbers = ["1", "2", "3", "4", "5", "6", "7"];

let concatenatedString = numbers.join("");
console.log("Concatenated String:", concatenatedString);

let totalSum = numbers.reduce((sum, num) => sum + Number(num), 0);
console.log("Sum of all values:", totalSum);

// Q3 e) Filter out "3" from the array and console the updated array.
numbers = ["1", "2", "3", "4", "5", "6", "7"];
let filteredNumbers = numbers.filter(num => num !== "3");
console.log("Array after filtering out '3':", filteredNumbers);

// Q3 f) Console the item if it is "3", "6", or "7".
numbers.forEach(num => {
    if (["3", "6", "7"].includes(num)) {
        console.log(num);
    }
});

// Q3 g) Compare two arrays and console values with the same data type.
let array1 = ["1", "2", "3", "4", "5", "6", "7"];
let array2 = [1, 2, "3", 4, 5, 6, "7"];

for (let i = 0; i < array1.length; i++) {
    if (typeof array1[i] === typeof array2[i]) {
        console.log("Matching Type:", array1[i]);
    }
}

// Q3 h) Multiply each item by its index and console results greater than 40.
let numArray = [0, 2, 3, 7, 5, 6, 8];

numArray.forEach((num, index) => {
    let result = num * index;
    if (result > 40) {
        console.log(`Digit: ${num} | Value: ${result}`);
    }
});

// Q3 i) Merge two arrays and console the result.
let firstArray = [0, 1, 2, 3, 4];
let secondArray = [5, 6, 7, 8, 9];

let mergedArray = [...firstArray, ...secondArray];
console.log("Merged Array:", mergedArray);
