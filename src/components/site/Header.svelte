<script>
	//import Logo from '../../../static/logo.svelte';
	// import { onMount } from 'svelte';

	// let w = null;
	// let h = null;

	// onMount(async () => {
	// 	w = window.document.body.clientWidth;
	// 	h = window.document.body.clientHeight;
	// });
</script>

<div class="header">
	<!-- <a href="/">Logo</a> -->
	<img class="logo" src="/logo.svg" alt="logo" on:click={() => (window.location.href = '/')} />

	<!-- <div class="logo" on:click={() => (window.location.href = '/')}>Logo</div> -->
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
		left: 0px;
		transition: 0.2s all;
	}
	a,
	.logo {
		position: relative;
		left: -50px;
		text-decoration: none;
		color: cornflowerblue;
		cursor: pointer;
		width: 40px;
	}
</style>
