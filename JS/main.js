//знаходимо наші кнокпи і таби
const tabLink = document.querySelectorAll('[data-tab-link]');
const tab = document.querySelectorAll('[data-tab]');

//провіряємо чи є у нас кнопки
if (tabLink) {
   //проходимо по кнопках
   for (let i = 0; i < tabLink.length; i++) {
      //проходимо по кнопках щоб зловити клік
      tabLink[i].addEventListener('click', e => {
         //проходим по всім силкам щоб знати активність
         for (let b = 0; b < tabLink.length; b++) {
            tabLink[b].classList.remove('active')
         }

         //також потрібно зняти активність з всіх табів
         for (let c = 0; c < tab.length; c++) {
            tab[c].classList.remove('active')
         }

         //відміняєм дії по дефолту
         e.preventDefault();

         //потрібно додати клас нажатій кнопці якщо ми їй додаємо стилі
         //коли вона активна
         tabLink[i].classList.add('active')

         //проходим по табам
         for (let a = 0; a < tab.length; a++) {

            //якщо ваша кнопка по якій ми клікнули має такий самий індекс
            //як і в табі то ми цьому табу даємо клас active
            if (tab[a].dataset.tab === tabLink[i].dataset.tabLink) {
               tab[a].classList.add('active');
            }
         }
      })
      
   }
}

//знаходим всі наші картки
const carts = document.querySelectorAll("[data-carts]");

//перевіряємо на наявність наших карток
if (carts.length) {
   //проходим по кожній карточці
   for (let i = 0; i < carts.length; i++) {
      //ловим клік 
      carts[i].addEventListener("click", e => {
         //якщо є клік знімаєм всі клас active з карток
         for (let j = 0; j < carts.length; j++) {
         carts[j].classList.remove("active");
      }
      //і даємо клас картці по якій був клік
         carts[i].classList.add("active");
      })
   }
}


//знайшов кнопки
const tarifsBtn = document.querySelectorAll("[data-tarifs-btn]");
const tarifsObject = document.querySelector("[data-tarifs-object]");

//роблю провірку
if (tarifsBtn.length) {
   for (let i = 0; i < tarifsBtn.length; i++) {
      //ловлю клік по кнопці
      tarifsBtn[i].addEventListener("click", e => {
         for (let j = 0; j < tarifsBtn.length; j++) {
            //знімаю клас з кнопки
            tarifsBtn[j].classList.remove("active");
         }

         //забираю класи які добавляв раніше
         tarifsObject.classList.remove("combo");
         tarifsObject.classList.remove("redemption");
         tarifsObject.classList.remove("feedback");

            // і додаю при натискані кнопки
         tarifsBtn[i].classList.add("active");

         if (tarifsBtn[i].dataset.tarifsBtn === "1") {
            tarifsObject.classList.add("combo");
         } else if (tarifsBtn[i].dataset.tarifsBtn === "2") {
            tarifsObject.classList.add("redemption");
         } else {
            tarifsObject.classList.add("feedback");
         }
      })
   }
};

