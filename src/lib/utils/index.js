import constants from './constants';

export const isAdminPass = (pass) => constants.adminPass === pass;

export const isValidToken = (userToken) => constants.token === userToken;

// return {
// 	 type: 'post' or 'folder',
// 	 payload: post or posts
// }
// else null
export const pageType = ({ posts, path }) => {
	// post
	for (let id in posts) {
		const post = posts[id];
		const { fullPath } = post;

		if (path === fullPath) {
			if (!post.isFolder) {
				return {
					type: 'post',
					payload: post
				};
			}
		}
	}

	// main page
	if (!path) {
		let payload = {};
		for (let id in posts) {
			let post = posts[id];
			if (!post.path) {
				payload[id] = post;
			}
		}
		return {
			type: 'folder',
			payload
		};
	}

	console.log(`PATH [${path}]`);

	// folder
	let payload = {};
	for (let id in posts) {
		let post = posts[id];
		if (post.path === path) {
			payload[id] = post;
		}
	}

	return {
		type: 'folder',
		payload
	};

	return null;
};

export const filterPosts = ({ posts, isAdmin }) => {
	let filteredPosts = {};

	if (isAdmin) {
		filteredPosts = posts;
	} else {
		for (let id in posts) {
			const post = posts[id];
			if (!post.isHidden) {
				filteredPosts[id] = post;
			}
		}
	}

	return filteredPosts;
};

export default {
	isAdminPass,
	isValidToken,
	pageType,
	filterPosts
};
