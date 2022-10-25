module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{js,png,jpg,html,json,css}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};