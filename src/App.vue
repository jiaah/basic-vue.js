<template>
	<img alt="Vue logo" src="./assets/logo.png" />
	<NumberFormat />
	<Greet />
	<Counter />
	<AutoCounter />
	<Parent />
</template>

<script>
import NumberFormat from './components/number';
import Greet from './components/Greet';
import Counter from './components/Counter';
import AutoCounter from './components/AutoCounter';
import Parent from './components/Parent';

export default {
	name: 'App',
	components: {
		NumberFormat,
		Greet,
		Counter,
		AutoCounter,
		Parent,
	},
};
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}

img {
	width: 50px;
	height: 50px;
}
</style>
