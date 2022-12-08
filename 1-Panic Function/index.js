/* Panic function 
Write a PANIC! function. The function should take in a sentence and return the same
sentence in all caps with an exclamation point (!) at the end. Use JavaScript's
built in string methods. 

If the string is a phrase or sentence, add a 😱 emoji in between each word. 

Example input: "Hello"
Example output: "HELLO!"

Example input: "I'm almost out of coffee"   
Example output: "I'M 😱 ALMOST 😱 OUT 😱 OF 😱 COFFEE!"
*/


// Test your function
function panic(message) {
    let messageArray = message.split(' ')
    let addEmoji
    
    if (messageArray.length === 1) {
        messageArray.forEach(function(message) {
            let messageStr = message.toUpperCase()
            console.log(messageStr)
        })
    } 
    addEmoji = messageArray.join(' 😱 ')
    return addEmoji
}

console.log(panic("I'm almost out of coffee"));
console.log(panic("winter is coming"))
panic('Hello!')