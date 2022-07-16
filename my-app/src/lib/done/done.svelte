<script>
	import DoneItem from '../doneItem.svelte';
	import { done } from '../stores';
	import { fade } from 'svelte/transition';
	import { flip } from 'svelte/animate';
</script>

<main>
	<h1>Finished Tasks (:-)</h1>
	<!-- Create elements of type Done Item (svelte component) and assigning data from the done store to it  -->
	{#each $done as dne (dne._id)}
		<div out:fade={{ duration: 200 }} animate:flip={{ duration: 300 }}>
			<DoneItem {dne} />
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
		border: dashed 1px #4d4dff;
		background-color: #020b27;
		padding: 10px;
		margin: 15px;
		position: absolute;
		top: 60%;
		overflow: scroll;
		height: 35%;
	}
	div {
		height: 60px;
		width: 93%;
		margin: 15px;
		padding: 0;
	}
</style>
