var jsonModule = require('broccoli-json-module');

module.exports = {
  name: 'ember-cli-json-to-js',
  included: function(app) {
    this._super.included.apply(this, arguments);

    var plugin = {
      name: 'ember-cli-json-to-js',
      ext: 'json',
      toTree: function(tree) {
        return jsonModule(tree);
      }
    };

    app.registry.add('js', plugin);
  }
};