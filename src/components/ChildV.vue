<template>
	<header>
		<slot name="header" />
	</header>
	<slot />
	<p>++ text from child ++</p>
	<footer>
		<slot name="footer" />
	</footer>
</template>
