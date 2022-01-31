<script>
	import Auth from '$comp/Auth.svelte';
	export let isAdmin;
</script>

<div class="footer">
	<div class="left">
		<Auth {isAdmin} />
	</div>
	<div class="central">
		<a href="/">home</a>
		<a href="/about">about</a>
		<a href="/admin">admin</a>
	</div>
</div>

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
	}
</style>
