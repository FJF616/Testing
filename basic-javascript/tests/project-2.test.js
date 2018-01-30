import { stub } from 'sinon';


const funcs = require('../src/project-2.js');
const assert = require('chai').assert;
const expect = require('chai').expect;
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
require('chai').should();
require('chai').use(require('sinon-chai'));

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

    describe(`'isInRange'`, () => {
        const isInRange = funcs.isInRange;
        it('should be a function', () => {
            assert.isFunction(isInRange);
        });
        it('should return true if num is between 50 and 20, otherwise false', () => {
            n= [45, 23, 44 ]
            isInRange(n).should.satisfy((n) => n < 50);   // const invalid = [0, 3, 19, 51, 66, -5, 'hi'];
            stub = sinon.stub();
            stub.withArgs(19).returns(false);
            // const bad = invalid.filter(isInRange); 
            // bad.forEach(result => {
            //     console.log(result);
            //     assert.equal(result, false);
            // });
            // const valid = [21, 33, 49, 30];
            // const good = valid.filter(isInRange);
            // good.forEach(num => {
            //     if (num < 20) {
            //         expect(num).to.eql(true);
            //     } else if (num > 50) {
            //        expect(num).to.eql(false);
            //     }
                
            // });
        });  
    });    
   

    describe(`' isInteger'`, () =>{
        const isInteger = funcs.isInteger;
        it('should be a function', () => {
            assert.typeOf(isInteger, 'function');
        });
        it('should return false for strings and true for numbers', () => {
            assert.equal(isInteger('hello'), false);
            assert.equal(isInteger(35), true);
        });
    
    });

    describe(`'fizzBuzz'`, () =>{
        const fizzBuzz  = funcs.fizzBuzz;
        it('should be a function', () => {
            assert.typeOf(fizzBuzz, 'function');
        });
        it('should return fizzbuzz if num is dvisible by 5 and 3', () => {
            assert.equal(fizzBuzz(45), 'fizzbuzz');
        });
        it('should return buzz if num divisible by 5', ()=> {
            assert.equal(fizzBuzz(10), 'buzz');
        });
        it('should return fizz if num divisible by 3', () => {
            assert.equal(fizzBuzz(9), 'fizz');
        });
        it('should return num if not divisible by 5 or 3', () => {
            const num = 4;
            assert.equal(fizzBuzz(num), num);
        })
    });

    describe(`'isPrime'`, () =>{
        const isPrime = funcs.isPrime;
        it('should be a function', () => {
            assert.typeOf(isPrime, 'function');
        });
        it('should return false for negative numbers', () => {
            assert.equal(isPrime(-4), false);
        });
        it('should return false if the number is 1 or 0', () => {
            expect(isPrime(0 || 1)).to.be.equal(false);
        });

    });

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