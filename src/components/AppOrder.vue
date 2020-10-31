<template>
	<div class="order">
		<FormComponent :action="'/'" @on-submit="submitHandler" v-if="!isSended" />
		<h2 class="order__title" v-else>Заявка успешно отправлена</h2>
	</div>
</template>

<script>
import FormComponent from '@/components/Form/FormComponent';

export default {
	name: 'AppOrder',
	components: {
		FormComponent
	},
	data() {
		return {
			isSended: false
		}
	},
	methods: {
		submitHandler(payload) {
			fetch('http://jsonplaceholder.typicode.com/posts', {
				method: 'POST'
			}).then(response => {
				console.log(response);
				this.isSended = true;
			});
		}
	}
}
</script>

<style lang="scss">
	.order {
		&__title {
			text-align: center;
		}
	}
</style>
