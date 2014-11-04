'use strict';

var ComponentBase = require('components/component-base');

describe('Component base', function() {
  it('should throw an exception when initialize is not overriden', function() {
    var TestComponent = ComponentBase.extend({});

    expect(function createComponentInstance() {
      return new TestComponent();
    }).toThrow();
  });
});
