<template>
	<div class="page">
		<router-link class="page__link" :to="{ name: 'HomePage' }">Назад</router-link>
		<h1 class="page__title">Валидация формы</h1>
		<div class="page__component">
			<AppOrder />
		</div>
	</div>
</template>

<script>
import AppOrder from '@/components/AppOrder';

export default {
	name: 'FormPage',
	components: {
		AppOrder
	}
}
</script>
