<template>
	<h3>{{ title }}</h3>
	<ul>
		<li v-for="(todo, index) in todos" :key="todo.id">
			<input
				type="checkbox"
				name="todo"
				class="todo"
				:id="todo.id"
				v-model="todo.done"
				@click="toggleDone(todo)"
			/>
			<span :class="{ done: todo.done }">
				{{ todo.content }}
			</span>
			<button class="removeBtn" @click="removeTodo(index)">Remove</button>
		</li>
	</ul>
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			required: true,
			default: 'come on default title !',
		},
		todos: {
			type: Array,
			required: true,
		},
		toggleDone: Function,
		removeTodo: Function,
	},
};
</script>

<style></style>
