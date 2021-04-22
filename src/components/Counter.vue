<template>
	<button @click="counterMethod += 1">method button</button>
	<p>counterMethod : {{ counterMethod }}</p>
	<button @click="counterComputed += 1">computed button</button>
	<p>counterComputed : {{ counterComputed }}</p>
	{{ printTextMethod() }}
	{{ printTextComputed }}
</template>

<script>
export default {
	data() {
		return {
			counterComputed: 0,
			counterMethod: 0,
		};
	},
	methods: {
		printTextMethod: function () {
			console.log(`counter printed from method: ${this.counterMethod}`);
			return;
		},
	},
	computed: {
		// eslint-disable-next-line vue/return-in-computed-property
		printTextComputed: function () {
			console.log(`counter printed from computed: ${this.counterComputed}`);
			return;
		},
	},
};
</script>
