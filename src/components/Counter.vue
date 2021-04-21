<template>
	<button @click="counter += 1">Add 1</button>
	<p>The button's been clicked {{ counter }} times.</p>
	<p>auto counter : {{ autoCounter }}</p>
</template>

<script>
export default {
	data() {
		return {
			counter: 0,
			autoCounter: 0,
		};
	},
	mounted() {
		setInterval(() => {
			this.autoCounter++;
		}, 1000);
	},
};
</script>
