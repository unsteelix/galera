<script>
	import constants from '$lib/utils/constants';

	export let value;
	export let width;
</script>

<img
	class="wide-img"
	src={`${constants.picolaDomainImg}${value}?f=webp&q=80&w=${width}`}
	alt={value}
/>

<style>
	.wide-img {
		width: 100%;
	}
</style>
