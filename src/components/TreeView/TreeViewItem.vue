<template>
  <li class="tree-item">
    <div class="tree-item__title" @click="toggle">{{ item.Name }}</div>
    <ul class="tree-item__list" v-show="isOpen" v-if="hasChild">
      <TreeViewItem
				v-for="child in childs"
				:key="child.Id"
				:item="child"
				:open="open"
			/>
    </ul>
  </li>
</template>

<script>
export default {
  name: "TreeViewItem",
  props: {
    item: {
      type: Object
		},
		open: {
			type: Boolean
		}
  },
  data() {
    return {
      isOpen: false,
    };
	},
	mounted() {
		this.isOpen = this.open;
	},
	methods: {
		toggle() {
			if (this.hasChild) {
				this.isOpen = !this.isOpen;
			}
		}
	},
  computed: {
    hasChild() {
      return this.item.Childs && this.item.Childs.length;
		},

		childs() {
			return [...this.item.Childs].sort((a, b) => a.Order - b.Order);
		}
  },
};
</script>

<style>

</style>
