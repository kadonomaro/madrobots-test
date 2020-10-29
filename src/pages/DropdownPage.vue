<template>
	<div class="page">
		<h1 class="page__title">Выпадающий список</h1>
		<div class="page__component">
			<TreeView />
		</div>
	</div>
</template>

<script>
import TreeView from '@/components/TreeView/TreeView';

export default {
	name: 'DropdownPage',
	components: {
		TreeView
	}
}
</script>
