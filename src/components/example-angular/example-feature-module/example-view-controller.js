'use strict';

function ExampleViewController() {
  this.message = 'Hello World!';

  this.reverseMessage = function reverseMessage() {
    this.message = this.message.split('').reverse().join('');
  };
}

ExampleViewController.$name = 'ExampleViewCtrl';
ExampleViewController.$inject = [];
module.exports = ExampleViewController;
