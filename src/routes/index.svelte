<script context="module">
	import utils from '../lib/utils';

	/** @type {import('@sveltejs/kit').Load} */
	export async function load({ params, fetch, session, stuff }) {
		const posts = await (await fetch('/api/posts')).json();

		const { isAdmin } = session;
		let filteredPosts = utils.filterPosts({ posts, isAdmin });

		return {
			props: {
				posts: filteredPosts
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
