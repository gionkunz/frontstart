'use strict';

var $ = require('jquery');
var ComponentBase = require('components/component-base');

module.exports = ComponentBase.extend({
  /**
   * Registers the click behavior on the tabs and activates the configured initial tab or the first one.
   *
   */
  initialize: function initialize() {
    // Attach click handler to switch active tab
    this.$element.on('click', '[data-example-tab]', function onTabClick(event) {
      this.activateTab($(event.target));
    }.bind(this));

    // On initialization make first tab active if there is no option for initialTab
    if(this.options.initialTab) {
      this.activateTab(this.options.initialTab);
    } else {
      this.activateTab(this.$element.find('[data-example-tab]').first());
    }
  },

  /**
   * Activates the tab with the given button element. This will also switch the aria-role necessary for proper accessibility.
   *
   * @param {Object|String|Number} $tabButton jQuery wrapper of the tab button element in the tab that should be activated or string with the ID of the tab or number for nth tab.
   */
  activateTab: function activateTab($tabButton) {
    if(typeof $tabButton === 'string') {
      $tabButton = this.$root.find('[data-example-tab="' + $tabButton + '"]');
    } else if(typeof $tabButton === 'number') {
      $tabButton = this.$root.find('[data-example-tab]').eq($tabButton);
    }

    // Remove active from all buttons
    var $tabs = $tabButton.closest('[data-example-tabs]');

    $tabs
      .find('[data-example-tab]')
      .removeClass('example-tabs__button--active');

    // Remove active from all panels
    $tabs
      .find('[data-example-tab-panel]')
      .removeClass('example-tabs__panel--active')
      .attr('aria-hidden', 'true');

    // Add active to activated button
    $tabButton.addClass('example-tabs__button--active');

    // Add active to panel with index obtained from activated tab button
    $tabs
      .find('[data-example-tab-panel="' + $tabButton.data('exampleTab') + '"]')
      .addClass('example-tabs__panel--active')
      .attr('aria-hidden', 'false');
  }
});
