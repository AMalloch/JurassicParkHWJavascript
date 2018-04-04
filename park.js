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
  offspringTotalOneYear = 0;
  for(var i=0; i<this.enclosure.length; i++){
      offspringTotalOneYear += this.enclosure[i].offspring_per_year;
  } return offspringTotalOneYear;
};

Park.prototype.averageOffspringPerEnclosure = function () {
  let sum = 0;
  let len = this.enclosure.length;
  for (i = 0; i < len; i++) {
      sum += this.enclosure[i].offspring_per_year;
  } return averageOffspringPerEnclosure = sum / len;
};

Park.prototype.numberOfDinosaursAfterOneYear = function () {
  let numberOfDinosaursAfterOneYear = this.numberOfOffspringOneYear() + this.enclosure.length
  return numberOfDinosaursAfterOneYear;
};

Park.prototype.numberOfDinosaursAfterTwoYears = function () {
  let offspringAfterTwoYears = this.numberOfOffspringOneYear() * this.averageOffspringPerEnclosure(); //64 //128
  let numberOfParentDinosaursAfterTwoYears = this.numberOfOffspringOneYear() +  this.numberOfOffspringOneYear()/this.averageOffspringPerEnclosure(); // 9 //18
  let dinosaurTotal = offspringAfterTwoYears + numberOfParentDinosaursAfterTwoYears; // 73 //146
                        // 128                   // 18
  return dinosaurTotal; //73 //146
};

module.exports = Park;
