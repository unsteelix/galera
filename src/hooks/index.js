// hooks.js
import cookie from 'cookie';

export async function handle({ request, resolve }) {
	console.log('\n\n+++', request, '\n\n');

	const cookies = cookie.parse(request.headers.cookie || '');
	request.locals.token = cookies.token;
	return await resolve(request);
}

export function getSession({ locals }) {
	return {
		token: locals.token
	};
}
