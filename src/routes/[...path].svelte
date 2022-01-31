<script context="module">
	export const router = false;

	import utils from '../lib/utils';

	/** @type {import('@sveltejs/kit').Load} */
	export async function load({ params, fetch, session, stuff }) {
		const { path } = params;

		const posts = await (await fetch('/api/posts')).json();

		return {
			props: {
				posts,
				path
			}
		};
	}
</script>

<script>
	import ListPost from '../components/site/ListPost.svelte';
	import Post from '../components/site/Post.svelte';

	export let posts;
	export let path;

	let pageType = utils.pageType({ posts, path });

	console.log('COOL ROUTE: ', pageType);
</script>

<ListPost posts={pageType.payload} />
