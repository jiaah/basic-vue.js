<template>
	<h3>- Slots -</h3>
	<child v-slot="{ data, hey }">
		{{ data }}
		<button @click="clicked()">call parent method</button>
		<button @click="hey">call child method</button>
	</child>
	<h3>- Slots -</h3>
</template>

<script>
import Child from './Child';

export default {
	components: {
		Child,
	},
	methods: {
		clicked() {
			alert('This is from parent.');
		},
	},
};
</script>

<style></style>
