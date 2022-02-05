<script context="module">
	import utils from '$lib/utils';

	/** @type {import('@sveltejs/kit').Load} */
	export async function load({ params, fetch, session, stuff }) {
		const { path } = params;

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
				path
			}
		};
	}
</script>

<script>
	import ListPost from '../../components/site/ListPost.svelte';
	import Post from '../../components/site/Post.svelte';

	export let posts;
	export let path;

	let pageType = utils.pageType({ posts, path });

	let map = {
		post: Post,
		folder: ListPost
	};
</script>

<Post post={pageType.payload} />
