


// 1. Запрос имени

let name = prompt("Как вас зовут?");

alert(`Привет, ${name}!`);



// 2. Запрос года рождения и расчет возраста

const CURRENT_YEAR = 2025; // Укажите текущий год
let birthYear = prompt("В каком году вы родились?");
let age = CURRENT_YEAR - parseInt(birthYear); // Преобразуем введённый год в целое число

alert(`Вам ${age} лет.`);



// 3. Периметр квадрата

let squareSide = prompt("Введите длину стороны квадрата (в см):");
let perimeter = 4 * parseFloat(squareSide); // Преобразуем введённое значение в число с плавающей запятой

alert(`Периметр квадрата равен ${perimeter} см.`);



// 4. Площадь окружности

let radius = prompt("Введите радиус окружности (в см):");
let circleArea = Math.PI * Math.pow(parseFloat(radius), 2); // Преобразуем радиус в число с плавающей запятой

alert(`Площадь окружности равна ${circleArea.toFixed(2)} см².`);



// 5. Скорость движения (обработка дробных значений для времени)

let distance = prompt("Введите расстояние между городами (в км):");
let time = prompt("За сколько часов хотите добраться? (Можно вводить дробные числа, например 1.5)");
let speed = parseFloat(distance) / parseFloat(time); // Учитываем дробные значения

alert(`Вам нужно двигаться со скоростью ${speed.toFixed(2)} км/ч.`);



// 6. Конвертор валют

const EXCHANGE_RATE = 0.92; // Курс доллара к евро (пример)

let dollars = prompt("Введите сумму в долларах:");
let euros = parseFloat(dollars) * EXCHANGE_RATE; // Преобразуем сумму в число с плавающей запятой

alert(`${dollars} долларов равно ${euros.toFixed(2)} евро.`);




// 7. Шоколадки и сдача

let wallet = prompt("Введите сумму денег в кошельке (в тенге):");
let chocolatePrice = prompt("Введите цену одной шоколадки (в тенге):");
let chocolates = Math.floor(parseFloat(wallet) / parseFloat(chocolatePrice)); // Рассчитываем количество шоколадок
let change = parseFloat(wallet) % parseFloat(chocolatePrice); // Рассчитываем остаток

alert(`Вы можете купить ${chocolates} шоколадок. Ваша сдача: ${change.toFixed(2)} тенге.`);
