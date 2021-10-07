const {expect} = require("chai");
const { substitution } = require("../src/substitution.js");

describe("Substitution Cipher", () => {
    
    describe("Encode", () => {
        it("Should encode a message.", () => {
            const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev");
            const expected = "jrufscpw";
            expect(actual).to.equal(expected);
        });
        it("Should encode properly even if alphabet includes special characters.", () => {
            const actual = substitution("message", "$wae&zrdxtfcygvuhbijnokmpl");
            const expected = "y&ii$r&";
            expect(actual).to.equal(expected);
        });
        it("Should ignore caps.", () => {
            const actual = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev");
            const expected = "elp xhm xf mbymwwmfj dne";
            expect(actual).to.equal(expected);
        });
    });
    
    describe("Decode", () => {
        it("Should decode a message.", () => {
            const actual = substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false);
            const expected = "thinkful";
            expect(actual).to.equal(expected);
        });
        it("Should decode properly if input or alphabet contains special characters.", () => {
            const actual = substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false);
            const expected = "message";
            expect(actual).to.equal(expected);
        });
    });
    
    describe("Other", () => {
        it("Should return false if there are any dupicate characters in the sub-alphabet.", () => {
            const actual = substitution("thinkful", "abcabcabcabcabcabcabcabcyz");
            expect(actual).to.be.false;
        });
        it("Should return false if the sub-alphabet isn't exactly 26 characters.", () => {
            const actual = substitution("thinkful", "short");
            expect(actual).to.be.false;
        });
    });
});