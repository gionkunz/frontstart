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
      var $element = $(event.target);
      this.activateTab($element.data('exampleTab'));

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
   * @param {String|Number} tabButton String with the ID of the tab or number for nth tab.
   */
  activateTab: function activateTab(tabButton) {
    var activeButtonSelector =
      typeof tabButton === 'number' ?
      ':eq(' + tabButton + ')' :
      '[data-example-tab="' + tabButton + '"]';

    this.bem.element('button').remove('active');

    // Remove active from all panels
    this.bem.element('panel').remove('active').attr('aria-hidden', 'true');

    // Add active to activated button
    var activeTab = this.bem.element('button').withSelector(activeButtonSelector);
    activeTab.add('active');

    // Add active to panel with index obtained from activated tab button
    this.bem.element('panel')
      .withSelector('[data-example-tab-panel="' + activeTab.data('exampleTab') + '"]')
      .add('active')
      .attr('aria-hidden', 'false');
  }
});
