// Вибираю з документу field-1 та field-2, що по суті є вводимими нами часлами 
const inputOne = document.querySelector('.field-1');
const inputTwo = document.querySelector('.field-2');

// Вибираю з документу поля вводу
const parentInput = document.querySelector('.wrapper-input');


// Для полів вводу створюю прослуховувач подій на ввід, і він при вводі буде виконувати наступний метод
parentInput.addEventListener('input', function () {
	// Якщо довжина числа один і числа два буде більше рівна одному(тобто перевірка чи одночасно заповнені два поля),то 
	if (inputOne.value.length >= 1 && inputTwo.value.length >= 1) {
		// Я записую значення відразу як числа у змінні numberOne ta numberTwo
		let numberOne = +inputOne.value;
		let numberTwo = +inputTwo.value;
		//Вибираю з документу поля запису відповідей
		const plus = document.querySelector('.plus');
		const minus = document.querySelector('.minus');
		const mult = document.querySelector('.mult');
		const divide = document.querySelector('.divide');
		const pow = document.querySelector('.pow');
		const sqrt = document.querySelector('.sqrt');
		//Перевірка на пасхалку
		if(numberOne === 1488 && numberTwo === 420){
			plus.textContent = `Ви`
			minus.textContent = `Змогли`
			mult.textContent = `Віднайти`
			divide.textContent = 'Сховану'
			pow.textContent = `Мною`
			sqrt.textContent = `Пасхалку`
		}else{
		//Якщо умови пасхалки не виконані, то проводимо патематичні дії та заокруглюємо відповіді
		plus.textContent = `${Math.floor((numberOne + numberTwo) * 100) / 100}`
		minus.textContent = `${Math.floor((numberOne - numberTwo) * 100) / 100}`
		mult.textContent = `${Math.floor((numberOne * numberTwo) * 100) / 100}`
		// Так звісно, я міг віддавати результат нескінченність, але тим кому потрібні знання такого роду і самі це знають
		if (numberTwo === 0) {
			divide.textContent = ':)'
		}else{
			divide.textContent = `${Math.floor((numberOne / numberTwo) * 100) / 100}`
		}
		pow.textContent = `${Math.floor(Math.pow(numberOne, numberTwo) * 100) / 100}`
		sqrt.textContent = `${Math.floor(Math.pow(numberOne, (1/numberTwo)) * 100) / 100}`
	}
	// Якщо вводу хоч одного числа немає, очищуємо поля
	}else{
			const plus = document.querySelector('.plus');
			const minus = document.querySelector('.minus');
			const mult = document.querySelector('.mult');
			const divide = document.querySelector('.divide');
			const pow = document.querySelector('.pow');
			const sqrt = document.querySelector('.sqrt');
			plus.textContent = ''
			minus.textContent
			mult.textContent = ''
			divide.textContent = ''
			pow.textContent = ''
			sqrt.textContent = ''
	}
})