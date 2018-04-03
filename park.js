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

Park.prototype.numberOfOffspringOneYear = function () {
  offspringTotal = 0;
  for(var i=0; i<this.enclosure.length; i++){
      offspringTotal += this.enclosure[i].offspring_per_year;
  } return offspringTotal;
};

Park.prototype.numberOfDinosaursAfterOneYear = function () {
  let offspringOneYear = offspringTotal;
  let numberOfDinosaursAfterOneYear = offspringOneYear + this.enclosure.length
  return numberOfDinosaursAfterOneYear;
};

Park.prototype.numberOfDinosaursAfterTwoYears = function (offspringPerSpecies) {
  let offspringAfterTwoYears = offspringTotal * offspringPerSpecies //64 //128
  let numberOfParentDinosaursAfterTwoYears = offspringTotal + offspringTotal/8 // 9 //18
  let dinosaurTotal = offspringAfterTwoYears + numberOfParentDinosaursAfterTwoYears; // 73 //146
                        // 128                   // 18
  return dinosaurTotal; //73 //146
};

module.exports = Park;
