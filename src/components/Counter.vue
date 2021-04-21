<template>
	<button @click="counter += 1">Add 1</button>
	<p>The button's been clicked {{ counter }} times.</p>
</template>

<script>
export default {
	data() {
		return {
			counter: 0,
		};
	},
};
</script>
