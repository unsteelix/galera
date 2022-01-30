<script>
	export let post = [];
</script>

<div class="post">
	<img class="cover" src={post.cover} alt={post.title} />
	<div class="title">{post.title}</div>
</div>

<style>
	.post {
		width: 300px;
		height: 300px;
		border: 2px solid gainsboro;
		position: relative;
	}
	.title {
		position: absolute;
		left: 0px;
		top: 0px;
		background-color: goldenrod;
	}
</style>
