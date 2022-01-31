<script>
	import PostSquare from './PostSquare.svelte';
	import FolderSquare from './FolderSquare.svelte';

	export let posts = {};

	const map = {
		post: PostSquare,
		folder: FolderSquare
	};

	let listPost = [];
	for (let id in posts) {
		let post = posts[id];
		listPost.push(post);
	}
</script>

<div class="list-post">
	{#each listPost as post}
		<div class="one-post">
			<svelte:component this={post.isFolder ? FolderSquare : PostSquare} {post} />
		</div>
	{/each}
</div>

<div />

<style>
	.list-post {
		margin: 7vw 0;
		width: 100%;
		max-width: 1400px;

		display: flex;
		flex-wrap: wrap;
		flex-direction: row;
		justify-content: space-evenly;
	}
	.one-post {
		margin: 6vw 2vw;
		width: 300px;
		height: 300px;
		cursor: pointer;
	}
</style>
