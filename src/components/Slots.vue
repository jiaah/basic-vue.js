<template>
	<h3>- Slots -</h3>
	<child v-slot="{ data, hey }">
		{{ data }}
		<button @click="clicked()">call parent method</button>
		<button @click="hey">call child method</button>
	</child>
	<ChildV>
		<template v-slot:header>
			<h2>title from slot</h2>
		</template>
		<template v-slot:default>
			<p>main content from slot</p>
		</template>
		<template v-slot:footer>
			<p>footer from slot</p>
		</template>
	</ChildV>
	<h3>- Slots -</h3>
</template>

<script>
import Child from './Child';
import ChildV from './ChildV';

export default {
	components: {
		Child,
		ChildV,
	},
	methods: {
		clicked() {
			alert('This is from parent.');
		},
	},
};
</script>

<style></style>
