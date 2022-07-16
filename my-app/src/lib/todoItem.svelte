<script>
	// Importing stores
	import { pending, done } from '$lib/stores.js';
	export let pend;

	// Changes done status of tasks from pending to done
	async function doIt(pendId, pendObj) {
		try {
			//Changes a task from pending to done in the API
			const response = await fetch(`http://localhost:8080/api/sv1/tasks/${pendId}`, {
				method: 'PATCH',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ taskDone: true })
			});

			if (response) {
				console.log(response);
			}

			done.update((doneTasks) => {
				return (doneTasks = [...doneTasks, pendObj]);
			});

			pending.update((pendTasks) => {
				return (pendTasks = pendTasks.filter((task) => task._id != pendId));
			});
		} catch (error) {
			console.log(error);
		}
	}

	// Delete pending task
	async function del(itemId) {
		//The block below removes the task from the API
		const response = await fetch(`http://localhost:8080/api/sv1/tasks/${itemId}`, {
			method: 'DELETE'
		});
		if (response) {
			console.log(response);
		}

		pending.update((pendTasks) => {
			return (pendTasks = pendTasks.filter((task) => task._id != itemId));
		});
	}
</script>

<main>
	<h3>{pend.taskName}</h3>
	<button id="do" on:click={doIt(pend._id, pend)}>Done</button>
	<button
		><img
			src="https://img.icons8.com/ios-glyphs/344/filled-trash.png"
			alt=""
			on:click={del(pend._id)}
		/></button
	>
</main>

<style>
	main {
		height: 98%;
		width: 98%;
		border: solid 1px #7bc5e4;
		border-radius: 12px;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}
	/* #done {
		color: greenyellow;
	} */
	button {
		height: 23px;
		width: 33px;
	}
	button:hover {
		background-color: red;
		transition: all 0.3s ease;
	}
	#do {
		width: 44px;
	}
	#do:hover {
		background-color: green;
		transition: all 0.3s ease;
	}
	img {
		height: 20px;
		width: 20px;
	}
</style>
