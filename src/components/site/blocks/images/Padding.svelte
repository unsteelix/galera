<script>
	import constants from '$lib/utils/constants';

	export let value;
	export let width;

	let imgWidth = Math.round(width - 2 * ((width / 100) * 10));

	const source = value.replace('padding', '').trim();
	const url = `${constants.picolaDomainImg}${source}?f=webp&q=80&w=${imgWidth}`;
</script>

<img class="padding-img" style={`width: ${imgWidth};`} src={url} alt={value} />

<style>
	.padding-img {
	}
</style>
