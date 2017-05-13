Package.describe({
  name: 'spectrum:tlecss',
  version: '0.0.1',
  summary: '최소지향 한글CSS 프레임워크',
  git: 'https://github.com/acidsound/Tle-CSS.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.3');
  api.use('stylus');
  api.addFiles('./src/tle.styl', 'client');
});
