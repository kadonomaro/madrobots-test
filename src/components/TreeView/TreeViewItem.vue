<template>
  <li class="tree-item">
    <div
			class="tree-item__title"
			:class="{
				'tree-item__title--active': hasChild,
				'tree-item__title--opened': hasChild && isOpen
			}"
			@click="toggle">{{ item.Name }}</div>
    <ul class="tree-item__list" v-show="isOpen" v-if="hasChild">
      <TreeViewItem
				v-for="child in childs"
				:key="child.Id"
				:item="child"
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
		}
  },
  data() {
    return {
      isOpen: false,
    };
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

<style lang="scss">
	.tree-item {
		list-style: none;
		&__title {
			position: relative;
			margin-bottom: 10px;
			padding: 8px 12px;
			border-radius: 5px;
			box-shadow: 0 0 6px rgba($color: #000000, $alpha: 0.2);
			transition: box-shadow 0.1s ease-in, background-color 0.1s ease-in;
		}
		&__title--active {
			padding-right: 30px;
			cursor: pointer;
			&:hover {
				box-shadow: 0 0 3px rgba($color: #000000, $alpha: 0.2);
			}
			&::before {
				content: '';
				position: absolute;
				right: 10px;
				top: 50%;
				width: 15px;
				height: 15px;
				background-image: url('~@/assets/icons/right-arrow.svg');
				transform: translateY(-50%);
				transition: transform 0.1s ease-in;
			}
		}
		&__title--opened {
			background-color: $color-light-gray;
			&::before {
				transform: translateY(-50%) rotate(90deg);
			}
		}
		&__list {
			padding-left: 20px;
		}
	}
</style>
