<script>
	import constants from '$lib/utils/constants';

	export let value;
	export let width;

	const src = `${constants.picolaDomainImg}${value}?f=${constants.imgFormat}&q=${constants.imgQuality}&w=${width}`;
	const alt = src;
</script>

<img class="wide-img" {src} {alt} loading="lazy" />

<style>
	.wide-img {
		width: 100%;
	}
</style>
