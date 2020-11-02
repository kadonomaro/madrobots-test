<template>
  <div class="page">
		<AppNavigation :excludes="['HomePage']"/>
		<h1 class="page__title">Тестовое задание</h1>
  </div>
</template>

<script>
import AppNavigation from '@/components/blocks/AppNavigation';

export default {
	name: 'HomePage',
	components: {
		AppNavigation
	},
}
</script>
