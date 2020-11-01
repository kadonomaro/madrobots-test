<template>
	<div class="order">
		<FormComponent
			:action="'https://reqres.in/api/users'"
			@on-success="successHandler"
			v-if="!isSended"
		/>
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
		successHandler(payload) {
			this.isSended = true;
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
