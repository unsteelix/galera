<script>
	import constants from '$lib/utils/constants';
	import WideImg from '$comp/blocks/images/Wide.svelte';
	import NoTransformImg from '$comp/blocks/images/NoTransform.svelte';
	import CoverImg from '$comp/blocks/images/Cover.svelte';
	import PaddingImg from '$comp/blocks/images/Padding.svelte';
	import FullhImg from '$comp/blocks/images/Fullh.svelte';
	import MultiImg from '$comp/blocks/images/Multi.svelte';

	export let data = [];
	export let width;
	export let height;

	//console.log(data);

	const getType = (strLine) => {
		const str = strLine.trim();

		if (str.indexOf('noTransform') === 0 || str.indexOf('notransform') === 0) {
			return 'noTransform';
		}

		if (str.indexOf('cover') === 0) {
			return 'cover';
		}

		if (str.indexOf('padding') === 0) {
			return 'padding';
		}

		if (str.indexOf('fullh') === 0 || str.indexOf('fullH') === 0) {
			return 'fullh';
		}

		if (str.indexOf('multi') === 0) {
			return 'multi';
		}

		return 'default';
	};

	const noTransformComp = (value) => {
		return `<img class="no-transform-img" src="${constants.picolaDomainImg}${value}?f=webp&q=80" alt="${value}" />`;
	};

	const coverComp = (value) => {
		const src = `${constants.picolaDomainImg}${value}?f=webp&q=80&w=${width}`;
		return `
            <div class="cover-img" style="background-image:url(${src})">
                
            </div>
        `;
	};

	const types = {
		default: WideImg,
		noTransform: NoTransformImg,
		cover: CoverImg,
		padding: PaddingImg,
		fullh: FullhImg,
		multi: MultiImg
	};
</script>

<div>
	{#each data as img}
		<div class="img-block">
			<svelte:component this={types[getType(img)]} value={img} {width} {height} />
		</div>
	{/each}
</div>

<style>
	.img-block {
		margin-top: 20vh;
		display: flex;
		justify-content: center;
	}
</style>
