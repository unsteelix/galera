<script>
	import constants from '$lib/utils/constants';

	export let value;
	export let width;

	const source = value.replace('noTransform', '').replace('notransform', '').trim();
	const src = `${constants.picolaDomainImg}${source}?f=webp&q=${constants.imgQuality}`;
	const alt = src;
</script>

<img class="no-transform-img" {src} {alt} loading="lazy" />

<style>
	.no-transform-img {
		/* max-width: calc(100vw - 20vw); */
		max-width: 80%;
		max-height: calc(100vh - 20vh);
	}
</style>
