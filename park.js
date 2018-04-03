var Park = function () {
  this.enclosure = [];
}

Park.prototype.addDinosaur = function(dinosaur) {
  this.enclosure.push(dinosaur);
}

Park.prototype.removeDinosaur = function () {
  this.enclosure.shift(0);
};

module.exports = Park;
