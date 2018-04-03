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

});
