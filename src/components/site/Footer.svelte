<script>
	import Auth from '$comp/Auth.svelte';
	import { onMount } from 'svelte';

	export let isAdmin;

	let isPostEditPage = false;
	let w = null;
	let h = null;

	onMount(() => {
		isPostEditPage = window.location.pathname.includes('/admin/post');
		w = window.document.body.clientWidth;
		h = window.document.body.clientHeight;
	});
</script>

{#if !isPostEditPage}
	<div class="footer">
		<div class="left">
			<div class="size">{w}</div>
			<Auth {isAdmin} />
		</div>
		<div class="central">
			<a href="/">home</a>
			<a href="/about">about</a>
			<a href="/admin">admin</a>
		</div>
	</div>{/if}

<style>
	.footer {
		background-color: rgba(0, 0, 0, 0.89);
		color: whitesmoke;
		padding: 10px;
		width: 100%;
		font-size: 30px;
		display: flex;
		justify-content: center;
	}
	.central {
		text-align: center;
	}
	a {
		text-decoration: none;
		color: whitesmoke;
		margin: 20px;
	}
	.left {
		position: absolute;
		left: 20px;
		display: flex;
	}
	.size {
		margin-right: 20px;
	}
</style>
