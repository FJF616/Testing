
const funcs = require('../src/project-2.js');
const assert = require('chai').assert;
const expect = require('chai').expect;
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const chai = require('chai');
chai.use(sinonChai);

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('Project-2 Functions', () => {
    const getBiggest = funcs.getBiggest;
    describe('`getBiggest`', () => {
      it('should be a function', () => {    
        assert.typeOf(getBiggest, 'function'); 
      });
    });
      // begin here
      it('Return y if x === y, x if x > y, or y in all other cases', () => {
        let x = 10;
        let y = -(-10);
        assert.equal(getBiggest(x, y), y);
        expect(getBiggest(x, -(y))).to.equal(x);
        expect(getBiggest('hi', 9)).to.equal(9);
      });


    describe(`'greeting'`, () => {
        const greeting = funcs.greeting;
        it('should be a function', () => {
            assert.typeOf(greeting, 'function');
        });
        it('should return Guten Tag! when German is passed into argument. Hola! when Spanish is passed and default to Hello!', () => {
            assert.equal(greeting('German'), 'Guten Tag!');
            assert.equal(greeting('Spanish'), 'Hola!');
            assert.equal(greeting(), 'Hello!');
        });
    });

    describe(`'isTenOrFive'`, () => {
        const isTenOrFive = funcs.isTenOrFive;
        it('should be a function', () => {
            assert.typeOf(isTenOrFive, 'function');
        });
        it('should return true if input is 10 or 5 or else return false', () => {
            assert.equal(isTenOrFive(10), true);
            assert.equal(isTenOrFive(5), true);
            assert.equal(isTenOrFive(9), false);
            assert.equal(isTenOrFive('hi'), false);
            assert.equal(isTenOrFive(-5), false);
            assert.equal(isTenOrFive(05), true);
            assert.equal(isTenOrFive(010), false);
        });
    });

    // describe(`'isInRange'`, () => {
    //     const isInRange = funcs.isInRange;
    //     it('should be a function', () => {
    //         assert.typeOf(isInRange, 'function');
    //     });
    // });

    // describe(`' isInteger'`, () =>{
    //     const isInteger = funcs.isInteger;
    //     it('should be a function', () => {
    //         assert.typeOf(isInteger, 'function');
    //     });
    // });

    // describe(`'fizzBuzz'`, () =>{
    //     const fizzBuzz  = funcs.fizzBuzz;
    //     it('should be a function', () => {
    //         assert.typeOf(fizzBuzz, 'function');
    //     });
    // });

    // describe(`'isPrime'`, () =>{
    //     const isPrime = funcs.isPrime;
    //     it('should be a function', () => {
    //         assert.typeOf(isPrime, 'function');
    //     });
    // });

    // describe(`'returnFirst'`, () =>{
    //     const returnFirst  = funcs.returnFirst;
    //     it('should be a function', () => {
    //         assert.typeOf(returnFirst, 'function');
    //     });
    // });
    // describe(`'returnLast'`, () =>{
    //     const returnLast= funcs.returnLast;
    //     it('should be a function', () => {
    //         assert.typeOf(returnLast, 'function');
    //     });
    // });
    // describe(`'getArrayLength'`, () =>{
    //     const getArrayLength = funcs.getArrayLength;
    //     it('should be a function', () => {
    //         assert.typeOf(getArrayLength, 'function');
    //     });
    // });

    // describe(`'incrementByOne'`, (incrementByOne) =>{
    //     const incrementByOne = funcs.incrementByOne;
    //     it('should be a function', () => {
    //         assert.typeOf(incrementByOne, 'function');
    //     });
    // });
    // describe(`'addItemToArray'`, () =>{
    //     const addItemToArray = funcs.addItemToArray;
    //     it('should be a function', () => {
    //         assert.typeOf(addItemToArray, 'function');
    //     });
    // });
    // describe(`'addItemToFront'`, () =>{
    //     const addItemToFront = funcs.addItemToFront;
    //     it('should be a function', () => {
    //         assert.typeOf(addItemToFront, 'function');
    //     });
    // });

    // describe(`'wordsToSentence'`, () =>{
    //     const wordsToSentence = funcs.wordsToSentence;
    //     it('should be a function', () => {
    //         assert.typeOf(wordsToSentence, 'function');
    //     });
    // });

    // describe(`'contains'`, () =>{
    //     const contains = funcs.contains;
    //     it('should be a function', () => {
    //         assert.typeOf(contains, 'function');
    //     });
    // });

    // describe(`'addNumbers'`, () =>{
    //     const addNumbers = funcs.addNumbers;
    //     it('should be a function', () => {
    //         assert.typeOf(addNumbers, 'function');
    //     });
    // });

    // describe(`'averageTestScore'`, () =>{
    //     const averageTestScore = funcs.averageTestScore;
    //     it('should be a function', () => {
    //         assert.typeOf(averageTestScore, 'function');
    //     });
    // });
    // describe(`'largestNumber'`, () =>{
    //     const largestNumber = funcs.largestNumber;
    //     it('should be a function', () => {
    //         assert.typeOf(largestNumber, 'function');
    //     });
    // });
});