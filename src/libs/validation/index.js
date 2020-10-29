import { regex } from './regex';

export function validate(value, options = []) {
	if (options.length) {
		return options.map((validator) => {
			try {
				return validators[validator](value);
			} catch (error) {
				console.error(`Validator '${validator}' does not exist`);
			}
		}).find(validator => validator ? !validator.valid : false) || { valid: true, message: '' };
	}
}


const validators = {
	required(value) {
		if (!value) {
			return { valid: false, message: 'Поле обязательно для заполнения' }
		}
		return { valid: true, message: '' };
	},

	email(value) {
		if (!value.match(regex.email)) {
			return { valid: false, message: 'Введите корректный адрес электронной почты.' };
		}
		return { valid: true, message: '' };
	},

	phone(value) {
		if (!value.match(regex.phone)) {
			return { valid: false, message: 'Введите корректный номер телефона.' };
		}
		return { valid: true, message: '' };
	}
}
