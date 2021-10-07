const { expect } = require("chai");
const { polybius } = require("../src/polybius.js");

describe("Polybius Square", () => {
    describe("Encode", () => {
        it("Should properly encode a string.", () => {
            const actual = polybius("thinkful");
            const expected = "4432423352125413";
            expect(actual).to.equal(expected);
        });
        it("Should ignore caps.", () => {
            const actual = polybius("tHINkful");
            const expected = "4432423352125413";
            expect(actual).to.equal(expected);
        });
    });
    describe("Decode", () => {
        it("Should properly decode a string.", () => {
            const actual = polybius("3251131343 2543241341", false); 
            const expected = "hello world";
            expect(actual).to.equal(expected);
        });
        it("Should return false with an odd number of characters.", () => {
            const actual = polybius("4251432", false);
            expect(actual).to.be.false;
        });
        it("Should return (i/j) for input 42.", () => {
            const actual = polybius("4432423352125413", false);
            const expected = "th(i/j)nkful";
            expect(actual).to.equal(expected);
        });
    });
});

