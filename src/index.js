const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    '22222':   ' ',
};

function decode(expr) {
    let num = expr.split('');
    let one = [];
    let three = [];
    for (let i = 0; i <num.length; i++) {
        if (i % 2 !== 0) {
            one.push(num[i] + ' ');
        } else {
            one.push(num[i]);
        }
    }
    let two = one.join('').split(' ');
    for (let j = 0; j < two.length; j++) {
        if (j % 5 === 0) {
            three.push('1')
            if(two[j] === '10') {
                three.push('.');
            } if (two[j] === '11') {
                three.push('-');
            } if (two[j] === '**') {
                three.push('2');
            } if(two[j] === '00') {
                continue
            }
        } else {
            if(two[j] === '10') {
                three.push('.');
            } if (two[j] === '11') {
                three.push('-');
            } if (two[j] === '**') {
                three.push('2');
            } if(two[j] === '00') {
                continue
            }
        }
    }
    let four = three.join('').split('1');
    let five = [];
    for (let k = 0; k < four.length; k++) {
        five.push(MORSE_TABLE[four[k]]);
    }
    five.shift();
    let six = five.join('');
    return six;
}

module.exports = {
    decode
}