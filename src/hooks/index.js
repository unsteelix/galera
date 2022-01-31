// hooks.js
import { parse } from 'cookie';
import utils from '../lib/utils';

export async function handle({ event, resolve }) {
	const cookies = parse(event.request.headers.get('cookie') || '');
	const { token } = cookies;

	const isAdmin = utils.isValidToken(token);

	event.locals = {
		...event.locals,
		token,
		isAdmin
	};

	const response = await resolve(event, {
		ssr: true
	});

	return response;
}

export function getSession({ locals }) {
	const { token, isAdmin } = locals;

	return {
		token,
		isAdmin
	};
}
