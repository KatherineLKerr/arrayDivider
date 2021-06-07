/**
 * Copyright (c) 2021
 *
 * An array divider that takes two parameters, an array(arr) and an integer(n), and returns a 
 * new array containing arr split into n pieces.
 * Created in response to 'Twig Education Coding Challenge'.
 * 
 * @summary An array divider created in response to 'Twig Education Coding Challenge'.
 * @author KatherineKerr <katherinekerr819@gmail.com>
 *
 * Created on: 2021-06-06 
 */

const isArray = function (arr) {
  /*
    params. arr: (an array)
    summary. helper function to determine if parameter is an array
    returns. boolean (true if argument passed as parameter is an array)
  */
  return (Array.isArray(arr))
}

const isPosInt = function (n) {
  /*
    params. n: (a number)
    summary. helper function to determine if parameter is a positive integer
    returns. boolean (true if argument passed as parameter is an integer and greater or equal to zero)
  */
  return ((Number.isInteger(n)) && (n >= 0))
}

const divideArray = function (arr, n) {
  /*
    params.  arr: (an array), n: (a number)
    summary. function to split an array (arr) into a specific number of sub-arrays (n). Implements input 
             validation and throws errors if arr param is empty or not array, and if n param is negative, 
             float, or smaller than length of arr.
    returns. newArr: (the new array, arr split into n equal pieces, with remainder if it is present)
  */

  if (!(isArray(arr)) && !(isPosInt(n))) {
    throw new Error("The divideArray parameters should be an array and a positive integer.");
  } else if (!isArray(arr)) {
    throw new Error("First divideArray parameter should be an array.");
  } else if (!isPosInt(n)) {
    throw new Error("Second divideArray parameter should be a positive integer.");
  } else if (arr.length === 0 ) {
    throw new Error("Array must contain at least one element.")
  } else if (arr.length < n) {
    throw new Error("Array length must be longer than the integer parameter.")
  }

  const sizeOfSlice = Math.ceil(arr.length / n);
  let newArr = [];

  for (let i = 0; i < arr.length; i += sizeOfSlice) {
    newArr.push(arr.slice(i, i + sizeOfSlice))
  }

  console.log(newArr);

  return newArr;

};

module.exports = divideArray;
