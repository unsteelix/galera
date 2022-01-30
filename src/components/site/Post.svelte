<script>
	import CONSTANTS from '../../lib/utils/constants';
	import TextBL from '../site/blocks/Text.svelte';
	import ImageBL from '../site/blocks/Image.svelte';
	import VideoBL from '../site/blocks/Video.svelte';

	export let post;
	export let isAdmin = false;

	const width = isAdmin ? 600 : window.document.body.clientWidth;
	const divider = '<p>===</p>';
	const imageMark = '<p>i</p>';
	const videoMark = '<p>v</p>';

	$: id = post.id;
	$: title = post.title;
	$: date = post.date;
	$: background = post.background;
	$: data = post.data;

	const map = {
		text: TextBL,
		image: ImageBL,
		video: VideoBL
	};

	$: blocks = rawHtmlToBlocks(data);

	const rawHtmlToBlocks = (rawHtml) => {
		let res = [];

		if (rawHtml) {
			res = rawHtml.split(divider).map((block) => {
				if (block.indexOf(imageMark) === 0) {
					let list = [];
					block
						.substr(imageMark.length)
						.replace(/(<([^>]+)>)/gi, '$@')
						.split('$@')
						.forEach((el) => {
							if (el) {
								list.push(el.trim());
							}
						});

					return {
						type: 'image',
						value: list
					};
				} else if (block.indexOf(videoMark) === 0) {
					let list = [];
					block
						.substr(videoMark.length)
						.replace(/(<([^>]+)>)/gi, '$@')
						.split('$@')
						.forEach((el) => {
							if (el) {
								list.push(el.trim());
							}
						});

					return {
						type: 'video',
						value: list
					};
				} else {
					return {
						type: 'text',
						value: block
					};
				}
			});
		}

		return res;
	};
</script>

<div class="post">
	<div class="cover">
		<img src={`${CONSTANTS.picolaDomain}/${background}?f=webp&q=80&w=${width}`} alt={background} />
	</div>
	<div class="list-block">
		{#each blocks as block}
			<svelte:component this={map[block.type]} data={block.value} />
		{/each}
	</div>
</div>
