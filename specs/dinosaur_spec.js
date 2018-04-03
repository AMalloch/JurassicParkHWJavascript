var Dinosaur = require('../dinosaur.js');
var assert = require('assert');

describe('Park', function () {

  var dinosaur;

  beforeEach(function () {
    dinosaur = new Dinosaur({ type: 'Deinocheirus', offspring_per_year: 2});
  });

  // dinosaur has a type
  it('dinosaur has a type', function () {
    assert.strictEqual(dinosaur.type, 'Deinocheirus')
  })

  // dinosaur has offspring_per_year
  it('dinosaur has offspring per year', function () {
    assert.strictEqual(dinosaur.offspring_per_year, 2)
  })

});
