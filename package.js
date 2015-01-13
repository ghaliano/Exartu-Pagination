Package.describe({
  name: 'aida:pagination',
  summary: "pagination package from Uruworks",
  version: "0.1.0",
  git: "https://github.com/Exartu/Exartu-Pagination.git"
});

Package.onUse(function (api, where) {

  api.versionsFrom('METEOR@0.9.2');
  api.addFiles(['metadata.js'], 'server');
  api.addFiles(['server.js'], 'server');
  api.addFiles(['client.js'], 'client');
  api.addFiles(['view.html'], 'client');
  api.addFiles(['view.js'], 'client');
  api.use('aida:mongo-view@0.1.1','server',{ weak: true });
});

