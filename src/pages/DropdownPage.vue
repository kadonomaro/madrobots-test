<template>
	<div class="page">
		<router-link class="page__link" :to="{ name: 'HomePage' }">Назад</router-link>
		<h1 class="page__title">Выпадающий список</h1>
		<div class="page__component">
			<TreeView :list="getData"/>
		</div>
	</div>
</template>

<script>
import TreeView from '@/components/TreeView/TreeView';
import { mapGetters } from 'vuex';

export default {
	name: 'DropdownPage',
	components: {
		TreeView
	},
	mounted() {
		this.$store.dispatch('fetchLocaleData');
	},
	computed: {
		...mapGetters(['getData'])
	}
}
</script>
