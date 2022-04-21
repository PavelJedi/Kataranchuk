let shoppingList = [{
    name: 'eggs',
    amount: 4,
    bought: true,
    sum: 5,
    totalSum: 20,
}, {
    name: 'chicken',
    amount: 1,
    bought: true,
    sum: 30,
    totalSum: 30,
},
    {
        name: 'flour',
        amount: 2,
        bought: false,
        sum: 20,
        totalSum: 40,
    },
    {
        name: 'bread',
        amount: 2,
        bought: true,
        sum: 10,
        totalSum: 20,
    }, {
        name: 'milk',
        amount: 3,
        bought: false,
        sum: 15,
        totalSum: 45,
    }];

//Виводити весь список на екран таким чином, щоб спочатку йшли продукти, що ще не придбані, а потім - ті, що вже придбали.

shoppingList.sort(function (a, b) {
    if (a.bought > b.bought) {
        return 1;
    }
    if (a.bought < b.bought) {
        return -1;
    }
    // a должно быть равным b
    return 0;
});

console.log(shoppingList);

//Покупка продукту. Функція приймає назву продукту і відзначає його як придбаний.

let boughtItems = shoppingList.filter(shoppingList => shoppingList.bought === true);
console.log(boughtItems);

//Створення списку (не) придбаних продуктів

let notBought = shoppingList.map(shoppingList => {
    if (shoppingList.bought === false){
        return shoppingList;
    }
});

console.log(notBought);
