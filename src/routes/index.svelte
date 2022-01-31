<script context="module">
	import utils from '../lib/utils';

	/** @type {import('@sveltejs/kit').Load} */
	export async function load({ params, fetch, session, stuff }) {
		const { path } = params;
		const posts = await (await fetch('/api/posts')).json();

		const pageType = utils.pageType({ posts, path });

		return {
			props: {
				posts: pageType.payload
			}
		};
	}
</script>

<script>
	import ListPost from '../components/site/ListPost.svelte';

	export let posts;

	console.log('MAIN PAGE: ', posts);
</script>

<ListPost {posts} />
