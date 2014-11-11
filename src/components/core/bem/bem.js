'use strict';

var Class = require('components/class');
var $ = require('jquery');

var truthy = function(value) {
  return value;
};

module.exports = Class.extend({
  defaultOptions: {
    blockPrefix: '',
    nameSeparator: '-',
    elementPrefix: '__',
    modifierPrefix: '--'
  },

  /**
   * Constructs a new bem helper object that simplifies common javascript BEM modifier operations using jQuery.
   *
   * @param {String} blockName The name of the BEM block
   * @param {Object} $block jQuery wrapper around the BEM block element
   * @param {Object} options BEM options
   */
  constructor: function(blockName, $block, options) {
    this.blockName = blockName;
    this.$block = $block;
    this.$selection = this.$block;
    this.options = $.extend(true, {}, this.defaultOptions, options);
  },

  blockClass: function(modifier) {
    var className = [
      [this.options.blockPrefix, this.blockName].filter(truthy).join(this.options.nameSeparator),
      modifier
    ].filter(truthy).join(this.options.modifierPrefix);

    return {
      name: className,
      selector: ['.', className].join('')
    };
  },

  elementClass: function(element, modifier) {
    var className = [[
        this.blockClass().name,
        element
      ].filter(truthy).join(this.options.elementPrefix),
      modifier
    ].filter(truthy).join(this.options.modifierPrefix);

    return {
      name: className,
      selector: ['.', className].join('')
    };
  },

  withModifier: function(modifier) {
    return this.withSelector(this.blockClass(modifier).selector);
  },

  withSelector: function(selector) {
    this.$selection = this.$selection.filter(selector);
    return this;
  },

  resetSelection: function() {
    this.$selection = this.$element;
  },

  toggle: function(modifier) {
    this.$selection.toggleClass(this.blockClass(modifier).name);
    return this;
  },

  add: function(modifier) {
    this.$selection.addClass(this.blockClass(modifier).name);
    return this;
  },

  remove: function(modifier) {
    this.$selection.removeClass(this.blockClass(modifier).name);
    return this;
  },

  on: function() {
    $.fn.on.apply(this.$selection, Array.prototype.slice.call(arguments));
    return this;
  },

  attr: function() {
    $.fn.attr.apply(this.$selection, Array.prototype.slice.call(arguments));
    return this;
  },

  data: function() {
    return $.fn.data.apply(this.$selection, Array.prototype.slice.call(arguments));
  },

  element: function(element) {
    var block = this,
      $element = block.$selection.find(block.elementClass(element).selector);

    return {
      $element: $element,
      $selection: $element,

      withModifier: function(modifier) {
        return this.withSelector(this.blockClass(modifier).selector);
      },

      withSelector: function(selector) {
        this.$selection = this.$selection.filter(selector);
        return this;
      },

      resetSelection: function() {
        this.$selection = this.$element;
      },

      toggle: function(modifier) {
        this.$selection.toggleClass(block.elementClass(element, modifier).name);
        return this;
      },

      add: function(modifier) {
        this.$selection.addClass(block.elementClass(element, modifier).name);
        return this;
      },

      remove: function(modifier) {
        this.$selection.removeClass(block.elementClass(element, modifier).name);
        return this;
      },

      on: function() {
        $.fn.on.apply(this.$selection, Array.prototype.slice.call(arguments));
        return this;
      },

      attr: function() {
        $.fn.attr.apply(this.$selection, Array.prototype.slice.call(arguments));
        return this;
      },

      data: function() {
        return $.fn.data.apply(this.$selection, Array.prototype.slice.call(arguments));
      },

      block: function() {
        return block;
      }
    };
  }
});
