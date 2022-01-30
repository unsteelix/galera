<script>
	import PostSquare from './PostSquare.svelte';
	import FolderSquare from './FolderSquare.svelte';

	export let posts = [];

	const map = {
		post: PostSquare,
		folder: FolderSquare
	};
</script>

{#each posts as post}
	<svelte:component this={post.isFolder ? FolderSquare : PostSquare} {post} />
{/each}

<div />
