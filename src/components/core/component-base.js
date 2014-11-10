'use strict';

var Class = require('components/class');
var $ = require('jquery');
var Bem = require('components/bem');

module.exports = Class.extend({
  /**
   * Default options of the base class.
   */
  options: {
    version: '0.0.1'
  },

  /**
   * The initialize method of the base class should never be called.
   */
  initialize: function initialize() {
    throw new Error('Method "initialize" was called on base type. Missing implementation?');
  },

  /**
   * The default constructor for all sub classes that will set $element and the root element if specified.
   * The constructor is also extending the current option defaults with the one passed into the constructor and the ones
   * found on the data attribute data-sc-options. The options specified on the data attribute need to be JSON formatted.
   *
   * @param {Node|String} el The node or string that will be used to set $element for later use.
   * @param {Object} [options] The options object that will override the default options.
   * @param {Node|String} [root] The root element which is used for event broadcasts and delegate event capturing.
   */
  constructor: function constructor(el, options, root) {
    this.$root = $(root || window.document);
    this.$element = $(el);
    $.extend(this.options, options || {}, this.$element.data('componentOptions') || {});

    if(this.options.bem) {
      this.bem = new Bem(this.options.bem.name, this.$element, this.options.bem.options);
    }

    this.initialize();
  }
});
