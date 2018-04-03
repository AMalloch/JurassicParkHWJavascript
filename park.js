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

var my_array = ['a', 'b', 'c'];

        for (var i=0; i<my_array.length; i++) {
            console.log(my_array[i]);
            //a b c
        }

        my_array.forEach(function(current_value) {
            console.log(current_value);
            //a b c
        });

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

Park.prototype.numberOfDinosaursAfterTwoYears = function (amountOfYears) {
  let offspringAfterTwoYears = offspringTotal * offspringTotal //64
  let numberOfParentDinosaursAfterTwoYears = offspringTotal + this.enclosure.length // 9
  let dinosaurTotal = offspringAfterTwoYears + numberOfParentDinosaursAfterTwoYears; // 73
  return dinosaurTotal; //73
};

module.exports = Park;
