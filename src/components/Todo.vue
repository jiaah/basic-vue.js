<template>
	<h1>To Do Sample</h1>
	<form @submit.prevent="addNewTodo">
		<label for="todo">New Todo</label>
		<input v-model="newTodo" type="text" name="todo" />
		<button>Add New Todo</button>
	</form>
	<ul>
		<li v-for="todo in todos" :key="todo.id">
			<input
				type="checkbox"
				name="todo"
				id="todo.id"
				class="todo"
				:checked="todo.done"
				@click="toggleDone(todo)"
			/>
			<span :class="{ done: todo.done }">
				{{ todo.content }}
			</span>
		</li>
	</ul>
</template>

<script>
import { ref } from 'vue';
import { nanoid } from 'nanoid';

export default {
	setup() {
		const newTodo = ref('');
		const todos = ref([]);

		function addNewTodo() {
			const id = nanoid();
			todos.value.push({ id, done: false, content: newTodo.value });
			newTodo.value = '';
		}

		function toggleDone(todo) {
			todo.done = !todo.done;
		}
		console.log('todos', todos.value);
		return {
			newTodo,
			todos,
			addNewTodo,
			toggleDone,
		};
	},
};
</script>

<style>
body {
	font-family: sans-serif;
	padding-top: 1em;
	padding-bottom: 1em;
	font-size: 2em;
	width: 80%;
	margin: 0 auto;
}
input,
textarea,
button,
p,
div,
section,
article,
select {
	display: 'block';
	width: 100%;
	font-family: sans-serif;
	font-size: 1em;
	margin: 0.5em;
}
form {
	width: 500px;
	margin: 10px auto;
}
ul {
	list-style: none;
}
li {
	display: flex;
}
.todo {
	cursor: pointer;
	width: 120px;
}
.done {
	color: gray;
	text-decoration: line-through;
}
</style>
