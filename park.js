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
  total = 0;
  for(var i=0; i<this.enclosure.length; i++){
      total += this.enclosure[i].offspring_per_year;
  } return total;
};

// Park.prototype.numberOfDinosaursAfterOneYear = function () {
//   for(var i=0; i<this.enclosure.length; i++){
//       let numberOfOffspringOneYear = this.enclosure[i].offspring_per_year;
//   }
//     let parentDinosaurs = this.enclosure.length
//     let numberOfDinosaursAfterOneYear = numberOfOffspringOneYear + parentDinosaurs;
//     return numberOfDinosaursAfterOneYear;
// };

  //  dinosaur in this.enclosure){
  //   let numberOfOffspringOneYear = dinosaur.offspring_per_year;
  //   let parentDinosaur = this.enclosure.length
  //   let numberOfDinosaursAfterOneYear = numberOfOffspringOneYear + parentDinosaur;
  //   return numberOfDinosaursAfterOneYear
  // }

// Park.prototype.numberOfDinosaursAfterTwoYears = function () {
//   let oneYearCount = numberOfDinosaursAfterOneYear;
//   for(var dinosaur of this.enclosure){
//     twoYearCount = ( oneYearCount * dinosaur.offspring_per_year) + oneYearCount;
//     return twoYearCount;
//   }
// };

module.exports = Park;
