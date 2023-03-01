const inputOne = document.querySelector('.field-1');
const inputTwo = document.querySelector('.field-2');
const parentInput = document.querySelector('.wrapper-input');
// const btn =

parentInput.addEventListener('input', function () {
	if (inputOne.value.length >= 1 && inputTwo.value.length >= 1) {
		let numberOne = +inputOne.value;
		let numberTwo = +inputTwo.value;

		const plus = document.querySelector('.plus');
		plus.textContent = `${Math.floor((numberOne + numberTwo) * 100) / 100}`
		const minus = document.querySelector('.minus');
		minus.textContent = `${Math.floor((numberOne - numberTwo) * 100) / 100}`
		const mult = document.querySelector('.mult');
		mult.textContent = `${Math.floor((numberOne * numberTwo) * 100) / 100}`
		const divide = document.querySelector('.divide');
		divide.textContent = `${Math.floor((numberOne / numberTwo) * 100) / 100}`
		const pow = document.querySelector('.pow');
		pow.textContent = `${Math.floor(Math.pow(numberOne, numberTwo) * 100) / 100}`
		const sqrt = document.querySelector('.sqrt');
		sqrt.textContent = `${Math.floor(Math.pow(numberOne, (1/numberTwo)) * 100) / 100}`
	}
})