var path = require('path');
var expect = require('chai').expect;

var modulo_3 = require(path.join(__dirname, '..', './modulo_3.js'));

describe('modulo_3()', function () {
  'use strict';

  it('exists', function () {
    expect(modulo_3).to.be.a('function');

  });

  it('Computes the remainder after using modulo on 7', function () {
    expect(modulo_3(7)).to.equal(1);
  });

  it('Computes the remainder after using modulo on 0', function () {
    expect(modulo_3(0)).to.equal(0);
  });
  it('Computes the remainder after using modulo on 3', function () {
    expect(modulo_3(3)).to.equal(0);
  });

  // Add more assertions here
});
