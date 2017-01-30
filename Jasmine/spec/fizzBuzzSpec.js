//
// Print the numbers from 1 to 100
// If a number is divisible by 3 print "Fizz" instead
// If a number is divisible by 5 print "Buzz" instead
// If a number is divisible by 3 and 5 print "FizzBuzz" instead
//
//
// describe('Fizzbuzz', function() {
//   it("prints everything from 1 to 100", function() {
//
//   });
// });

describe('Fizzbuzz', function() {

  var fizzbuzz;

  describe('knows when a number is', function() {

    it('divisible by 3', function() {
      fizzbuzz = new Fizzbuzz();
      expect(fizzbuzz.isDivisibleByThree(3)).toBe(true);
    });

  });

  describe('knows when a number is NOT', function() {

    it('not divisible by 3', function() {
      fizzbuzz = new Fizzbuzz();
      expect(fizzbuzz.isDivisibleByThree(4)).toBe(false);
    });

  });

  describe('knows when a number is', function() {

    it('divisible by 5', function() {
      fizzbuzz = new Fizzbuzz();
      expect(fizzbuzz.isDivisibleByFive(5)).toBe(true);
    });

  });

  describe('knows when a number is NOT', function() {

    it('not divisible by 5', function() {
      fizzbuzz = new Fizzbuzz();
      expect(fizzbuzz.isDivisibleByFive(7)).toBe(false);
    });

  });

  describe('knows when a number is', function() {

    it('divisible by 15', function() {
      fizzbuzz = new Fizzbuzz();
      expect(fizzbuzz.isDivisibleByFifteen(15)).toBe(true);
    });

  });

  describe('knows when a number is NOT', function() {

    it('not divisible by 15', function() {
      fizzbuzz = new Fizzbuzz();
      expect(fizzbuzz.isDivisibleByFifteen(16)).toBe(false);
    });

  });

});
