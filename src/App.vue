<template>
	<img alt="Vue logo" src="./assets/logo.png" />
	<ul>
		<li><router-link to="/todo">todo sample</router-link></li>
		<li><router-link to="/autoCounter">life cycle</router-link></li>
		<li><router-link to="/counter">method vs compute</router-link></li>
		<li>
			<router-link
				:to="{
					name: 'Greet',
					params: { username: 'KoreanSpaceData', id: 21 },
					query: { location: 'seoul', life: 'beautiful' },
				}"
				>routes</router-link
			>
		</li>
		<li><router-link to="/number">helper function</router-link></li>
		<li><router-link to="/slots">slots</router-link></li>
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
