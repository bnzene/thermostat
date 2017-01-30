describe('Fizzbuzz', function() {

  var fizzbuzz;

  beforeEach(function() {
    fizzbuzz = new Fizzbuzz();
  });

  describe('knows when a number is', function() {

    it('divisible by 3', function() {
      expect(fizzbuzz._isDivisibleBy(3, 3)).toBe(true);
    });

  });

  describe('knows when a number is NOT', function() {

    it('not divisible by 3', function() {
      expect(fizzbuzz._isDivisibleBy(4, 3)).toBe(false);
    });

  });

  describe('knows when a number is', function() {

    it('divisible by 5', function() {
      expect(fizzbuzz._isDivisibleBy(5, 5)).toBe(true);
    });

  });

  describe('knows when a number is NOT', function() {

    it('not divisible by 5', function() {
      expect(fizzbuzz._isDivisibleBy(7, 5)).toBe(false);
    });

  });

  describe('knows when a number is', function() {

    it('divisible by 15', function() {
      expect(fizzbuzz._isDivisibleByFifteen(15, 15)).toBe(true);
    });

  });

  describe('knows when a number is NOT', function() {

    it('not divisible by 15', function() {
      expect(fizzbuzz._isDivisibleByFifteen(16, 15)).toBe(false);
    });

  });

  describe('when playing, says', function() {

    it('"Fizz" when a number is divisible by 3', function() {
      expect(fizzbuzz.says(3)).toEqual("Fizz");
    });

    it('"Buzz" when a number is divisible by 5', function() {
      expect(fizzbuzz.says(5)).toEqual("Buzz");
    });

    it('"Fizzbuzz" when a number is divisible by 15', function() {
      expect(fizzbuzz.says(15)).toEqual("Fizzbuzz");
    });

  });

});
