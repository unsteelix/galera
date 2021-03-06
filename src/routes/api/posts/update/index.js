import db from '$lib/database';

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function post({ request, locals }) {
	console.log('[API][POST] /posts/update');

	const { isAdmin } = locals;
	const data = await request.json();

	if (!isAdmin) {
		return {
			status: 401
		};
	}

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
