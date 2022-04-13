let userAge = prompt(`your age?`);

if (userAge <= 11) {
    console.log('child')
} else if (userAge <= 17) {
    console.log('teen')
} else if (userAge <= 59) {
    console.log('adult')
} else if (userAge >= 60) {
    console.log('senior')
} else {
    console.log('unknown age')
};
    

