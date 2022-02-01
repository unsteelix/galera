<script>
	import constants from '$lib/utils/constants';

	export let value;
	export let width;

	const source = value.replace('noTransform', '').replace('notransform', '').trim();
</script>

<img
	class="no-transform-img"
	src={`${constants.picolaDomainImg}${source}?f=webp&q=80`}
	alt={value}
/>

<style>
	.no-transform-img {
		/* max-width: calc(100vw - 20vw); */
		max-width: 80%;
		max-height: calc(100vh - 20vh);
	}
</style>
