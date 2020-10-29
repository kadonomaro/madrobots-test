<template>
	<form :action="action" class="form" @submit.prevent="submitHandler">
		<label class="form__label">
			<input
				type="text"
				class="input form__field"
				placeholder="Имя"
				v-model="form.name"
			>
		</label>
		<label class="form__label">
			<input
				type="email"
				class="input form__field"
				placeholder="Почта"
				v-model="form.email"
			>
		</label>
		<label class="form__label">
			<input
				type="tel"
				class="input form__field"
				placeholder="Телефон"
				v-model="form.phone"
			>
		</label>
		<label class="form__label">
			<textarea
				rows="5"
				class="input form__field form__field--type--textarea"
				placeholder="Комментарий"
				v-model="form.comment"
			></textarea>
		</label>
		<div class="form__controls">
			<button class="button form__button" type="submit">Отправить</button>
		</div>
	</form>
</template>

<script>
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
			}
		}
	},
	methods: {
		submitHandler() {
			console.log(this.form);
		}
	}
}
</script>

<style lang="scss">
	.form {
		&__label {
			display: block;
			&:not(:last-child) {
				margin-bottom: 10px;
			}
		}
		&__field {
			width: 100%;
		}
		&__field--type--textarea {
			min-height: 100px;
		}
	}
</style>
