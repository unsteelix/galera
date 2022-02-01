<!-- <script>
	import { onMount } from 'svelte';

	let w = null;
	let h = null;

	onMount(async () => {
		w = window.document.body.clientWidth;
		h = window.document.body.clientHeight;
	});
</script> -->

<div class="header">
	<!-- <a href="/">Logo</a> -->
	<div class="logo" on:click={() => (window.location.href = '/')}>Logo</div>
</div>

<style>
	.header {
		position: fixed;
		top: 0;
		left: 0;
		color: whitesmoke;
		font-size: 30px;
		padding: 5px 10px;
		z-index: 10;
	}
	.header:hover a,
	.header:hover .logo {
		left: 20px;
		transition: 0.2s all;
	}
	a,
	.logo {
		position: relative;
		left: 0;
		text-decoration: none;
		color: cornflowerblue;
		cursor: pointer;
	}
</style>
