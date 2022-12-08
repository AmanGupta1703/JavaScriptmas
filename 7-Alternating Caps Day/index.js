/* Alternating Caps 
 Write a function that takes in a string of letters
 and returns a sentence in which every other letter is capitalized.

Example input: "I'm so happy it's Monday"
Example output: "I'M So hApPy iT'S MoNdAy"
*/

function altCaps(str) {
    // let newStr = ""
    // for (let i = 0; i < str.length; i++) {
    //     i % 2 ? newStr += str[i].toUpperCase() : newStr += str[i].toLowerCase()
    // }
    // return newStr;
    
    // https://www.w3schools.com/jsref/jsref_split.asp
    // https://www.w3schools.com/jsref/jsref_map.asp#:~:text=Definition%20and%20Usage,   not%20change%20the%20original%20array.
    return str.toLowerCase().split('')
        .map(function (character, index) {
            return index % 2 ? character.toUpperCase() : character.toLowerCase()
        }).join('')

}

console.log( altCaps("When you visit Portland you have to go to VooDoo Donuts") )