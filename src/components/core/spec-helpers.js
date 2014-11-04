'use strict';

var $ = require('jquery');

exports.fixtures = function fixtures($root) {
  $root.remove('#fixtures');
  var $fixtures = $('<div id="#fixtures"></div>').appendTo($root);

  /**
   * Cleans all added fixtures in the container.
   */
  function cleanup() {
    $fixtures.empty();
  }

  /**
   * This function will append one or more fixtures that match the fixture name or pattern that is passed to the function.
   *
   * @param {String|RegExp} fixture String that should match a part of the file name or regex that is used to match the filename.
   * @returns {Object|Array.<Object>} jQuery wrapper of added fixture. If multiple fixtures were added this method will return an array of jQuery wrapper objects.
   */
  function append(fixture) {
    var addedFixtures = [];

    if(window.__html__) {
      Object.keys(window.__html__).filter(function onlyMatchingFixtures(fixtureFileName) {
        return fixture instanceof RegExp ? fixtureFileName.match(fixture) : fixtureFileName.indexOf(fixture) !== -1;
      }).forEach(function addToContainer(fixtureFileName) {
        addedFixtures.push($(window.__html__[fixtureFileName]).appendTo($fixtures));
      });

      if(addedFixtures.length === 0) {
        throw new Error('No fixture found for ' + fixture);
      } else if(addedFixtures.length === 1) {
        return addedFixtures[0];
      } else {
        return addedFixtures;
      }
    } else {
      throw new Error('No fixtures found in window.__html__. Make sure fixtures get loaded with html2js browserify transform.');
    }
  }

  return {
    cleanup: cleanup,
    append: append
  };
};
