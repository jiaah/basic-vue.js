<template>
	<div>{{ numberFormat(amount) }}</div>
</template>

<script>
import numberFormat from '../helpers/numberFormat';

export default {
	data() {
		return { amount: '100000000' };
	},
	methods: { numberFormat },
};
</script>
