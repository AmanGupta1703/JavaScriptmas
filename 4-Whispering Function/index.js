/* Whispering function 
Write a function `whisper` that takes in a sentence 
and returns a new sentence in all lowercase letters with
"shh..." at the beginning. 

The function should also remove an exclamation point
at the end of the sentence, if there is one. 

Example 
input: "The KITTENS are SLEEPING!"
output: "shh... the kittens are sleeping"

Hint: endsWith and slice
*/
function whisper(sentence) {
    let prefix = `shh...`
    let sentenceStr;
    
    if (sentence.endsWith('!')) {
        sentenceStr = `${prefix} ${sentence.toLowerCase().replace('!', '.')}`
    } else {
        sentenceStr = `${prefix} ${sentence.toLowerCase()}`
    }
    return sentenceStr
}

console.log(whisper("PLEASE STOP SHOUTING."));
console.log(whisper("MA'AM, this is a Wendy's!"));
console.log(whisper("HELLO!"));