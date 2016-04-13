'use strict';

module.exports = function (value) {

  return typeof value === 'number'
    && value > -1
    && value % 1 === 0
    && value <= 9007199254740991; // max safe integer
};
