var Park = function () {
  this.enclosure = [];
  this.OffspringPerYearGreaterThanTwo = [];
}

Park.prototype.addDinosaur = function(dinosaur) {
  this.enclosure.push(dinosaur);
}

Park.prototype.removeDinosaur = function () {
  this.enclosure.shift(0);
};

Park.prototype.dinosaursWithOffspringPerYearGreaterThanTwo = function () {
  for(var dinosaur of this.enclosure){
    if (dinosaur.offspring_per_year > 2){
      this.OffspringPerYearGreaterThanTwo.push(dinosaur);
    }
  }

};

module.exports = Park;
