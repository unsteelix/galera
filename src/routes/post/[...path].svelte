<script context="module">
	//import DB from '../../lib/database';

	/** @type {import('@sveltejs/kit').Load} */
	export async function load({ params, fetch, session, stuff }) {
		const { path } = params;

		//const allPosts = DB.get('/posts');

		console.log('\n\n--params:', params, '-\n\n');
		console.log('\n\n--fetch:', fetch, '-\n\n');
		console.log('\n\n--session:', session, '-\n\n');
		console.log('\n\n--stuff:', stuff, '-\n\n');

		const url = `/api/posts`;
		const allPosts = await (await fetch(url)).json();

		// //console.log('\n\n--allPosts:', allPosts, '-\n\n');

		let posts = {};

		for (let id in allPosts) {
			const post = allPosts[id];
			if (!post.isHidden) {
				posts[id] = post;
			}
		}

		//console.log('\n\n--awailable:', posts, '-\n\n');

		return {
			props: {
				posts
			}
		};

		// return {
		// 	status: res.status,
		// 	error: new Error(`Could not load ${url}`)
		// };
	}
</script>

<script>
	export let posts;
	//console.log(posts);
</script>

<h1>sdasdsad</h1>
