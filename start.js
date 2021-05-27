// # Review - Arrays and Objects

// NOTE! Pay close attention to creating code with good and consistent code style.

// 1. Create an array that contains three strings.

const fruits = ["mango", "orange", "banana"];

// 2. Create an array that contains one string, one number and one boolean.

const array = ["Rudesh", 28, true];

// 3. Create an array hat contains three empty arrays.

const emptyArrays = [[], [], []];

// 4. Create an empty object.

const emptyObject = {};

// 5. Create an object with three properties: id, email, password.

const user = {
    id: "Rudhesh",
    email: "rudheshdhote@yahoo.com",
    password: "Password",
};

// 6. Create an array that contains three objects. All objects should have a width and a height property.

const boxes = [
    { width: 20, height: 30 },
    { width: 20, height: 30 },
    { width: 20, height: 30 },
];

// 7. Create an object that contains three properties: a string, an array and an object. Invent your own property names and values.

const objContainsProperties = {
    Name: "Rudhesh",
    scores: [4, 5, 6, 7],
    grade: { math: "D", science: "C" }
};


// 8. Print the `type` of a variable that has an array value.

const marks = [40, 50, 40];
console.log(Array.isArray(marks))
console.log(Object.prototype.toString.call(marks))


// 9. Print the `type` of a variable that has an object value. 

console.log(typeof objContainsProperties)

// 10. Create an array with five random values. 

const cars = ["mustang", "ford", "BMW", "ferrari", "jaguar"]

// 10.1. Add one value to the end of the array.

cars.push("audi")

console.log(cars)

// 10.2. Add one thing to the beginning of the array.

cars.unshift("porsche")

console.log(cars)

// 10.3. Take out one thing from the end of the array.

cars.pop()

console.log(cars)
// 10.4. Print the length of the array.

console.log(cars.length)

// 10.5. Take out one thing from the end of the array.

cars.pop()

console.log(cars)

// 10.6. Take out one the 2nd thing from the array.

cars.splice(1,1)

console.log(cars)