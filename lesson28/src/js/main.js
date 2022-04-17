//Напиши всі можливі варіанти створення функцій

//1
function firstFunction(){
    console.log('first function');
}

//2
function secondFunction(name, lastName) {
    return name + lastName;
}

console.log('Pavlo', 'Kataranchuk');

//3
let sum = (a, b) => 1 + 1;
console.log(sum());

//Створи функцію, яка буде виводити кількість переданих їй аргументів
function numbers(num1, num2, num3) {
    total = num1 + num2 + num3;
    return total;
}

console.log(numbers(1,2,3));


//Напиши функцію, яка приймає 2 числа і повертає :
// -1, якщо перше число менше, ніж друге; 
// 1 - якщо перше число більше, ніж друге; 
// 0 - якщо числа рівні.

function accept (first, second){
    if (first < second) {
        return -1;
    } else if (first > second) {
        return 1;
    } else {
        return 0;
    }
}

console.log(accept(2,2));


