<script>
	import constants from '$lib/utils/constants';

	export let value;
	export let height;

	let imgHeight = Math.round(height - 2 * ((height / 100) * 10));

	const source = value.replace('fullh', '').replace('fullH', '').trim();
	const url = `${constants.picolaDomainImg}${source}?f=webp&q=80&h=${imgHeight}`;
</script>

<img class="fullh-img" style={`height: ${imgHeight};`} src={url} alt={value} />

<style>
	.fullh-img {
	}
</style>
