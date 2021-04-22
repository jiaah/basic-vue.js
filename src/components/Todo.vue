<template>
	<h1>To Do Sample</h1>
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
	<ul>
		<li v-for="(todo, index) in todos" :key="todo.id">
			<input
				type="checkbox"
				name="todo"
				class="todo"
				:id="todo.id"
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

		function markAllDone() {
			todos.value.forEach(todo => (todo.done = true));
		}

		function removeAllList() {
			todos.value = [];
		}

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
