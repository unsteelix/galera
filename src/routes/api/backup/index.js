import db from '$lib/database';

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get() {
	console.log('[API][GET] /backup');

	const data = await db.get('/');

	if (data) {
		return {
			body: data
		};
	}

	return {
		status: 404
	};
}
