// 1. Implementing a Stack with Arrays

class Stack {
    constructor() {
      this.items = [];
    }
  
    push(item) {
      this.items.push(item);
    }
  
    pop() {
      return this.items.pop();
    }
  
    peek() {
      return this.items[this.items.length - 1];
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  }
  
  // Example usage
  const stack = new Stack();
  
  stack.push(10);
  stack.push(20);
  stack.push(30);
  
  console.log("Using peek",stack.peek()); // Output: 30
  console.log("Using pop",stack.pop());  // Output: 30
  console.log("Using pop",stack.pop());  // Output: 20
  console.log("Using isEmpty()",stack.isEmpty()); // Output: false
  console.log("Using peek",stack.peek()); // Output: 10

// 2. Array of Objects Sorting with Multiple Properties
let people = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 },
    { name: 'Alice', age: 22 },
];

people.sort((a, b) => {
    if (a.name === b.name) {
        return a.age - b.age;
    }
    return a.name.localeCompare(b.name);
});
console.log('Sorted People:', people);

// 3. Creating an Array of Arrays
let arrayOfArrays = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log('Array of Arrays:', arrayOfArrays);

// 4. Comparing Two Arrays for Equality
function arraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false;
    }
    return true;
}

let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3];
let array3 = [1, 2, 4];

console.log('Array1 equals Array2:', arraysEqual(arr1, arr2)); // true
console.log('Array1 equals Array3:', arraysEqual(arr1, array3)); // false

// 5. Converting Array of Objects
let arrayOfObjects = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Joe' }
];

let convertedArray = arrayOfObjects.map(obj => [obj.id, obj.name]);
console.log('Converted Array:', convertedArray)