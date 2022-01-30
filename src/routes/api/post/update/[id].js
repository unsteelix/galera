import db from '$lib/database';

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function post({ params, request }) {
	console.log('[API][POST] /post/update/:id');

	const data = await request.json();

	const { id } = params;

	const newData = await db.push(`/posts/${id}`, data);

	if (newData) {
		return {
			body: newData
		};
	}

	return {
		status: 404
	};
}
