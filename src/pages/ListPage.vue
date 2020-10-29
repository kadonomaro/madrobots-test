<template>
	<div class="page">
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
