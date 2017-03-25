Package.describe({
	name: 'rocketchat:2fa',
	version: '0.0.1',
	summary: '',
	git: '',
	documentation: 'README.md'
});

Npm.depends({
	speakeasy: '2.0.0',
	yaqrcode: '0.2.1'
});

Package.onUse(function(api) {
	api.use([
		'accounts-base',
		'ecmascript',
		'templating',
		'rocketchat:lib',
		'sha',
		'random'
	]);

	api.addFiles('client/accountSecurity.html', 'client');
	api.addFiles('client/accountSecurity.js', 'client');
	api.addFiles('client/TOTPPassword.js', 'client');

	api.addFiles('server/lib/totp.js', 'server');

	api.addFiles('server/methods/disable2fa.js', 'server');
	api.addFiles('server/methods/enable2fa.js', 'server');
	api.addFiles('server/methods/verifyTemp2FAToken.js', 'server');

	api.addFiles('server/models/users.js', 'server');

	api.addFiles('server/loginHandler.js', 'server');
});