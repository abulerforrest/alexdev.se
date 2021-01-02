import {siblingStatusTypes} from "../controllers/NavBarController/NavBarController";

export interface IUrl {
	type: siblingStatusTypes,
	isURL: boolean
}

export const validateURL = (str: string): IUrl => {

	const url_regexp: RegExp = new RegExp('^(?!mailto:)(?:(?:http|https|ftp)://)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$');
	const email_regexp: RegExp = new RegExp('^([A-Za-z0-9_\\-.+])+@([A-Za-z0-9_\\-.])+\\.([A-Za-z]{2,})$');

	let isURL: boolean = false;
	let type: siblingStatusTypes = siblingStatusTypes.DEFAULT;

		if (email_regexp.test(str)) {
			type = siblingStatusTypes.EMAIL;
			isURL = true;
		}
		if (url_regexp.test(str)) {
			type = siblingStatusTypes.LINK;
			isURL = true;
		}

	return {
		type: type,
		isURL: isURL
	}
}

export const isMobileDevice = () => {
	return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
}