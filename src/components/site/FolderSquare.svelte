<script>
	import constants from '../../lib/utils/constants';

	export let post = {};
</script>

<div class="folder">
	<a href={`/${post.fullPath}`} alt={`/post/${post.fullPath}`}>
		<img
			class="cover"
			src={`${constants.picolaDomainImg}${post.cover}?w=300&h=300`}
			alt={post.title}
		/>
		<div class="title">[{post.title}]</div>
	</a>
</div>

<style>
	.folder {
		width: 100%;
		height: 100%;
		border: 2px solid gainsboro;
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
	.folder:hover .title {
		margin-bottom: 10px;
		transition: 0.2s all;
	}
	.cover {
		max-width: 300px;
		max-height: 300px;
	}
</style>
