import db from '$lib/database';

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get({ params }) {
	console.log('[API][GET] /post/:id');

	const { id } = params;

	const data = await db.get(`/posts/${id}`);

	if (data) {
		return {
			body: data
		};
	}

	return {
		status: 404
	};
}
