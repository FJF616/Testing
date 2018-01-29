const assert = require('chai').assert;
const funcs = require('../src/project-1.js');
const sinon = require('sinon');
const sinonChai =require('sinon-chai');
const expect = require('chai').expect;
const chai = require('chai');



chai.use(sinonChai);

// we've gone ahead and gotten a start here for you,
// except, for some reason, none of our current assertions are working.
// first step is to make sure all these assertions work.
// then make sure you have at least 2-3 more assertions for every function.
// hint 1. - you need to pass data to the functions and get expected output.
// hint 2. - you should test to see if the expected return output is of a specified type, as well as the correct outcome.

describe('Project-1 Functions', () => {
  const multiplyByTen = funcs.multiplyByTen;
  describe('`multiplyByTen`', () => {
    it('should be a function', () => {    
      assert.typeOf(multiplyByTen, 'function'); 
    });
    // begin here
    it('should multiply a number by ten', () => {
      assert.equal(multiplyByTen(10), 100);
      expect(multiplyByTen(9)).to.equal(90);
    });
    // it('should return undefined when multiplied by string', () => {
    //   const multiplyByTen = funcs.multiplyByTen;
    //   expect(multiplyByTen('')).to.equal('undefined');
    // })

  });

  describe('`subtractFive`', () => {
    const subtractFive = funcs.subtractFive;
    it('should be a function', () => {
      
      assert.typeOf(subtractFive, 'function');
    });
    it('should return a lower value for answer', () => {
      expect(subtractFive(55)).to.be.below(95);
    });
    it('should return a number for answer', () => {
      expect(subtractFive(9)).to.be.a('number');
    });
    it('should return a negative number when input < 5', () => {
      assert.equal(subtractFive(4), -1);
    });
  });

  describe('`areSameLength`', () => {
    const areSameLength = funcs.areSameLength;
    it('should be a function', () => {  
      assert.typeOf(areSameLength, 'function');
    });
    it('should test the length of two strings', () => {
      assert.equal(areSameLength('hello', 'hello'), true);
      expect(areSameLength('hello', 'hi')).to.be.equal(false);
      expect(areSameLength(9, 'hi')).to.be.equal(false);
      expect(areSameLength(123, 3)).to.be.equal(true);
      expect(areSameLength('123', '3')).to.be.equal(false);
    });

  });
  describe('`areEqual`', () => {
    const areEqual = funcs.areEqual;
    it('should be a function', () => {  
      assert.typeOf(areEqual, 'function');
    });
    it('should properly test numbers', () => {
      assert.equal(areEqual(5, 5), true);
      expect(areEqual(1, 1)).to.be.equal(true);
    });
    it('should properly test strings', () => {
      assert.equal(areEqual('hi', 'hi'), true);
      expect(areEqual('hi', 'hi')).to.be.equal(true);
    });
  });

  describe('`lessThanNinety`', () => {
    const lessThanNinety = funcs.lessThanNinety;
    it('should be a function', () => {
      assert.typeOf(lessThanNinety, 'function');
    });
    it('should return false for any number greater than 90', () => {
      assert.equal(lessThanNinety(100), false);
      expect(lessThanNinety(100)).to.be.equal(false);
    });
    it('should return true if number is less than 90, false if not a number', () => {
      assert.equal(lessThanNinety(45), true);
      expect(lessThanNinety('hi')).to.be.equal(false);
    });
  });

  describe('`greaterThanFifty`', () => {
    const greaterThanFifty = funcs.greaterThanFifty;
    it('should be a function', () => { 
      assert.typeOf(greaterThanFifty, 'function');
    });
    it('should return true for any number greater than 50', () => {
      assert.equal( greaterThanFifty(100), true);
      expect( greaterThanFifty(100)).to.be.equal(true);
    });
    it('should return false if number is less than 50, false if not a number', () => {
      assert.equal(greaterThanFifty(45), false);
      expect(greaterThanFifty('hi')).to.be.equal(false);
    });
  });

  describe('`add`', () => {
    const add = funcs.add;
    it('should be a function', () => {
      // const add = funcs.add;
      assert.typeOf(add, 'function');
    });
    it('should return a number', () => {
      assert.typeOf(add(2, 3), 'number');
      expect(add(4, 4)).to.be.equal(8);
      expect(add(9, 'hi')).to.eql(NaN);
    });

  });

  describe('`subtract`', () => {
    const subtract = funcs.subtract;
    it('should be a function', () => {
      assert.typeOf(subtract, 'function');
    });
    it('should return a number, answer is signed or unsigned as well', () => {
      assert.typeOf(subtract(2, 3), 'number');
    it('should return NaN for invalid input')
      expect(subtract(4, 4)).to.be.equal(0);
      expect(subtract(9, 'hi')).to.eql(NaN);
    });
  });

  describe('`divide`', () => {
    const divide = funcs.divide;
    it('should be a function', () => {  
      assert.typeOf(divide, 'function');
    });
  });

  describe('`multiply`', () => {
    const multiply = funcs.multiply;
    it('should be a function', () => {     
      assert.typeOf(multiply, 'function');
    });
  });

  describe('`getRemainder`', () => {
    const getRemainder = funcs.getRemainder;
    it('should be a function', () => {
      assert.typeOf(getRemainder, 'function');
    });
  });

  describe('`isEven`', () => {
    const isEven = funcs.isEven;
    it('should be a function', () => {    
      assert.typeOf(isEven, 'function');
    });
  });

  describe('`isOdd`', () => {
    const isOdd = funcs.isOdd;
    it('should be a function', () => {    
      assert.typeOf(isOdd, 'function');
    });
  });

  describe('`square`', () => {
    const square = funcs.square;
    it('should be a function', () => {     
      assert.typeOf(square, 'function');
    });
  });

  describe('`cube`', () => {
    const cube = funcs.cube;
    it('should be a function', () => {  
      assert.typeOf(cube, 'function');
    });
  });

  describe('`raiseToPower`', () => {
    const raiseToPower = funcs.raiseToPower;
    it('should be a function', () => {    
      assert.typeOf(raiseToPower, 'function');
    });
  });

  describe('`roundNumber`', () => {
    const roundNumber = funcs.roundNumber;
    it('should be a function', () => {
      assert.typeOf(roundNumber, 'function');
    });
  });

  describe('`roundUp`', () => {
    const roundUp = funcs.roundUp;
    it('should be a function', () => {
      assert.typeOf(roundUp, 'function');
    });
  });

  describe('`addExclamationPoint`', () => {
    const addExclamationPoint = funcs.addExclamationPoint;
    it('should be a function', () => {
      assert.typeOf(addExclamationPoint, 'function');
    });
  });

  describe('`combineNames`', () => {
    const combineNames = funcs.combineNames;
    it('should be a function', () => {
      assert.typeOf(combineNames, 'function');
    });
  });

  describe('`getGreeting`', () => {
    const getGreeting = funcs.getGreeting;
    it('should be a function', () => {
      assert.typeOf(getGreeting, 'function');
    });
  });

  describe('`getRectangleArea`', () => {
    const getRectangleArea = funcs.getRectangleArea;
    it('should be a function', () => {
      assert.typeOf(getRectangleArea, 'function');
    });
  });

  describe('`getTriangleArea`', () => {
    const getTriangleArea = funcs.getTriangleArea;
    it('should be a function', () => {
      assert.typeOf(getTriangleArea, 'function');
    });
  });

  describe('`getCircleArea`', () => {
    const getCircleArea = funcs.getCircleArea;
    it('should be a function', () => {
      assert.typeOf(getCircleArea, 'function');
    });
  });

  describe('`getRectangularPrismVolume`', () => {
    const getRectangularPrismVolume = funcs.getRectangularPrismVolume;
    it('should be a function', () => {
      assert.typeOf(getRectangularPrismVolume, 'function');
    });
  });
});
