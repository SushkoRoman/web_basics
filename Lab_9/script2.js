const car = {
    speedometer: 0
};
 
car.setSpeed = function(speed) {
    this.speedometer = speed;
    return this;
}
car.getSpeed = function() {
    console.log(this.speedometer);
    return this;
}
car.clearSpeed = function() {
    this.speedometer = 0;
    return this;
}
car.setSpeed(200).setSpeed(300).getSpeed().clearSpeed().getSpeed();
console.log(car.getSpeed());


console.log("\n");
class Transport {
    constructor(type, wheelCount) {
        this.type = type;
        this.wheelCount = wheelCount;
    }

    info() {
        console.log("Це " + this.type + " на " + this.wheelCount + " колесах.");
    }

    move() {
        console.log(this.type + " починає рух.");
    }
}

// 2. Дочірній клас
class Car extends Transport {
    constructor(brand, model) {
        super('Автомобіль', 4); 
        this.brand = brand;
        this.model = model;
    }

    info() {
        super.info(); 
        console.log("Марка: " + this.brand + ", Модель: " + this.model);
    }

    honk() {
        console.log(this.brand + " сигналить: Бі-біп!");
    }
}

// 3. Клас "онук"
class SportCar extends Car {
    constructor(brand, model, maxSpeed) {
        super(brand, model);
        this.maxSpeed = maxSpeed;
    }

    turboBoost() {
        console.log(this.brand + " " + this.model + " вмикає нітро! Швидкість понад " + this.maxSpeed + " км/год!");
    }
    
    move() {
        console.log(this.brand + " зривається з місця з пробуксовкою!");
    }
}

console.log("\n--- Тест ---");

const myBus = new Transport('Автобус', 6);
const mySedan = new Car('Toyota', 'Camry');
const myFerrari = new SportCar('Ferrari', 'F40', 320);

console.log("1. Транспорт:");
myBus.info();
myBus.move();

console.log("\n2. Авто:");
mySedan.info();
mySedan.honk();

console.log("\n3. Спорткар:");
myFerrari.info();
myFerrari.turboBoost();
myFerrari.move();
