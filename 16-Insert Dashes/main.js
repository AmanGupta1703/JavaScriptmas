function insertDashes(arr) {
    // write code here
    return arr.split(' ').map(letter => letter.split('').join('-')).join(' ')
}



/**
* Test Suite 
*/
describe('insertDashes()', () => {
    it('insert dashes in between chars', () => {
        // arrange
        const value = "aba caba";

        // act
        const result = insertDashes(value);

        // log
        console.log("result: ", result);

        // assert
        expect(result).toBe("a-b-a c-a-b-a");
    });
});

// result: ,"a-b-a c-a-b-a"