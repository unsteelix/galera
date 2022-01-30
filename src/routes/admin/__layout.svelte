<div class="header">
	<a href="/">Home</a>
	<a href="/admin/">Posts</a>
	<a href="/api/backup" target="_blank">Backup</a>
</div>

<slot />

<style>
	.header {
		color: black;
		font-size: 24px;
		border-top: 1px solid rgb(177, 177, 177);
		border-bottom: 1px solid rgb(177, 177, 177);
		padding: 4px;
	}
	a {
		text-decoration: none;
		margin: 20px;
	}
</style>
