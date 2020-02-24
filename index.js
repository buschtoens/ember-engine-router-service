'use strict';

module.exports = {
  name: require('./package').name,

  included(parent) {
    this._super(parent);

    this.assertDependencyOfEngine(parent);
  },

  assertDependencyOfEngine(parent) {
    if (
      !typeof parent.treeForEngine === 'function' &&
      parent.pkg.keywords &&
      ['ember-addon', 'ember-engine'].any(k => parent.pkg.keywords.includes(k))
    ) {
      this.ui.writeErrorLine(
        `${this.name}: Cannot be used in '${parent.name}', as it is not an engine.`
      );
    }
  }
};
