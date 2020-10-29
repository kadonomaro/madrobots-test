<template>
	<div class="page">
		<router-link class="page__link" :to="{ name: 'HomePage' }">Назад</router-link>
		<h1 class="page__title">Валидация формы</h1>
		<div class="page__component">
			<FormComponent :action="'/'" />
		</div>
	</div>
</template>

<script>
import FormComponent from '@/components/Form/FormComponent';

export default {
	name: 'FormPage',
	components: {
		FormComponent
	}
}
</script>
