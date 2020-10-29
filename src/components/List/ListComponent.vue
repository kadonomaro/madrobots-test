<template>
	<div class="years">
		<h2 class="years__title" ref="title"></h2>
		<label class="years__label">
			<span>Сортировать по:</span>
			<select class="input years__select" @change="sortHandler">
				<option value="1">Возрастанию</option>
				<option value="-1">Убыванию</option>
			</select>
		</label>
		<ul class="years__list" ref="list">
			<li class="years__item" v-for="year in years" :key="year.value" :data-value="year.value">
				{{ year.text }}
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'ListComponent',
	data() {
		return {
			sort: 1
		}
	},
	mounted() {
		this.addListener();
	},
	beforeDestroy() {
		this.removeListener();
	},
	methods: {
		sortHandler(event) {
			this.sort = +event.target.value;
		},

		clickHandler(event) {
			if (event.target.dataset.value) {
				this.$refs.title.textContent = event.target.dataset.value;
			}
		},

		addListener() {
			this.$refs.list.addEventListener('click', this.clickHandler);
		},

		removeListener() {
			this.$refs.list.removeEventListener('click', this.clickHandler);
		}
	},
	computed: {
		years() {
			const arr = [];
			const startYear = 980;
			const currentYear = new Date().getFullYear();
			for (let i = startYear; i <= currentYear; i++) {
				arr.push({ value: i, text: i });
			}
			return arr.sort((a, b) => (a.value - b.value) * this.sort);
		}
	}
}
</script>

<style lang="scss">
	.years {
		&__title {
			margin: 0 0 10px;
			text-align: center;
			line-height: 1;
		}
		&__label {
			display: block;
		}
		&__select {
			width: 100%;
		}
		&__list {
			margin: 0;
			padding: 20px 0;
			text-align: center;
			list-style: none;
		}
	}
</style>
