import db from '$lib/database';

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get({ locals }) {
	console.log('[API][GET] /posts');

	const { isAdmin } = locals;

	const data = await db.get(`/posts`);

	if (data) {
		if (isAdmin) {
			return {
				body: data
			};
		} else {
			let filtered = {};

			for (let id in data) {
				let post = data[id];
				if (!post.isHidden) {
					filtered[id] = post;
				}
			}

			return {
				body: filtered
			};
		}
	}

	return {
		status: 404
	};
}
