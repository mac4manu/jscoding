// CodingJavascript -> tpircsavaJgnidoC
// 15 -> 51
// -15 -> 51

// Reverse string values
function reverse(str) {
    let reversed = ''

    for (let char of str) {
        reversed = char + reversed
    }

    return reversed;
}

function reverseNative(str) {
    return str.split('').reverse().join('');
}

// Reverse numeric values
function reverseInt(num) {
    let parsedVal = num.toString().split('').reverse().join('')
    return parseInt(parsedVal) * Math.sign(num)  // Math.sign returns -1 or 1 based on sign
}

console.log(reverse('CodingJavascript'))

console.log(reverseNative('CodingJavascript'))

console.log(reverseInt(15))

console.log(reverseInt(-12))