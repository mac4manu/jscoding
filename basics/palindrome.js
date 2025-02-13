// Examples
// palindrome("madam") -> true
// palindrome("test") -> false

function palindrome(str) {
    return str === str.split("").reverse().join("")
}

console.log(palindrome("madam"))
console.log(palindrome("test"))