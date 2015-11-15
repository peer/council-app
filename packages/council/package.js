Package.describe({
  name: 'council',
  version: '0.1.0'
});

Package.onUse(function (api) {
  api.versionsFrom('1.2.0.2');

  // Core dependencies.
  api.use([
    'coffeescript',
    'underscore-extra',
    'accounts-password',
    'stylus',
    'jquery'
  ]);

  // 3rd party dependencies.
  api.use([
    'kadira:flow-router@2.8.0',
    'kadira:blaze-layout@2.2.0',
    'peerlibrary:computed-field@0.3.0',
    'peerlibrary:reactive-field@0.1.0',
    'peerlibrary:assert@0.2.5',
    'materialize:materialize@0.97.1',
    'useraccounts:materialize@1.12.4',
    'useraccounts:flow-routing@1.12.4',
    'velocityjs:velocityjs@1.2.1',
    'mfpierre:chartist-js@1.6.0',
    'cunneen:accounts-admin-materializecss@0.2.19'
  ]);

  // Internal dependencies.
  api.use([
    'core',
    'api',
    'ui-components',
    'trix',
    'storage'
  ]);

  api.addFiles([
    'account/config.coffee'
  ]);

  api.addFiles([
    'upvoteable.html',
    'upvoteable.coffee',
    'upvoteable.styl',
    'expandable.html',
    'expandable.coffee',
    'expandable.styl',
    'editable.html',
    'editable.coffee',
    'editable.styl',
    'metadata.html',
    'metadata.coffee',
    'metadata.styl',
    'editor.html',
    'editor.coffee',
    'editor.styl',
    'account/form.coffee',
    'flow-router/title.coffee',
    'flow-router/root.html',
    'flow-router/root.coffee',
    'flow-router/layout.html',
    'flow-router/layout.coffee',
    'flow-router/layout.styl',
    'flow-router/header.html',
    'flow-router/header.coffee',
    'flow-router/footer.html',
    'flow-router/footer.coffee',
    'flow-router/not-found.html',
    'flow-router/not-found.coffee',
    'flow-router/icons.html',
    'discussion/list.html',
    'discussion/list.coffee',
    'discussion/new.html',
    'discussion/new.coffee',
    'discussion/display.html',
    'discussion/display.coffee',
    'comment/list.html',
    'comment/list.coffee',
    'comment/list.styl',
    'comment/new.html',
    'comment/new.coffee',
    'point/list.html',
    'point/list.coffee',
    'point/list.styl',
    'point/new.html',
    'point/new.coffee',
    'point/new.styl',
    'motion/list.html',
    'motion/list.coffee',
    'motion/list.styl',
    'motion/new.html',
    'motion/new.coffee',
    'motion/vote.html',
    'motion/vote.coffee',
    'motion/vote.styl',
    'admin/accounts.html',
    'admin/accounts.coffee'
  ], 'client');
});
