import db from '../../../../lib/database';

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get({ locals }) {
	console.log('[API][GET] /posts/all');

	const { isAdmin } = locals;

	if (!isAdmin) {
		return {
			status: 401
		};
	}

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
