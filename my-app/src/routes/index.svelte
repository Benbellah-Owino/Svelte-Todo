<script>
	import InputTodo from '$lib/inputTodo/inputTodo.svelte';
	import List from '$lib/todoList/todoList.svelte';
	import Done from '$lib/done/done.svelte';
	import { done, pending } from '$lib/stores';
	import { onMount } from 'svelte';

	// Data fecthed from the API are stored in stores
	// hence operations are store as my app is not efficient

	// Get the pending tasks from database using my api
	onMount(async () => {
		fetch('http://localhost:8080/api/sv1/tasks/pending')
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				pending.set(data);
			})
			.catch((error) => {
				console.log(error);
				return [];
			});
	});

	// Get the done tasks from database using my api
	onMount(async () => {
		fetch('http://localhost:8080/api/sv1/tasks/done')
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				done.set(data);
			})
			.catch((error) => {
				console.log(error);
				return [];
			});
	});
</script>

<main>
	<!-- Initializing the components -->
	<InputTodo />
	<List />
	<br /><br /><br /><br />
	<Done />
</main>

<style>
	main {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		color: #4d4dff;
		background-color: #020b27;
		height: 100vh;
		width: 100%;
		overflow: scroll;
	}
</style>
