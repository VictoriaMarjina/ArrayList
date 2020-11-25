const { assert, should } = require('chai');
const ArrayList = require('../ArrayList.js');

describe('ArrayList methods', () => {
    describe('init', () => {
        const aList = new ArrayList();
        const testData = [
            {
                array: [1, 2, 3],
                expectedSize: 3,
                expectedString: '[1, 2, 3]',
            }, 
            {
                array: [1, 2, 3, 4, 5, 6],
                expectedSize: 6,
                expectedString: '[1, 2, 3, 4, 5, 6]',
            },
        ]; 
        testData.forEach(( {array, expectedSize, expectedString} ) => {
            it(`should return size ${expectedSize} and ${expectedString}`, () => {
                aList.init(array);

                assert.deepEqual(aList.size, expectedSize);
                assert.strictEqual(aList.toString(), expectedString);
            });
        });
    });
    describe('getPush ', () => {
        const aList = new ArrayList();
        const testData = [
            {
                array: [1, 2, 3],
                arg: 1,
                expectedSize: 4,
                
            }, 
            {
                array: [1, 2, 3, 4, 5, 6],
                arg: 2,
                expectedSize: 7,
           
            },
        ]; 
        testData.forEach(( {array, arg, expectedSize} ) => {
            it(`should return size ${expectedSize}`, () => {
                aList.init(array);
                aList.getPush(arg);
                
                assert.deepEqual(aList.size, expectedSize);
            });
        });
    });
    describe('getPop', () => {
        const aList = new ArrayList();
        const testData = [
            {
                array: [1, 2, 3],
                expectedElement: 3,
            }, 
            {
                array: [1, 2, 3, 4, 5, 6],
                expectedElement: 6,
            },
        ]; 
        testData.forEach(( {array, expectedElement} ) => {
            it(`should return element ${expectedElement}`, () => {
                aList.init(array);
                let returnArg = aList.getPop();
                
                assert.deepEqual(returnArg, expectedElement);
            });
        });
    });
    describe('getShift', () => {
        const aList = new ArrayList();
        const testData = [
            {
                array: [1, 2, 3],
                expectedElement: 1,
            }, 
            {
                array: [88, 2, 3, 4, 5, 6],
                expectedElement: 88,
            },
        ]; 
        testData.forEach(( {array, expectedElement} ) => {
            it(`should return element ${expectedElement}`, () => {
                aList.init(array);
                let returnArg = aList.getShift();
                
                assert.deepEqual(returnArg, expectedElement);
            });
        });
    });
    describe('getUnShift', () => {
        const aList = new ArrayList();
        const testData = [
            {
                array: [1, 2, 3],
                arg: 8,
                expectedSize: 4,
            }, 
            {
                array: [88, 2, 3, 4, 5, 6],
                arg: 99,
                expectedSize: 7,
            },
        ]; 
        testData.forEach(( {array, arg, expectedSize} ) => {
            it(`should return size ${expectedSize}`, () => {
                aList.init(array);
                let returnArg = aList.getUnShift(arg);
                
                assert.deepEqual(returnArg, expectedSize);
            });
        });
    });
    describe('getClear', () => {
        const aList = new ArrayList();
        const testData = [
            {
                array: [1, 2, 3],
                expectedSize: 0,
            }, 
            {
                array: [88, 2, 3, 4, 5, 6],
                expectedSize: 0,
            },
        ]; 
        testData.forEach(( {array, expectedSize} ) => {
            it(`should return size ${expectedSize}`, () => {
                aList.init(array);
                aList.getClear();
                
                assert.deepEqual(aList.size, expectedSize);
            });
        });
    });
    describe('ToString', () => {
        const aList = new ArrayList();
        const testData = [
            {
                array: [1, 2, 3],
                expectedString: '[1, 2, 3]',
            }, 
            {
                array: [1, 2, 3, 4, 5, 6],
                expectedString: '[1, 2, 3, 4, 5, 6]',
            },
        ]; 
        testData.forEach(( {array, expectedString} ) => {
            it(`should return string ${expectedString}`, () => {
                aList.init(array);

                assert.strictEqual(aList.toString(), expectedString);
            });
        });
    });
    describe('getRevers', () => {
        const aList = new ArrayList();
        const testData = [
            {
                array: [1, 2, 3],
                expectedArray: [3, 2, 1],
            }, 
            {
                array: [8, 0, 1, 4],
                expectedArray: [4, 1, 0, 8],
            },
        ]; 
        testData.forEach(( {array, expectedArray} ) => {
            it(`should return array ${expectedArray}`, () => {
                aList.init(array);
                aList.getRevers();

                assert.deepEqual(aList.array, expectedArray);
            });
        });
    });
    describe('getSlice', () => {
        const aList = new ArrayList();
        const testData = [
            {
                array: [1, 2, 3],
                arg1: 1,
                expectedArray: [2, 3],
            }, 
            {
                array: [8, 0, 1, 4],
                arg1:1,
                arg2:3,
                expectedArray: [0, 1],
            },
        ]; 
        testData.forEach(( {array, arg1, arg2, expectedArray} ) => {
            it(`should return array ${expectedArray}`, () => {
                aList.init(array);
                let newArr = aList.getSlice(arg1, arg2);

                assert.deepEqual(newArr, expectedArray);
            });
        });
    });
});
