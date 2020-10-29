<template>
	<div class="page">
		<router-link class="page__link" :to="{ name: 'HomePage' }">Назад</router-link>
		<h1 class="page__title">Список лет</h1>
		<div class="page__component">
			<ListComponent />
		</div>
	</div>
</template>

<script>
import ListComponent from '@/components/List/ListComponent';

export default {
	name: 'ListPage',
	components: {
		ListComponent
	}
}
</script>
