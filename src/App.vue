<template>
	<img alt="Vue logo" src="./assets/logo.png" />
	<Greet />
	<Counter />
	<AutoCounter />
	<Todo />
</template>

<script>
import Todo from './components/Todo';
import Counter from './components/Counter';
import AutoCounter from './components/AutoCounter';
import Greet from './components/Greet';

export default {
	name: 'App',
	components: {
		Todo,
		Counter,
		AutoCounter,
		Greet,
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
</style>
