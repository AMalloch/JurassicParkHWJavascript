var Dinosaur = require('../dinosaur.js');
var Park = require('../park.js');
var assert = require('assert');

describe('Park', function () {

  var park;
  var dinosaur1;

  beforeEach(function () {
    park = new Park();
    dinosaur1 = new Dinosaur({ type: 'Parasaurolophus', offspring_per_year: 8});
  });

  // enclosure should start empty
  it('enclosure should start empty', function() {
    assert.strictEqual(park.enclosure.length, 0);
  });

  // should be able to add dinosaur
  it('can add dinosaur to enclosure', function(){
    park.addDinosaur(dinosaur1);
    assert.strictEqual(park.enclosure.length, 1)
  })

  // should be able to remove all dinosaurs of a particular type
  // should get all the dinosaurs with an offspring count of more than 2

});
