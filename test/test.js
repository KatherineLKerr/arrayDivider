var assert = require("assert");
const divideArray = require("../divideArray.js")


describe("Array", function () {

  context("input validation", function () {

    it("should raise correct error when first param is not an array", function () {
      assert.throws(function () { divideArray(2, 2) }, Error, "First divideArray parameter should be an array.");
    });
    it("should raise correct error when second param is a negative integer", function () {
      assert.throws(function () { divideArray([1, 2, 3, 4, 5], -2) }, Error, "Second divideArray parameter should be a positive integer.");
    });
    it("should raise correct error when second param is a float", function () {
      assert.throws(function () { divideArray([1, 2, 3, 4, 5], 1.2) }, Error, "Second divideArray parameter should be a positive integer.");
    });
    it("should raise correct error when second param is a negative float", function () {
      assert.throws(function () { divideArray([1, 2, 3, 4, 5], -3.5) }, Error, "Second divideArray parameter should be a positive integer.");
    });
    it("should raise correct error when first param is not an array and second param is not a positive integer", function () {
      assert.throws(function () { divideArray(2, -2) }, Error, "The divideArray parameters should be an array and a positive integer.");
    });
    it("should raise correct error when array is empty", function () {
      assert.throws(function () { divideArray([], 5) }, Error, "Array must contain at least one element.");
    });
    it("should raise correct error when array length is less than the integer parameter", function () {
      assert.throws(function () { divideArray([1, 2, 3, 4, 5], 9) }, Error, "Array length must be longer than the integer parameter.");
    });

  });

  context("calculating new array", function () {

    it("should contain correct number of elements in new array when there is not a remainder", function () {
      assert.equal(divideArray([1, 2, 3, 4, 5, 6], 3).length, 3)
    });
    it("should contain the correct number of elements in new array when there is a remainder", function () {
      assert.equal(divideArray([1, 2, 3, 4, 5], 3).length, 3)
    });

  });

  context("content of new array", function () {

    it("should calculate the new array correctly when there is not a remainder", function () {
      assert.deepEqual(divideArray([1, 2, 3, 4, 5, 6, 7, 8], 4), [[1, 2], [3, 4], [5, 6], [7, 8]])
    });
    it("should calculate the new array correctly when there is a remainder", function () {
      assert.deepEqual(divideArray([1, 2, 3, 4, 5], 3), [[1, 2], [3, 4], [5]])
    })

  });

});