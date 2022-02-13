<script>
	import constants from '$lib/utils/constants';

	export let value;
	export let height;

	let imgHeight = Math.round(height - 2 * ((height / 100) * 10));

	const source = value.replace('fullh', '').replace('fullH', '').trim();
	const src = `${constants.picolaDomainImg}${source}?f=${constants.imgFormat}&q=${constants.imgQuality}&h=${imgHeight}`;
	const alt = src;
</script>

<img class="fullh-img" style={`height: ${imgHeight};`} {src} {alt} />

<style>
	.fullh-img {
	}
</style>
