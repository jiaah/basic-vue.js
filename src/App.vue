<template>
	<img alt="Vue logo" src="./assets/logo.png" />
	<ul>
		<li><router-link to="/todo">todo page</router-link></li>
		<li><router-link to="/autoCounter">autoCounter page</router-link></li>
		<li><router-link to="/counter">counter page</router-link></li>
		<li>
			<router-link
				:to="{ name: 'greet', params: { username: 'KoreanSpaceData' } }"
				>greet page</router-link
			>
		</li>
		<li><router-link to="/number">number page</router-link></li>
	</ul>
	<router-view></router-view>
</template>

<script>
export default {
	name: 'App',
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
