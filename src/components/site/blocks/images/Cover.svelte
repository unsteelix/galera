<script>
	import constants from '$lib/utils/constants';

	export let value;
	export let width;

	const source = value.replace('cover', '').trim();
	const url = `${constants.picolaDomainImg}${source}?f=${constants.imgFormat}&q=${constants.imgQuality}&w=${width}`;
</script>

<div
	class="cover-img"
	style={`width: ${width}px; background-image: url(${url}); background-position: center; background-size: cover; background-attachment: fixed;`}
/>

<style>
	.cover-img {
		height: 100vh;
	}
</style>
