
function allEven(arr) {
    return arr.every(num => num % 2 === 0);
}

function anyOdd(arr) {
    return arr.some(num => num % 2 !== 0);
}

function multiplesOfFive(arr) {
    return arr.filter(num => num % 5 === 0);
}

function average(arr) {
    const sum = arr.reduce((acc, curr) => acc + curr, 0);
    const avg = sum / arr.length;
    return Math.round(avg * 10) / 10; 
}

function moveFirstToEnd(arr) {
    const firstElement = arr.shift(); 
    arr.push(firstElement);
    return arr;
}

function formatEmployees(employees) {
    return employees.map(employee => `Имя: ${employee.name}, возраст: ${employee.age}`);
}

console.log(allEven([2, 4, 6, 8])); 
console.log(anyOdd([2, 4, 6, 8])); 
console.log(multiplesOfFive([1, 2, 5, 12, 15, 21])); 
console.log(average([1, 2, 3, 4, 5])); 
console.log(moveFirstToEnd([1, 2, 3, 4, 5])); 
console.log(formatEmployees([{name: 'Иван', age: 23}, {name: 'Петр', age: 30}]));
