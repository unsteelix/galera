import db from '$lib/database';

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function post({ request }) {
	console.log('[API][POST] /posts/update');

	const data = await request.json();

	const newData = await db.push(`/posts`, data);

	if (newData) {
		return {
			body: newData
		};
	}

	return {
		status: 404
	};
}
