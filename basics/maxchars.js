// function to return the character that is most commonly used in the string
// maxChar("apple") --> "p"
// maxChar("appllle") --> "l"

function maxChar(str) {
    let mp = {}
    let max = 0;
    let char = ''
    for (const char of str) {
        mp[char] = mp[char] + 1 || 1
    }

    for (let key in mp) {
        if (mp[key] > max) {
            max = mp[key]
            char = key
        }
    }
    return char

}

console.log(maxChar("Applllle"))

console.log(maxChar("Test 2211113333"))