var Dinosaur = require('../dinosaur.js');
var Park = require('../park.js');
var assert = require('assert');

describe('Park', function () {

  var park;
  var dinosaur1;

  beforeEach(function () {
    park = new Park();
    dinosaur1 = new Dinosaur({ type: 'Parasaurolophus', offspring_per_year: 8});
    dinosaur2 = new Dinosaur({ type: 'Quetzalcoatlus', offspring_per_year: 1});
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
  it('can add dinosaur to enclosure', function(){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur1);
    park.removeDinosaur();
    assert.strictEqual(park.enclosure.length, 2)
  })

  // should get all the dinosaurs with an offspring count of more than 2
  it('can get dinosaurs with offspring count greater than 2', function(){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.dinosaursWithOffspringPerYearGreaterThanTwo();
    assert.strictEqual(park.OffspringPerYearGreaterThanTwo.length, 2)
  })

  // should be able to calculate number of dinosaurs after year one,
  // starting with 1 dinosaur assuming entire brood survives
  it('calculate number of dinosaurs after year one', function(){
    park.addDinosaur(dinosaur1);
    assert.strictEqual(park.numberOfDinosaursAfterOneYear(), 9)
  })

});
