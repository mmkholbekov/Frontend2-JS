// Starbucks
const Starbucks = {
  coffee: [
    {
      name: "Капучино",
      description: "Кофейный напиток с эспрессо и молочной пенкой.",
    },
    {
      name: "Латте",
      description: "Нежный кофейный напиток с молоком и эспрессо.",
    },
    {
      name: "Эспрессо",
      description: "Крепкий черный кофе без добавок.",
    },
  ],
  tea: [
    {
      name: "Черный чай",
      description: "Черный чай с ароматом и без добавок.",
    },
    {
      name: "Зеленый чай",
      description: "Свежий зеленый чай с нотками трав и цитруса.",
    },
  ],
  otherDrinks: [
    {
      name: "Фрэппучино",
      description: "Освежающий молочный коктейль с кофейным вкусом.",
    },
    {
      name: "Горячий шоколад",
      description: "Ароматный горячий шоколад с взбитыми сливками.",
    },
  ],
};


// Программа для определения дня недели
const inputNumber = parseInt(prompt("Введите число (0-6):"));

switch (inputNumber) {
  case 0:
    console.log("Воскресенье");
    break;
  case 1:
    console.log("Понедельник");
    break;
  case 2:
    console.log("Вторник");
    break;
  case 3:
    console.log("Среда");
    break;
  case 4:
    console.log("Четверг");
    break;
  case 5:
    console.log("Пятница");
    break;
  case 6:
    console.log("Суббота");
    break;
  default:
    console.log("Неверный ввод. Введите число от 0 до 6.");
}
