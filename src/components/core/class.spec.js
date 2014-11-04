'use strict';

var Class = require('components/class');

var Fruit = Class.extend({
  color: undefined,
  sugar: undefined,
  constructor: function(color, sugar) {
    this.color = color;
    this.sugar = sugar;
  },
  eat: function() {
    this.sugar = 0;
    return this;
  }
});

var Banana = Fruit.extend({
  length: undefined,
  constructor: function(length, sugar) {
    Banana.super.constructor.call(this, 'Yellow', sugar);
    this.length = length;
  }
});

var KCal = Class.extend({
  sugar: 0,
  constructor: function(sugar) {
    this.sugar = sugar;
  },
  get kcal() {
    return [this.sugar * 4, 'kcal'].join('');
  }
});

var Nameable = Class.extend({
  name: undefined,
  constructor: function(name) {
    this.name = name;
  }
});

var NameableKCalBanana = Class.mix([Banana, KCal, Nameable], {
  constructor: function(name, length, sugar) {
    Nameable.prototype.constructor.call(this, name);
    Banana.prototype.constructor.call(this, length, sugar);
  },
  toString: function() {
    return [this.name, 'with', this.length + 'cm', 'and', this.kcal].join(' ');
  }
});

var ConstructorLess = Class.extend({
  toString: function() {
    return 'I have no constructor :-(';
  }
});

describe('Class', function() {
  it('should inherit correctly with descriptor object as prototype and all standard functions can be used', function() {
    var banana = new Banana(20, 40);

    expect(banana instanceof Fruit).toBe(true);
    expect(Fruit.prototype.isPrototypeOf(banana)).toBe(true);
    expect(Object.getPrototypeOf(banana)).toBe(Banana.prototype);
    expect(banana.sugar).toBe(40);
    expect(banana.eat().sugar).toBe(0);
    expect(banana.color).toBe('Yellow');
  });

  it('should mix various prototypes together into a merged prototype using the mix function', function() {
    var bananaWithSuperPowers = new NameableKCalBanana('Super Mixin Banana', 30, 80);
    expect(bananaWithSuperPowers.toString()).toBe('Super Mixin Banana with 30cm and 320kcal');
  });

  it('should throw an error when mix is called on a type', function() {
    var banana = new Banana(20, 40);

    expect(function callMixOnInstance() {
      banana.mix([Nameable]);
    }).toThrow();
  });

  it('should default to a dummy constructor function if no constructor was specified in the definition object', function() {
    expect(new ConstructorLess().toString()).toBe('I have no constructor :-(');
  });
});
