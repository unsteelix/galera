<script>
	import CONSTANTS from '../../lib/utils/constants';
	import TextBL from '../site/blocks/Text.svelte';
	import ImageBL from '../site/blocks/Image.svelte';
	import VideoBL from '../site/blocks/Video.svelte';
	import { onMount } from 'svelte';

	export let post;
	export let isAdmin = false;

	let width = null;
	let height = null;

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

	onMount(async () => {
		let isAdminPage = window.location.pathname.includes('/admin/post') || false;

		width = isAdminPage
			? 800 //document.querySelector('.right-block').clientWidth
			: window.document.body.clientWidth;
		height = window.document.body.clientHeight;
	});
</script>

<!-- <svelte:window
	on:resize|once={() => {
		width = window.document.body.clientWidth;
	}}
/> -->
<!-- w:{width}
h:{height} -->

{#if width}
	<div class="post">
		<div class="cover">
			<img
				src={`${CONSTANTS.picolaDomainImg}${background}?f=webp&q=80&w=${width}&h=${height}`}
				alt={background}
			/>
			{#if title}
				<div class="title">{title}</div>
			{/if}
			{#if date}
				<div class="date">{date}</div>
			{/if}
		</div>
		<div class="list-block">
			{#each blocks as block}
				<div class="one-block">
					<svelte:component this={map[block.type]} data={block.value} {width} {height} />
				</div>
			{/each}
		</div>
	</div>
{/if}

<style>
	.cover {
		position: relative;
		width: 100%;
		height: 100vh;
	}
	.cover img {
		width: 100%;
		height: 100%;
	}
	.cover .title {
		position: absolute;
		width: 100%;
		top: 50vh;
		color: white;
		font-size: 40px;
		text-align: center;
	}
	.cover .date {
		position: absolute;
		width: 100%;
		top: 55vh;
		color: white;
		font-size: 50px;
		text-align: center;
	}
	.list-block {
		display: flex;
		flex-direction: column;
		flex-wrap: nowrap;
		justify-content: flex-start;
		align-items: center;
		margin-bottom: 20vh;
	}
	.one-block {
	}
</style>
