
//Коли документ html, а відповідно і css підгрузяться викличеться наступний метод function
$(document).ready(function() {

    //отримуємо висосту активного продукту і відповідно розмір активної карточки
    var getProductHeight = $('.product.active').height();
  
    // присвоюємо всім продуктам висоту теперішнього продукту
    $('.products').css({
      height: getProductHeight
    });
  
    //метод для отримання висоти активного продукту(карточки)
    function calcProductHeight() {
      // Отримуємо висоту поточного продукту
      getProductHeight = $('.product.active').height();
      
      // присвоюємо всім значенням продуктів висоту поточного продукту
      $('.products').css({
        height: getProductHeight
      });
    }
  
    //Метод для анімації крольору тла, кольору імені персонажа, і кольору кнопок наст. і попердн. 
    function animateContentColor() {
      
      //отримуємо колір активної карточки(продукту)
      var getProductColor = $('.product.active').attr('product-color');
  
      //змінюємо колір для тла, назви, і кнопок
      $('body').css({
        background: getProductColor
      });
  
      $('.title').css({
        color: getProductColor
      });
  
      $('.btn').css({
        color: getProductColor
      });
    }
  
    //беремо всі елементи з класом продукт і беремо лише той що з міткою "активний"
    var productItem = $('.product'),
      productCurrentItem = productItem.filter('.active');
  

    
    $('#next').on('click', function(e) {
      // Виконання стандартної поведінки браузера при кліку на посилання блокується за допомогою цього методу
      e.preventDefault();
      //знаходження наступної карточки
      var nextItem = productCurrentItem.next();
      // видалаяємо "активний " з класу поточного предмету
      productCurrentItem.removeClass('active');
      // Перевірка на наступний елемент, якщо він їснує передаємо значення активного наступному елементу
      if (nextItem.length) {
  
        productCurrentItem = nextItem.addClass('active');
      } 
      // Якщо ні - то повертаємось до самого першого елементу(В нашому випадку це Марк Цукерберг)
      else {
        productCurrentItem = productItem.first().addClass('active');
      }
      

      // У функція в нас використовується лише активний продукт, тому немає проблем з тим щоб визвати їх тут

      // Змінюємо розмір поточного продукту
      calcProductHeight();
      // Змінюємо колір поточног продукту
      animateContentColor();
    });
  
    // Такий же самий метод як і вище, але для кнопки Попередній з відповідною логікою
    $('#prev').on('click', function(e) {
      e.preventDefault();
      

      var prevItem = productCurrentItem.prev();
  
      productCurrentItem.removeClass('active');
  
      if (prevItem.length) {
        productCurrentItem = prevItem.addClass('active');
      } else {
        productCurrentItem = productItem.last().addClass('active');
      }
  
      calcProductHeight();
      animateContentColor();
    });
  
    // Хвилястіть та її налаштування, викликається кліком на кнопку, по суті цілий блок коду для анімації клавіш Наступний та Попередній
    $('[ripple]').on('click', function(e) {
      // Створення елементу div з класом 'ripple' та надання йому атрибутів
      var rippleDiv = $('<div class="ripple" />'),
        // Встановлення розміру анімації "розлиття хвиль"
        rippleSize = 60,
        // Визначаємо координати верхнього лівого кута елемента по якому здійснюється клік, в нашому випадку - кнопки
        rippleOffset = $(this).offset(),

        // встановлюємо позицію миші під час кліку відносно обєкту кнопки
        rippleY = e.pageY - rippleOffset.top,
        rippleX = e.pageX - rippleOffset.left,
        // вибираємо всі елементи з класом ripple
        ripple = $('.ripple');
      
      // встановлення ціесес атрибтуів ріпла(хвилі) таких як положення, 
      rippleDiv.css({
        top: rippleY - (rippleSize / 2),
        left: rippleX - (rippleSize / 2),
        // беремо колір з html
        background: $(this).attr("ripple-color")
        // Використувємо на кнопку
      }).appendTo($(this));
  
      //видалення елементу ріпл(хвиля) через 1900 мілісекунд після його додавання
      window.setTimeout(function() {
        rippleDiv.remove();
      }, 1900);

    });
  });