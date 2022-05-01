//Task 1

let car = {
    mark: 'Volkswagen',
    model: 'Golf',
    year: 2020,
    avgSpeed: 150,
    tankVolume: 40,
    fuelWaste: 2,
    drivers: ['Pavlo']
};

//Висновок на екран з інформацією про автомобіль
function showInfo(){
    console.log(car);
};

showInfo();

//Додавання водія, який має право керувати автомобілем
function addDriver(){
    name = prompt('Enter driver name');
    car.drivers.push(name);
}

addDriver();

//Заправка автомобіля
function fillUpTank() {
    let maxFuel = car.tankVolume;
    let minFuel = car.fuelWaste;
    let disctance = prompt('Пройдена дистанція(км)');
    let fillTank = (disctance / 100) * minFuel;
    
    if (fillTank > maxFuel) {
        alert('Need a gas station')
    };
};

fillUpTank();



