<template>
	<div class="page">
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
		this.$store.dispatch('setData');
	},
	computed: {
		...mapGetters(['getData'])
	}
}
</script>
