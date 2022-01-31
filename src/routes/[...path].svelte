<script context="module">
	import utils from '../lib/utils';

	/** @type {import('@sveltejs/kit').Load} */
	export async function load({ params, fetch, session, stuff }) {
		const { path } = params;

		const { isAdmin } = session;
		const posts = await (await fetch('/api/posts')).json();

		let filteredPosts = utils.filterPosts({ posts, isAdmin });

		console.log('BEFORE');
		console.log(posts);
		console.log('AFTER');
		console.log(filteredPosts);

		return {
			props: {
				posts: filteredPosts,
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

{#if pageType && pageType.type === 'post'}
	<Post post={pageType.payload} />
{:else if pageType && pageType.type === 'folder'}
	<ListPost posts={pageType.payload} />
{/if}
