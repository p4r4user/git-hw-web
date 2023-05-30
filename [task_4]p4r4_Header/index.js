const p = document.querySelector('.main-element');
const nav = document.querySelector('.nav');

window.addEventListener("DOMContentLoaded", () => {
	const nav = new CardNav("nav");
});

window.addEventListener('scroll', () => {
	const elementRect = p.getBoundingClientRect();
	const navRect = nav.getBoundingClientRect();

	if (navRect.top >= -101) {
		nav.style.top = '0px';
	} else {
		nav.style.top = '-101px';
	}

	if (elementRect.top <= window.innerHeight && elementRect.bottom >= 0) {
		nav.style.position = 'relative';
	} else {
		nav.style.top = '0';
		nav.style.position = 'fixed';
	}

})

class CardNav {
	//? Функція конструктора приймає параметр "qs", який є CSS-селектором, що використовується для вибору елемента з DOM.
	constructor(qs) {
		this.overflowClass = "no-scroll";
		this.openClass = "nav--open";
		this.activeClass = "nav__item--active";
		this.el = document.querySelector(qs);

		//* До вибраного елемента додається слухач подій, який прослуховує подію "click" і викликає метод "toggle" при її спрацьовуванні.
		this.el?.addEventListener("click", this.toggle.bind(this));
	}

	toggle(e) {

		const {target} = e;

		//? Перевірка на наявність у емелементі атрибуту хреф(тобто наш навбар)
		if (target.hasAttribute("href")) {
			const {body} = document;
			const {overflowClass, openClass, activeClass, el} = this;

			//* Перемикач
			el.classList.toggle(openClass);


			//? Якщо навбач
			if (el.classList.contains(openClass)) {
				body.classList.add(overflowClass);
			} else {
				body.classList.remove(overflowClass);

				//
				const active = el?.querySelector(`.${activeClass}`);

				active.classList.remove(activeClass);


				target.parentElement.classList.add(activeClass);
			}
		}
	}
}
