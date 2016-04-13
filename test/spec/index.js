'use strict';

var expect = require('chai').expect;


describe('is-length', function () {

    var isLength = require('../../');

    it('common test', function () {

        expect(isLength(3)).to.be.true;

        expect(isLength('3')).to.be.false;
        expect(isLength()).to.be.false;
        expect(isLength(Number.MAX_VALUE)).to.be.false;
        expect(isLength(Infinity)).to.be.false;
    });
});
