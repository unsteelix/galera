import db from '$lib/database';
import utils from '$lib/utils';

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get({ locals }) {
	console.log('[API][GET] /posts');

	const { isAdmin } = locals;

	const posts = await db.get(`/posts`);

	if (posts) {
		if (isAdmin) {
			return {
				body: posts
			};
		} else {
			let filtered = utils.filterPosts({ posts, isAdmin });

			return {
				body: filtered
			};
		}
	}

	return {
		status: 404
	};
}
