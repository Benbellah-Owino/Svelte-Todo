<script>
	import TodoItem from '../todoItem.svelte';
	import { pending } from '../stores';
	import { fade } from 'svelte/transition';
	import { flip } from 'svelte/animate';
</script>

<main>
	<h1>UNFINISHED TASKS (:-(</h1>
	<!-- Create elements of type Pending Item (svelte component) and assigning data from the pending store to it  -->
	{#each $pending as pend (pend._id)}
		<div out:fade={{ duration: 200 }} animate:flip={{ duration: 300 }}>
			<TodoItem {pend} id={pend._id} />
		</div>
	{/each}
</main>

<style>
	main {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		width: 80%;
		border: dashed 1px #7bc5e4;
		color: #7bc5e4;
		font-family: sans-serif;
		position: absolute;
		top: 10%;
		margin: 15px;
		padding: 10px;
		overflow: scroll;
		height: 40%;
	}

	div {
		height: 60px;
		width: 93%;
		margin: 15px;
		padding: 0;
	}
</style>
