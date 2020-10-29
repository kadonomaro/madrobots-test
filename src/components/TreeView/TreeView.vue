<template>
	<ul class="tree-view">
		<TreeViewItem :item="list"/>
	</ul>
</template>

<script>
import TreeViewItem from './TreeViewItem';

export default {
	name: 'TreeView',
	components: {
		TreeViewItem
	},
	props: {
		list: {
			type: Object,
			requred: true
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
