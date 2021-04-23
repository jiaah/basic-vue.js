<template>
	<div>format -> {{ numberFormat(amount) }}</div>
</template>

<script>
import numberFormat from '../helpers/numberFormat';

export default {
	data: () => ({
		amount: '100000000',
	}),
	methods: { numberFormat },
};
</script>
