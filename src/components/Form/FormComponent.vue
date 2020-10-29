<template>
	<form :action="action" class="form" @submit.prevent="submitHandler">
		<label class="form__label">
			<input
				type="text"
				class="input form__field"
				:class="{ 'input--error': !errors.name.valid }"
				placeholder="Имя"
				v-model="form.name"
			>
			<span class="form__error" v-if="!errors.name.valid">{{errors.name.message}}</span>
		</label>
		<label class="form__label">
			<input
				type="email"
				class="input form__field"
				:class="{ 'input--error': !errors.email.valid }"
				placeholder="Почта"
				v-model="form.email"
			>
			<span class="form__error" v-if="!errors.email.valid">{{errors.email.message}}</span>
		</label>
		<label class="form__label">
			<input
				type="tel"
				class="input form__field"
				:class="{ 'input--error': !errors.phone.valid }"
				placeholder="Телефон"
				v-model="form.phone"
			>
			<span class="form__error" v-if="!errors.phone.valid">{{errors.phone.message}}</span>
		</label>
		<label class="form__label">
			<textarea
				rows="5"
				class="input form__field form__field--type--textarea"
				:class="{ 'input--error': !errors.comment.valid }"
				placeholder="Комментарий"
				v-model="form.comment"
			></textarea>
			<span class="form__error" v-if="!errors.comment.valid">{{errors.comment.message}}</span>
		</label>
		<div class="form__controls">
			<button class="button form__button" type="submit">Отправить</button>
		</div>
	</form>
</template>

<script>
import { validate } from '@/validation';

export default {
	name: 'FormComponent',
	props: {
		action: {
			type: String,
			required: true
		}
	},
	data() {
		return {
			form: {
				name: '',
				email: '',
				phone: '',
				comment: ''
			},
			errors: {
				name: { valid: true, message: '' },
				email: { valid: true, message: '' },
				phone: { valid: true, message: '' },
				comment: { valid: true, message: '' }
			}
		}
	},
	methods: {
		submitHandler() {
			this.errors.name = validate(this.form.name, ['required']);
			this.errors.email = validate(this.form.email, ['required', 'email']);
			this.errors.phone = validate(this.form.phone, ['required', 'phone']);
			this.errors.comment = validate(this.form.comment, ['required']);

			if (Object.values(this.errors).every(error => error.valid)) {
				this.$emit('on-submit', this.form);
			}
		}
	}
}
</script>

<style lang="scss">
	.form {
		&__label {
			position: relative;
			display: block;
			margin-bottom: 20px;
		}
		&__field {
			width: 100%;
		}
		&__field--type--textarea {
			min-height: 100px;
		}
		&__error {
			position: absolute;
			z-index: 9;
			left: 0;
			bottom: 3px;
			width: 100%;
			padding: 3px 6px;
			color: #ffffff;
			font-size: 14px;
			line-height: 12px;
			background-color: $color-danger;
			border-bottom-left-radius: 5px;
			border-bottom-right-radius: 5px;
			transform: translateY(100%);
			box-sizing: border-box;
		}
	}
</style>
