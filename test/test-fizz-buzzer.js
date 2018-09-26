const expect = require('chai').expect;

const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function() {


  it('should return fizz-buzz if divisible by 15', function() {
    [15, 30].forEach(function(input) {
      const answer = fizzBuzzer(input);
      expect(answer).to.equal('fizz-buzz');
    });
  });

  it('should return buzz if divisible by 5', function() {
    [5, 10].forEach(function(input) {
      const answer = fizzBuzzer(input);
      expect(answer).to.equal('buzz');
    });
  });

  it('should return fizz if divisible by 3', function() {
    [3, 6].forEach(function(input) {
      const answer = fizzBuzzer(input);
      expect(answer).to.equal('fizz');
    });
  });

  it('should return num if not a multiple of 3 or 5', function() {
    [1, 2].forEach(function(input) {
      const answer = fizzBuzzer(input);
      expect(answer).to.equal(input);
    });
  });

  it('should produce an error if input is not a number', function () {
    const badInputs = [
        true, 
        false
    ];
    badInputs.forEach(function(input) {
        expect(function() {
            fizzBuzzer(input);
        }).to.throw(Error);
      });
    });
});
