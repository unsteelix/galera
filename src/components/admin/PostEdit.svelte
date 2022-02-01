<script>
	import { quill } from 'svelte-quill';
	import axios from 'axios';
	import { onMount } from 'svelte';
	import Post from '../site/Post.svelte';
	import CONSTANTS from '../../lib/utils/constants';

	const id = window.location.pathname.split('/').pop();
	$: post = {};
	let initHtml = '';

	let isLoading = true;

	onMount(async () => {
		const res = await axios(`/api/post/${id}`);
		const { data } = res;

		post = data;
		initHtml = data.data;
		isLoading = false;
	});

	const saveBtn = async () => {
		const res = await axios({
			method: 'post',
			url: `/api/post/update/${id}`,
			data: post
		});

		const { data } = res;
		console.log(data);
		window.location.reload();
	};
</script>

<svelte:head>
	<link rel="stylesheet" href="//cdn.quilljs.com/1.3.6/quill.snow.css" />
	<link rel="stylesheet" href="//cdn.quilljs.com/1.3.6/quill.bubble.css" />
</svelte:head>

<div>
	<div class="editor-block">
		<div class="left-block">
			{#if isLoading}
				Loading...
			{:else}
				<div
					class="editor"
					use:quill={CONSTANTS.quillOptions}
					on:text-change={(e) => {
						post = { ...post, data: e.detail.html };
					}}
				>
					{@html initHtml}
				</div>
			{/if}
		</div>
		<div class="right-block">
			<Post {post} isAdmin={true} />
		</div>
	</div>

	<div class="save-btn" on:click={saveBtn}>save</div>
</div>

<style>
	.editor-block {
		display: flex;
		height: calc(100vh - 120px);
	}
	.left-block {
		width: 500px;
		min-width: 500px;
		height: calc(100vh - 120px);
	}
	.left-block .editor {
		height: calc(100vh - 212px);
		border: none;
	}
	.right-block {
		width: 1200px;
		overflow: auto;
		height: calc(100vh - 120px);
		border-left: 1px solid grey;
		overflow-x: hidden;
	}
	.save-btn {
		background-color: cornflowerblue;
		color: whitesmoke;
		font-size: 28px;
		text-align: center;
		cursor: pointer;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 60px;
	}
</style>
