// Суворий режим
"use strict";

// Задача №1
// Дано в html: три елементи з класом item.
// При кліку на кожен з елментів додати клас active,
// при повторному кліку прибрати клас

document.addEventListener("click", documentAction);

function documentAction(e) {
  const targetElement = e.target;
  const itemElement = targetElement.closest(".item");
  if (itemElement) {
    itemElement.classList.toggle("active");
  }
}

// Задача №2
// Дано в css/scss: body прозорий
// При повному завантаженню сторінки додати клас до body який прибирає прозорість.

window.addEventListener("load", pageLoaded);

function pageLoaded(e) {
  document.body.classList.add("bg-color");
}

// Задача №3
// Дано в html: header main footer
// Пи наведенні курсору на header змінювати колір фону у footer.
// Коли курсор йде з header повертати початковий фон для footer.

const header = document.querySelector("header");
const footer = document.querySelector("footer");

if (header && footer) {
  header.addEventListener("mouseover", function () {
    footer.classList.add("footer--reverse");
  });
  header.addEventListener("mouseout", function () {
    footer.classList.remove("footer--reverse");
  });
}

// Задача №4
// Дано в html: текст, елемент з класом item, текст. Так, що елемент з класом item за межами в'юпотрта.
// Створити функцію яка будує інтервал який буде змінювати контент в елементі item виводячи цифру яка збільшується на одиницю: 1 2 3 ... і т.д.
// Затримка між зміною числа, та до якого числа має працювати інтервал має задаватись в дата атрибутах елемента item.
// Функція має запустатить коли ми доскролюємо до елементу item (його видно), і не запускатись повторно.
let options = {
  root: null,
  rootMargin: "0px 0px 0px 0px",
  threshhold: 0.3,
};

let callback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const targetElement = entry.target;
      const delay = parseFloat(targetElement.dataset.delayTime) || 500;
      const end = parseFloat(targetElement.dataset.end) || 5;

      observer.unobserve(targetElement);

      let counter = 1;
      const interval = setInterval(() => {
        targetElement.textContent = counter;
        counter++;

        if (counter > end) {
          clearInterval(interval);
        }
      }, delay);
    }
  });
};

let observer = new IntersectionObserver(callback, options);

let target = document.querySelector(".count-item");
if (target) {
  observer.observe(target);
}
