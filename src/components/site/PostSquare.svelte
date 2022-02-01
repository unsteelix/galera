<script>
	import constants from '../../lib/utils/constants';

	export let post = {};
</script>

<div class="post">
	<a href={`/post/${post.fullPath}`} alt={`/post/${post.fullPath}`}>
		<img
			class="cover"
			src={`${constants.picolaDomainImg}${post.cover}?w=300&h=300`}
			alt={post.title}
		/>
		<div class="title">{post.title}</div>
	</a>
</div>

<style>
	.post {
		width: 100%;
		height: 100%;
		position: relative;
	}
	.title {
		position: absolute;
		left: 0px;
		bottom: 4%;
		width: 100%;
		padding: 10px;
		text-align: center;
		font-size: 22px;
		color: whitesmoke;
	}
	.post:hover .title {
		margin-bottom: 10px;
		transition: 0.2s all;
	}
	.cover {
		max-width: 300px;
		max-height: 300px;
	}
</style>
