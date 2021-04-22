export default (value = '') =>
	value
		.split('')
		.reverse()
		.reduce((acc, digit, i) => {
			if (i > 0 && i % 3 === 0) {
				acc.push(',');
			}
			return [...acc, digit];
		}, [])
		.reverse()
		.join('');
