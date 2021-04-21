<template>
	<h1>To Do Sample</h1>
	<form @submit.prevent="addNewTodo">
		<label for="newTodo">New Todo</label>
		<input v-model="newTodo" type="text" name="newTodo" />
		<button>Add New Todo</button>
	</form>
	<ul>
		<li v-for="(todo, index) in todos" :key="todo.id">
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
			<button class="removeBtn" @click="removeTodo(index)">Remove</button>
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

		function removeTodo(index) {
			todos.value.splice(index, 1);
		}

		return {
			newTodo,
			todos,
			addNewTodo,
			toggleDone,
			removeTodo,
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
button {
	width: 100%;
	font-size: 1em;
	margin: 0.5em;
}
form {
	width: 500px;
	margin: 10px auto;
}
label {
	text-align: left;
}
ul {
	list-style: none;
}
li {
	display: flex;
	margin: 10px;
}
.todo {
	cursor: pointer;
	width: 120px;
}
.done {
	color: gray;
	text-decoration: line-through;
}
.removeBtn {
	cursor: pointer;
	margin: 0 0 0 100px;
	font-size: 0.6em;
	width: 120px;
}
</style>
