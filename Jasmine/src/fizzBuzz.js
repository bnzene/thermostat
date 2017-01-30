var Fizzbuzz = function(){};

Fizzbuzz.prototype._isDivisibleBy = function(number, divisor) {
  return (number % divisor === 0);
};

Fizzbuzz.prototype._isDivisibleByFifteen = function(number) {
  return this._isDivisibleBy(number, 15);
};

Fizzbuzz.prototype.says = function(number) {
  if (this._isDivisibleByFifteen(number)) {
    return "Fizzbuzz";
  }
  if (this._isDivisibleBy(number, 3)) {
    return "Fizz";
  }
  if (this._isDivisibleBy(number, 5)) {
    return "Buzz";
  }
  return number;
};
