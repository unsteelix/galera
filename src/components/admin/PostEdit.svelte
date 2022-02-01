<script>
	//import { quill } from 'svelte-quill';
	//import { Editor } from '@tadashi/svelte-editor-quill';
	// //import Editor from 'tailwind-editor';
	// import 'bytemd/dist/index.min.css';
	// import { Editor, Viewer } from 'bytemd';
	// //import gfm from '@bytemd/plugin-gfm';
	import { marked } from 'marked';

	import axios from 'axios';
	import { onMount } from 'svelte';
	import Post from '../site/Post.svelte';
	import CONSTANTS from '$lib/utils/constants';
	import Upload from './Upload.svelte';

	$: post = {
		...post,
		data: source
	};
	let id;
	let source = '';

	let isLoading = true;

	onMount(async () => {
		id = window.location.pathname.split('/').pop();

		const res = await axios(`/api/post/${id}`);

		const { data } = res;

		if (res.status === 200) {
			post = data;
			source = post.data;

			isLoading = false;
		}
	});

	const onChange = (event) => {
		console.log(event.detail.html);
		post = {
			...post,
			data: event.detail.html
		};
	};

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

	$: {
		// let markdown = marked(source);
		// console.log(source);
		// post = {
		// 	...post,
		// 	data: source
		// };
		console.log(post);
	}
	// $: console.log(markdown);
	let uploadCallback = (data) => {
		source = source + '\n' + data;
	};
</script>

<!-- <svelte:head>
	<link rel="preconnect" href="https://cdn.quilljs.com" crossorigin />
	<link rel="stylesheet" href="https://cdn.quilljs.com/1.3.7/quill.snow.css" />
	<link rel="stylesheet" href="https://cdn.quilljs.com/1.3.7/quill.bubble.css" />
</svelte:head> -->

<div>
	<div class="editor-block">
		{#if isLoading}
			Loading...
		{:else}
			<div class="left-block">
				<textarea bind:value={source} />
			</div>
			<div class="right-block">
				<Post {post} isAdmin={true} />
			</div>
		{/if}
	</div>
	<Upload bind:uploadCallback />
	<div class="save-btn" on:click={saveBtn}>save</div>
</div>

<style>
	.editor-block {
		display: flex;
		height: calc(100vh - 168px);
	}
	.left-block {
		width: 500px;
		min-width: 500px;
		height: calc(100vh - 168px);
	}
	.left-block .editor {
		height: calc(100vh - 260px);
		border: none;
	}
	.right-block {
		width: 600px;
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
	textarea {
		width: 100%;
		height: 100%;
		border-left: 1px solid gainsboro;
		padding: 20px;
	}
</style>
