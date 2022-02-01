<div class="admin-header">
	<a href="/">Home</a>
	<a href="/admin/">Posts</a>
	<a href="/api/backup" target="_blank">Backup</a>
</div>

<slot />

<style>
	.admin-header {
		color: black;
		font-size: 24px;
		border-bottom: 1px solid rgb(177, 177, 177);
		padding: 4px;
		text-align: center;
		width: 100%;
		height: 60px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	a {
		text-decoration: none;
		margin: 20px;
	}
</style>
