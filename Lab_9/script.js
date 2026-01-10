let primalLenght = 9;
let step = 8;

for (let i = 1; i <= 10; i++) {
    console.log("*".repeat(primalLenght));
    if (i < 5) {
        primalLenght += step;
        step -= 2;
    }
    if (i >= 5) {
        primalLenght -= step;
        step += 2;
    }
}
console.log("Зроблено перше завдання");
console.log("\n");

const startTime = new Date().getTime();
const duration  = 10000;
const endTime = startTime + duration;
console.log("Початок таймера");
while (new Date().getTime() < endTime) {
    // Чекаємо
}
console.log("Таймер завершено");