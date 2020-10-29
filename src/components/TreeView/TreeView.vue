<template>
	<ul class="tree-view">
		<TreeViewItem :item="dropdown" :open="false" />
	</ul>
</template>

<script>
import TreeViewItem from './TreeViewItem';
import dropdown from '@/assets/data/dropdown.json';

export default {
	name: 'TreeView',
	components: {
		TreeViewItem
	},
	data() {
		return {
			dropdown
		}
	}
}
</script>

<style lang="scss">
	.tree-view {
		margin: 0;
		padding: 0;
		list-style: none;
	}
</style>
