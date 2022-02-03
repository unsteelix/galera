export const quillToolbarOptions = [
	['bold', 'italic', 'underline', 'strike'], // toggled buttons
	['blockquote', 'code-block'],

	[{ header: 1 }, { header: 2 }], // custom button values
	[{ list: 'ordered' }, { list: 'bullet' }],
	[{ script: 'sub' }, { script: 'super' }], // superscript/subscript
	[{ indent: '-1' }, { indent: '+1' }], // outdent/indent
	[{ direction: 'rtl' }], // text direction

	[{ size: ['small', false, 'large', 'huge'] }], // custom dropdown
	[{ header: [1, 2, 3, 4, 5, 6, false] }],

	[{ color: [] }, { background: [] }], // dropdown with defaults from theme
	[{ font: [] }],
	[{ align: [] }],

	['clean'] // remove formatting button
];

export const quillOptions = {
	placeholder: 'Write something...',
	theme: 'snow',
	plainclipboard: false,
	modules: {
		toolbar: quillToolbarOptions,
		history: {
			delay: 2000,
			maxStack: 500,
			userOnly: true
		}
	}
};

export const picolaDomain = 'https://picola.unsteelix.keenetic.link';
export const picolaDomainImg = `${picolaDomain}/i/`;

export const adminPass = '1234';

export const token = 'qeirqjfjwef';

export default {
	quillOptions,
	quillToolbarOptions,
	picolaDomain,
	picolaDomainImg,
	adminPass,
	token
};
