// Отримуємо доступ до:

// Основний результат ліку що є серед текстових блоків
const lik_field_res = document.querySelector('.lik_res');
// Результат ліку для допоміжного вікна
const lik_field_preres = document.querySelector('.lik_preres');
// Отримуємо блок в якому міститься елемент при якому починаємо лік
const targetElement = document.querySelector('.task_container');
// Отримуємо кнопку рестарта
const resetBtn = document.getElementById('restart_btn');


// ініціалізуємо змінні
let flag = 0;
let seting_Interval;
let count = 0;


// основна функція яка дозволяє +- плавно з інтервалом в 1-ну секунду змінювати лік
function counter() {
    // реалізація за допомогою інтервалу
    seting_Interval = setInterval(() => {
        count++;
        // Присвоєння для каунтерів
        lik_field_res.textContent = count;
        lik_field_preres.textContent = count;
}, 1000);
}


// Функція що буде викликатись при доскролі до потрібного нам елементу
function scroll_n_count(){
    // Перевірка за допомогою допоміжного методу
    if (isScrolledIntoView(targetElement)) {
        if (flag === 0) {
            counter();
        }
        // Я побував у всіх із 141384512158125906 галактик і тільки при такій комбінації свапів флагу
        // і очистки інтервалу в мене вийшло те що я бажав, я навіть не знаю чому так, хоч навіть
        // пробував віалізувати це, це просто працює
        flag = 1;
        } else {
        clearInterval(seting_Interval);
        flag = 0;
        }
}


// Допоміжна функція яка перевіряє чи є певний обєк в межах нашого вікна, повертає тру чи фолс.
function isScrolledIntoView(elem) {
    // отримуємо геометричні данні про елемент 
    const rect = elem.getBoundingClientRect();
    // беремо єдині величини що нас цікавлять а саме низ цього елементу та його верх(адже саме так працює скролінг,вверх або вниз)
    const elemTop = rect.top;
    const elemBottom = rect.bottom;
    // завдяки тернарним операторам отримуємо відповідь виконавши перевірку
    const isVisible = elemTop < window.innerHeight && elemBottom >= 0;
    // повертаємо результат
    return isVisible;
 }


//  Прослуховувач подій для кнопки рестарту
resetBtn.addEventListener("click", function (){
    // зупиняємо інтервал
    clearInterval(seting_Interval);
    // приховаємо за непотрібністю і заради балів стилю SSS
    lik_field_res.textContent = '[ XXX ]';
    lik_field_preres.textContent = '[ XXX ]';
    // з флагом та ж ситуація що і у рядках 38-40
    flag = 0;
    // обнуляємо
    count = 0;
    // добавляємо ще раз івент прослуховувач
    setTimeout(window.addEventListener('scroll', scroll_n_count), 3000);    
});


// Прослуховувач подій для доскрола до потрібного елементу
setTimeout(window.addEventListener('scroll', scroll_n_count), 3000);