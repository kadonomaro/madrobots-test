export function validate(value, options = []) {
	if (options.length) {
		return options.map(validator => {
			return validators[validator](value);
		});
	}
}


const validators = {
	required(value) {
		console.log('validators required works');
		if (!value) {
			return { valid: false, message: 'Поле обязательно для заполнения' }
		}
		return { valid: true, message: '' }
	},

	email(value) {
		console.log('validators email works');
		if (!value.match(/^\w+([.-]?\w+)_@\w+(_[_.-]?\w+)_(.\w{2,3})+$/)) {
			return { valid: false, message: 'Введите корректный адрес электронной почты.' };
		}
		return { valid: true, message: '' }
	},

	phone(value) {
		console.log('validators phone works');
		if (!value.match(/^[+][(]?[0-9]{1,3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,7}$/gm)) {
			return { valid: false, message: 'Введите корректный номер телефона.' };
		}
		return { valid: true, message: '' }
	}
}


