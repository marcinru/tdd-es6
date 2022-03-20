import { expect } from "chai";
import { isAnagram } from "./anagrams";

describe('isAnagram', () => {
    it('returns true for "listen" and "silent"', () => {
        expect(isAnagram("listen", "silent")).to.be.true;
    });

    it('returns false for "listens" and "silent"', () => {
        expect(isAnagram("listens", "silent")).to.be.false;
    });

    it('returns false for "elbows" and "below"', () => {
        expect(isAnagram("elbows", "below")).to.be.false;
    });

    it('returns true for "conversation" and "voices rant on"', () => {
        expect(isAnagram("conversation", "voices rant on")).to.be.true;
    });

    it('returns true for "STATE" and "taste"', () => {
        expect(isAnagram("STATE", "taste")).to.be.true;
    });
});
