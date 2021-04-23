<template>
	<h3>To Do Sample</h3>
	<form @submit.prevent="addNewTodo">
		<label for="newTodo">New Todo</label>
		<input
			v-model="newTodo"
			type="text"
			name="newTodo"
			@keyup:enter="addNewTodo"
		/>
		<button>Add New Todo</button>
	</form>
	<div class="extraBtns">
		<button @click="removeAllList">Remove All List</button>
		<button @click="markAllDone">Mark All Done</button>
	</div>

	<todoList
		title="title props -!!"
		:todos="todos"
		:toggleDone="toggleDone"
		:removeTodo="removeTodo"
	>
	</todoList>
</template>

<script>
import { ref } from 'vue';
import { nanoid } from 'nanoid';
import TodoList from './TodoList';

export default {
	components: {
		TodoList,
	},
	setup() {
		const newTodo = ref('');
		const todos = ref([]);

		const addNewTodo = () => {
			const id = nanoid();
			todos.value.push({ id, done: false, content: newTodo.value });
			newTodo.value = '';
		};

		const toggleDone = todo => {
			todo.done = !todo.done;
		};

		const removeTodo = index => {
			todos.value.splice(index, 1);
		};

		const markAllDone = () => {
			todos.value.forEach(todo => (todo.done = true));
		};

		const removeAllList = () => {
			todos.value = [];
		};

		return {
			newTodo,
			todos,
			addNewTodo,
			toggleDone,
			removeTodo,
			markAllDone,
			removeAllList,
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
	width: 80%;
	font-size: 1em;
	margin: 0.5em;
	outline: none;
}
form {
	margin-bottom: 20px;
}
label {
	text-align: left;
}
ul {
	list-style: none;
}
li {
	display: flex;
	margin: 15px;
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
.extraBtns {
	display: flex;
	justify-content: space-around;
}
</style>
