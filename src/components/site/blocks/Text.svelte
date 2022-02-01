<script>
	import { marked } from 'marked';

	export let data;
</script>

<div class="text-block">{@html marked(data)}</div>

<style>
	.text-block {
		margin-top: 20vh;
	}
</style>
