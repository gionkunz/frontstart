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
    this.bem.element('button').on('click', function onTabClick(event) {
      this.activateTab($(event.target).data('exampleTab'));
    }.bind(this));

    // On initialization make first tab active if there is no option for initialTab
    if(this.options.initialTab) {
      this.activateTab(this.options.initialTab);
    } else {
      this.activateTab(0);
    }
  },

  /**
   * Activates the tab with the given button element. This will also switch the aria-role necessary for proper accessibility.
   *
   * @param {String|Number} $tabButton String with the ID of the tab or number for nth tab.
   */
  activateTab: function activateTab($tabButton) {
    var activeButtonSelector = '';
    if(typeof $tabButton === 'string') {
      activeButtonSelector = '[data-example-tab="' + $tabButton + '"]';
    } else if(typeof $tabButton === 'number') {
      activeButtonSelector = ':eq(' + $tabButton + ')';
    }

    this.bem.element('button').remove('active');

    // Remove active from all panels
    this.bem.element('panel').remove('active').attr('aria-hidden', 'true');

    // Add active to activated button
    this.bem.element('button').withSelector(activeButtonSelector).add('active');

    // Add active to panel with index obtained from activated tab button
    this.bem.element('panel')
      .withSelector('[data-example-tab-panel="' + this.bem.element('button').withSelector(activeButtonSelector).data('exampleTab') + '"]')
      .add('active')
      .attr('aria-hidden', 'false');
  }
});
