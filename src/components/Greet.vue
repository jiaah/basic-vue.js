<template>
	<button @click="greet">Greet</button>
</template>

<script>
export default {
	data() {
		return {
			name: 'Vueeeeeeee 그대여',
		};
	},
	methods: {
		greet(e) {
			alert(`Hello ${this.name} !`);

			if (e) {
				alert(`e.target.tagName: ${e.target.tagName}`);
			}
		},
	},
};
</script>
