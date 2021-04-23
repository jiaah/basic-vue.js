<template>
	<p>Hello From Child</p>
	<slot :data="text" :hey="hey" />
</template>

<script>
export default {
	data: () => ({
		text: 'This is from child slot-scope.',
	}),
	methods: {
		hey() {
			window.alert('This is from child method.');
		},
	},
};
</script>
