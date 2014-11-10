'use strict';

var $ = require('jquery');
var specHelpers = require('components/spec-helpers');
var ScTabs = require('components/example-tabs');

describe('Example tabs', function() {
  var fixtures = specHelpers.fixtures($(window.document.body)),
    $tabs;

  beforeEach(function() {
    fixtures.cleanup();
    $tabs = fixtures.append('example-tabs.fixture.html');
  });

  it('should initialize correctly', function() {
    expect($tabs).not.toBeNull();

    new ScTabs($tabs);

    expect($tabs.find('#firstTabPanel')).not.toBeHidden();
    expect($tabs.find('#secondTabPanel')).toBeHidden();
    expect($tabs.find('#thirdTabPanel')).toBeHidden();
  });

  it('should initialize correctly when initialTab option is passed', function() {
    expect($tabs).not.toBeNull();

    new ScTabs($tabs, {
      initialTab: 'third'
    });

    expect($tabs.find('#firstTabPanel')).toBeHidden();
    expect($tabs.find('#secondTabPanel')).toBeHidden();
    expect($tabs.find('#thirdTabPanel')).not.toBeHidden();
  });

  it('should activate tab correctly', function() {
    expect($tabs).not.toBeNull();

    var scTabs = new ScTabs($tabs, {
      initialTab: 'third'
    });

    expect($tabs.find('#firstTabPanel')).toBeHidden();
    expect($tabs.find('#secondTabPanel')).toBeHidden();
    expect($tabs.find('#thirdTabPanel')).not.toBeHidden();

    scTabs.activateTab($tabs.find('#secondTab').data('exampleTab'));

    expect($tabs.find('#firstTabPanel')).toBeHidden();
    expect($tabs.find('#secondTabPanel')).not.toBeHidden();
    expect($tabs.find('#thirdTabPanel')).toBeHidden();
  });

  it('should activate tab by ID', function() {
    expect($tabs).not.toBeNull();

    var scTabs = new ScTabs($tabs);
    scTabs.activateTab('third');

    expect($tabs.find('#firstTabPanel')).toBeHidden();
    expect($tabs.find('#secondTabPanel')).toBeHidden();
    expect($tabs.find('#thirdTabPanel')).not.toBeHidden();
  });

  it('should activate tab by number', function() {
    expect($tabs).not.toBeNull();

    var scTabs = new ScTabs($tabs);
    scTabs.activateTab(1);

    expect($tabs.find('#firstTabPanel')).toBeHidden();
    expect($tabs.find('#secondTabPanel')).not.toBeHidden();
    expect($tabs.find('#thirdTabPanel')).toBeHidden();
  });

  it('should activate tab by clicks', function() {
    expect($tabs).not.toBeNull();

    new ScTabs($tabs, {
      initialTab: 'first'
    });

    expect($tabs.find('#firstTabPanel')).not.toBeHidden();
    expect($tabs.find('#secondTabPanel')).toBeHidden();
    expect($tabs.find('#thirdTabPanel')).toBeHidden();

    $tabs.find('[data-example-tab="third"]').trigger('click');

    expect($tabs.find('#firstTabPanel')).toBeHidden();
    expect($tabs.find('#secondTabPanel')).toBeHidden();
    expect($tabs.find('#thirdTabPanel')).not.toBeHidden();
  });
});
