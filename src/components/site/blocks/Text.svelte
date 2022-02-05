<script>
	import { marked } from 'marked';

	export let data;
</script>

<div class="text-block">
	<div class="content">{@html marked(data)}</div>
</div>

<style>
	.text-block {
		margin-top: 20vh;
		display: flex;
		justify-content: center;
	}
	.content {
		width: 100%;
		max-width: 600px;
		line-height: 2rem;
		color: #101010;
	}
</style>
