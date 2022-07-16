<script>
	// Import done store
	import { done } from '$lib/stores.js';
	export let dne;

	// Delete done item
	async function del(itemId) {
		//The block below removes the task from the API
		const response = await fetch(`http://localhost:8080/api/sv1/tasks/${itemId}`, {
			method: 'DELETE'
		});
		if (response) {
			console.log(response);
		}

		done.update((doneTasks) => {
			return (doneTasks = doneTasks.filter((task) => task._id != itemId));
		});
	}
</script>

<main>
	<h3>{dne.taskName}</h3>
	<button
		><img
			src="https://img.icons8.com/ios-glyphs/344/filled-trash.png"
			alt=""
			on:click={del(dne._id)}
		/>Delete</button
	>
</main>

<style>
	main {
		height: 60px;
		width: 93%;
		border: solid 1px #7bc5e4;
		border-radius: 12px;
		display: flex;
		justify-content: space-around;
		align-items: center;
		margin: 15px;
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
	img {
		height: 20px;
		width: 20px;
	}
</style>
