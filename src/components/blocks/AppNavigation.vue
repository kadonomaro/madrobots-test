<template>
	<nav class="navigation">
		<ul class="navigation__list">
			<li class="navigation__item" v-for="route in routes" :key="route.name">
				<router-link class="navigation__link" :to="{ name: route.name }">{{route.meta.title}}</router-link>
			</li>
		</ul>
	</nav>
</template>

<script>
export default {
	name: 'AppNavigation',
	props: {
		excludes: {
			type: Array,
			required: false,
			default: () => []
		}
	},
	computed: {
		routes() {
			return this.$router.options.routes.filter((route) => {
				return !this.excludes.includes(route.name);
			});
		}
	}
}
</script>

<style lang="scss">
	.navigation {
		&__list {
			display: flex;
			justify-content: center;
			margin: 0;
			padding: 20px 0;
			list-style: none;
		}
		&__item {
			margin: 0 5px;
		}
		&__link {
			display: block;
			padding: 4px 12px;
			color: inherit;
			text-decoration: none;
			background-color: $color-light-gray;
			border-radius: 5px;
			transition: background-color 0.1s ease-in;
			&:hover {
				background-color: darken($color: $color-light-gray, $amount: 5%);
			}
		}
	}
</style>
