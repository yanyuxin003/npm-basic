import {transform} from "../src/romanizer";

describe('transform', () => {
    it('should return x when input 10 ', () => {
        const formatted = transform(10);
        expect(formatted).toEqual("X");
    });

});