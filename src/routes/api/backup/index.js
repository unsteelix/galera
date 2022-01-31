import db from '$lib/database';

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get({ locals }) {
	console.log('[API][GET] /backup');

	const data = await db.get('/');
	const { isAdmin } = locals;

	if (!isAdmin) {
		return {
			status: 401
		};
	}

	if (data) {
		return {
			body: data
		};
	}

	return {
		status: 404
	};
}
