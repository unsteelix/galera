import db from '$lib/database';

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get({ params, locals }) {
	console.log('[API][GET] /post/:id');

	const { id } = params;
	const { isAdmin } = locals;

	const data = await db.get(`/posts/${id}`);

	if (data) {
		const { isHidden } = data;

		if (!isAdmin && isHidden) {
			return {
				status: 401
			};
		}

		return {
			body: data
		};
	}

	return {
		status: 404
	};
}
