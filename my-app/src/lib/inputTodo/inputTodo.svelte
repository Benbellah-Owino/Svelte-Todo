<script>
	import { onMount } from 'svelte';
	import { pending } from '$lib/stores';
	let txb1;

	//assigns element to variale nb:Svelte can only do this on initialization of element
	onMount(() => {
		txb1 = document.getElementById('textInput');
	});

	//Adding new task
	async function addTask() {
		let body = {
			taskName: `${txb1.value}`,
			taskDone: false
		};

		try {
			//Adding new task to API
			await fetch(`http://localhost:8080/api/sv1/tasks/new`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(body)
			})
				.then((response) => response.json())
				.then((data) => {
					let task = data.Task;

					pending.update((tasks) => {
						return (tasks = [...tasks, task]);
					});
				});
		} catch (error) {
			console.log(error);
		}
		txb1.value = '';
	}
</script>

<main>
	<input type="text" name="todo" id="textInput" placeholder="Enter your task " />
	<button on:click={addTask}> Add Task </button>
</main>

<style>
	main {
		position: absolute;
		top: 02%;
		display: flex;
		justify-content: space-around;
		align-items: center;
		margin: 15px;
	}

	#textInput {
		height: 50px;
		width: 700px;
		border-radius: 25px;
		padding: 0 25px;
		font-size: 30px;
		margin-right: 15px;
	}
	button {
		width: 80px;
		height: 45px;
		font-size: 17px;
		font-weight: 700;
		color: #020b27;
		background-color: #7bc5e4;
		border-radius: 10%;
	}

	button:hover {
		background-color: #4d4dff;
		transition: 0.4s all ease;
	}
</style>
