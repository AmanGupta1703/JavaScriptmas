function countVowelConsonant(str) {
    // write code here  
    const strArray = str.split('')
    let sum = 0
    const vowels = ['a', 'e', 'i', 'o', 'u']
    for (letter of strArray) {
        vowels.includes(letter) ? sum += 1 : sum += 2
    }
    return sum
}



/**
* Test Suite 
*/
describe('countVowelConsonant()', () => {
    it('returns total of vowels(1) and consonants(2) to be added', () => {
        // arrange
        const value = 'abcde';

        // act
        const result = countVowelConsonant(value);

        // log
        console.log("result: ", result);

        // assert
        expect(result).toBe(8);
    });
});