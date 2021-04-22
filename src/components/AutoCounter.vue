<template>
	<p>auto counter : {{ autoCounter }}</p>
</template>

<script>
export default {
	data() {
		return {
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
