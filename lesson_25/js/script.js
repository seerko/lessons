"use strict"
// Задача №1
// Отримати в константу елемент <body>
const body = document.body;

// Задача №2
// Написати функцію, яка додає в <body> список UL
// з певною кількістю LI (кількість має передаватись як параметр функції, також мати значення за замовченням)
function addList(count = 3) {
  const body = document.body;
  let list = document.createElement("ul");
  for (let index = 1; index <= count; index++) {
    list.innerHTML += `<li class="item">${index}</li>`;
  }
  body.insertAdjacentElement("afterbegin", list);
}
addList();

// Задача №3
// Додати до елементу <body> класс loaded.
// Потім перевірити чи є клас loaded у елемента <body>
// і, якщо є, додати стиль кольору тесту зедлений.
body.classList.add("loaded");
if (body.classList.contains("loaded")) {
  body.style.color = "green";
}

// Задача №4
// Дано в html: три елементи з класом item.
// Треба отримати ці елементи в константу, кожному додати клас active,
// та перезаписати контент всередені кожного елемента на "Елемент №(тут порядковий номер елементу починаючи з 1)".
const elementItems = document.querySelectorAll(".item");
if (elementItems) {
  elementItems.forEach((item, index) => {
    item.classList.add("active");
    item.textContent = `Елемент №${index + 1}`;
  });
}
// Задача №5
// Дано в html: текст, далі кнопка з класом button.
// Треба прокрутити скрол сторінки до кнопки
const button = document.querySelector(".button");
if (button) {
  button.scrollIntoView({
    block: "center",
    inline: "nearest",
    behavior: "smooth",
  });
}
// Задача №6
// Дано в html: посилання з класом link
// Треба додати до посилання дата атрибут зі значенням 100
// Поім отримати значення трибуту, та, якщо значення меньше 200
// пофарбувати колір тексту посилання в червоний
const link = document.querySelector(".link");
if (link) {
  link.dataset.num = 100;
  if (parseFloat(link.dataset.num) < 200) {
    link.style.color = "red";
  }
}
