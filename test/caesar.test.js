const { expect } = require("chai");
const { caesar } = require("../src/caesar.js");

describe("Caesar Shift", () => {
    describe("Encode", () => {
        it("Should return a properly encoded message if input is valid and encoded is true or not passed.", () => {
            const actual = caesar("thinkful", 3);
            const expected = "wklqnixo";
            expect(actual).to.equal(expected);
        });
    });
    describe("Decode", () => {
        it("Should return a properly decoded message with valid input and encode=false", () => {
            const actual = caesar("wklqnixo", 3, false);
            const expected = "thinkful";
            expect(actual).to.equal(expected);
        });
    });
    describe("Other", () => {
        it("Should return false if the value isn't present", () => {
            const actual = caesar("thinkful");
            expect(actual).to.be.false;
        });
        it("Should return false if shift is outside of -25 to 25", () => {
            const actual = caesar("thinkful", 99);
            expect(actual).to.be.false;
        });
        it("Should ignore caps when decoding.", () => {
            const actual = caesar("BPQA qa I amkzmb umaaiom!", 8, false);
            const expected = "this is a secret message!";
            expect(actual).to.equal(expected);
        });
        it("Should ignore caps when encoding.", () => {
            const actual = caesar("This is a secret message!", 8);
            const expected = "bpqa qa i amkzmb umaaiom!";
            expect(actual).to.equal(expected);
        });
    });
});