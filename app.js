let car = {
    color: 'red',
    maxSpeed: 250,
    audio: {
        brand: 'Sony',
        speakers: 12
    },
    price: 9999999
};

// if(car.price >= 1000000) {
//     console.log('Автомобиль слишком дорогой');
// }else if(car.price <= 1000000) {
//     console.log('Автомобиль не дорогой');
// }else{
//     console.log('Чтобы узнать цену, позвоните нам');
// }

console.log(car.color);

car.color = 'green';
console.log(car.color);

function colorReset() {
    car.color = 'red';
    console.log(car.color);
}
colorReset();

let car1 = {
    maxSpeed: 240,
};

console.log('Скорость была ' + car1.maxSpeed);

function speedChange() {
    car1.maxSpeed = 300;
    console.log('Скорость стала ' + car1.maxSpeed);
}

speedChange();

let car3 = {
    maxSpeed: 240,
};
let car4 = {
    maxSpeed: 300,
};

speedChang(car3);

function speedChang(speed) {
    speed.maxSpeed = 350;
}

 

console.log('была ' + car3.maxSpeed);
console.log('стала ' + car4.maxSpeed);

