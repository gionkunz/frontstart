'use strict';

// Bower packages can be included like npm modules by using the debowerify transform of browserify
var $ = require('jquery');
var ScTabs = require('components/example-tabs');

$('[data-example-tabs]').each(function() {
  new ScTabs(this);
});
