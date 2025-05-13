/* Мінімум

Запитай у користувача його вік і визначи, ким він є: дитиною (0-11), підлітком (12-17), дорослим (18_59) або пенсіонером (60 ...), передбач можливість введення невірних даних.
Запитай у користувача число від 0 до 9 і виведи йому спецсимвол, який розташований на цій клавіші (1 !, 2 @, 3 # і т. д).
Підрахуй суму всіх чисел в заданому користувачем діапазоні.
Запитай у користувача 2 числа і знайди найбільший спільний дільник.
Запитай у користувача число і виведи всі дільники цього числа. */

let age = Number(prompt('Скільки тобі років?'));

if (!Number.isFinite(age) || age < 0) {
  alert('Будь ласка, введи коректний вік');
} else if (age <= 11) {
  alert('Ти дитина');
} else if (age <= 17) {
  alert('Ти підліток');
} else if (age <= 59) {
  alert('Ти дорослий');
} else {
  alert('Ти пенсіонер');
}
/* ============================================================================== */
const number = Number(prompt('Введи число від 0 до 9'));

if (!Number.isInteger(number) || number < 0 || number > 9) {
  alert('Будь ласка, введи коректне число від 0 до 9');
} else {
  switch (number) {
    case 1:
      alert('!');
      break;
    case 2:
      alert('@');
      break;
    case 3:
      alert('#');
      break;
    case 4:
      alert('$');
      break;
    case 5:
      alert('%');
      break;
    case 6:
      alert('^');
      break;
    case 7:
      alert('&');
      break;
    case 8:
      alert('*');
      break;
    case 9:
      alert('(');
      break;
    case 0:
      alert(')');
      break;
  }
}
/* ==============================================================================  */

const number1 = Number(prompt('Введи перше число'));
const number2 = Number(prompt('Введи друге число'));

if (!Number.isFinite(number1) || !Number.isFinite(number2)) {
  alert('Будь ласка, введи коректні числа');
} else {
  alert(number1 + number2);
}

/* ==============================================================================  */

const a = Number(prompt('Введіть початкове число діапазону:'));
const b = Number(prompt('Введіть кінцеве число діапазону:'));


if (!Number.isInteger(a) || !Number.isInteger(b)) {
  alert('Будь ласка, введіть два цілих числа.');
} else {
  const start = Math.min(a, b);
  const end = Math.max(a, b);
  let sum = 0;

  for (let i = start; i <= end; i++) {
    sum += i;
  }
  alert(`Сума всіх чисел від ${start} до ${end} = ${sum}`);
}

/* ==============================================================================  */

const a = Number(prompt('Введіть перше ціле число:'));
const b = Number(prompt('Введіть друге ціле число:'));

if (!Number.isInteger(a) || !Number.isInteger(b) || (a === 0 && b === 0)) {
  alert('Будь ласка, введіть два ненульових цілих числа.');
} else {
  function gcd(x, y) {
    x = Math.abs(x);
    y = Math.abs(y);
    while (y !== 0) {
      const r = x % y;
      x = y;
      y = r;
    }
    return x;
  }

  const result = gcd(a, b);
  alert(`Найбільший спільний дільник чисел ${a} і ${b} = ${result}`);
}

const n = Number(prompt('Введіть ціле число:'));

if (!Number.isInteger(n) || n <= 0) {
  alert('Будь ласка, введіть додатнє ціле число.');
} else {
  const divisors = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      divisors.push(i);
    }
  }
  alert(`Дільники числа ${n}: ${divisors.join(', ')}`);
}

/* Норма

Запитай у користувача п’ятирозрядне число і визначи, чи є воно паліндромом.
Запитай у користувача суму покупки і виведи суму до оплати зі знижкою:
від 200 до 300 - знижка буде 3%; 
від 300 до 500 - 5%;
від 500 і вище - 7%.
Запитай у користувача 10 чисел і порахуй, скільки він ввів додатніх, від’ємних і нулів. При цьому також порахуй, скільки з них парних і непарних. Виведи статистику на екран. Враховуй, що достатньо однієї змінної (не 10) для введення чисел користувачем.
Зацикли відображення днів тижня таким чином: «День тижня. Хочеш побачити наступний день? » і так до тих пір, поки користувач натискає OK. */

const input = prompt('Введіть п’ятирозрядне число:');
if (!/^\d{5}$/.test(input)) {
  alert('Будь ласка, введіть саме п’ятирозрядне число.');
} else {
  const reversed = input.split('').reverse().join('');
  if (input === reversed) {
    alert(`Число ${input} є паліндромом.`);
  } else {
    alert(`Число ${input} не є паліндромом.`);
  }
}
/* ============================================================================== */
const sum = Number(prompt('Введіть суму покупки:'));
let discount = 0;

if (sum >= 200 && sum <= 300) {
  discount = sum * 0.03;
} else if (sum > 300 && sum <= 500) {
  discount = sum * 0.05;
} else if (sum > 500) {
  discount = sum * 0.07;
}

alert(`Сума до оплати зі знижкою: ${sum - discount}`);

/* ============================================================================== */
let positiveCount = 0;
let negativeCount = 0;
let zeroCount = 0;
let evenCount = 0;
let oddCount = 0;

for (let i = 0; i < 10; i++) {
  const number = Number(prompt(`Введіть число ${i + 1}:`));
  if (number > 0) {
    positiveCount++;
  } else if (number < 0) {
    negativeCount++;
  } else {
    zeroCount++;
  }
  if (number % 2 === 0) {
    evenCount++;
  } else {
    oddCount++;
  }
}

alert(`Введено ${positiveCount} додатніх, ${negativeCount} від’ємних і ${zeroCount} нулів.`);