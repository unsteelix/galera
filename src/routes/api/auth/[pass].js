import utils from '../../../lib/utils';
import constants from '../../../lib/utils/constants';

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get({ params, request }) {
	console.log('[API][GET] /auth/:pass');

	const { pass } = params;

	console.log('PASS: ', pass);

	if (utils.isAdminPass(pass)) {
		return {
			status: 200,
			headers: {
				'Set-Cookie': `token=${constants.token}; Path=/`
			}
		};
	}

	return {
		status: 404
	};
}
