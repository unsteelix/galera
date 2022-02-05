<script>
	import constants from '$lib/utils/constants';

	export let value;
	export let width;

	let imgWidth = Math.round(width - 2 * ((width / 100) * 10));

	const source = value.replace('padding', '').trim();
	const src = `${constants.picolaDomainImg}${source}?f=webp&q=${constants.imgQuality}&w=${imgWidth}`;
	const alt = src;
</script>

<img class="padding-img" style={`width: ${imgWidth};`} {src} {alt} loading="lazy" />

<style>
	.padding-img {
	}
</style>
