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
			<div class="size">{w}:{h}</div>
			<Auth {isAdmin} />
		</div>
		<div class="central">
			<a href="/">Home</a>
			<a href="/about">About</a>
			<a href="/admin">Admin</a>
		</div>
	</div>{/if}

<style>
	.footer {
		display: flex;
		justify-content: center;

		padding: 10px;
		width: 100%;
		font-size: 30px;
		border-top: 1px solid #c7c7c7;
		font-size: 1rem;
	}
	.central {
		text-align: center;
	}
	a {
		text-decoration: none;

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
