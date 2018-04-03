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

});
