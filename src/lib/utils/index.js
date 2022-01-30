import constants from './constants';

export const isAdminPass = (pass) => constants.adminPass === pass;

export const isValidToken = (userToken) => constants.token === userToken;

export default {
	isAdminPass,
	isValidToken
};
