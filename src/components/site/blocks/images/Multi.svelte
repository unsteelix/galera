<script>
	import constants from '$lib/utils/constants';

	export let value;
	export let width;

	const sources = value.replace('multi', '').trim().split(' ');
	const count = sources.length;

	let imgWidth = Math.round(width / count - (width / 100) * 15);

	const url = (id) => {
		return `${constants.picolaDomainImg}${id}?f=webp&q=80&h=${imgWidth}`;
	};
</script>

<div class="multi-img" style={``}>
	{#each sources as source}
		<img style={`width: ${imgWidth}px;`} src={url(source)} alt={source} />
	{/each}
</div>

<style>
	.multi-img {
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
		align-items: center;
		width: 100vw;
	}
</style>
