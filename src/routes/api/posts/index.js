import db from '$lib/database';

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get() {
	console.log('[API][GET] /posts');

	const data = await db.get(`/posts`);

	if (data) {
		return {
			body: data
		};
	}

	return {
		status: 404
	};
}
