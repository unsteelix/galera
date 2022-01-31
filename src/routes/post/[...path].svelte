<script context="module">
	//export const router = false;
	import utils from '../../lib/utils';

	/** @type {import('@sveltejs/kit').Load} */
	export async function load({ params, fetch, session, stuff }) {
		const { path } = params;

		// console.log('\n\n--path:', path);
		// console.log('\n\n--params:', params);
		// console.log('\n\n--fetch:', fetch);
		// console.log('\n\n--session:', session);
		// console.log('\n\n--stuff:', stuff);

		const { isAdmin } = session;
		const allPosts = await (await fetch('/api/posts')).json();

		let filteredPosts = {};

		if (isAdmin) {
			filteredPosts = allPosts;
		} else {
			for (let id in allPosts) {
				const post = allPosts[id];
				if (!post.isHidden) {
					filteredPosts[id] = post;
				}
			}
		}

		return {
			props: {
				posts: filteredPosts,
				path,
				time: Date.now()
			}
		};
	}
</script>

<script>
	import ListPost from '../../components/site/ListPost.svelte';
	import Post from '../../components/site/Post.svelte';

	export let posts;
	export let path;
	export let time;

	let pageType = utils.pageType({ posts, path });

	let map = {
		post: Post,
		folder: ListPost
	};

	//console.log('pageType: ', pageType);

	//const isLeaf = utils.isLeaf({ posts, path });

	//console.log(isLeaf, path, posts);
</script>

<!-- {#if pageType && pageType.type === 'post'}
	<svelte:component this={map[pageType.type]} post={pageType.payload} posts={pageType.payload} />
{/if} -->

TIME: {time}
{#if pageType && pageType.type === 'post'}
	<Post post={pageType.payload} />
{:else if pageType && pageType.type === 'folder'}
	<ListPost posts={pageType.payload} />
{/if}
