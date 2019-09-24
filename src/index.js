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
};

function decode(expr) {
    const translator = new Map([
        ["10","."],
        ["11","-"],
        ["**********", " "]
    ]);

    let lettersPolygon = [];
    for(let i = 0, j = 10; j <= expr.length; i += 10, j += 10){
        lettersPolygon = [...lettersPolygon, expr.slice(i,j)];
    }

    const toMorse = (str) => {
        let result = '';
        for(let i = 0, j = 2; j <= str.length; i += 2, j += 2){
            if(translator.has(str.slice(i,j))){
                result = result + translator.get(str.slice(i,j));
            }
        }
        return MORSE_TABLE[result];
    };

    return  lettersPolygon.reduce((acc, elem) => {
        if(translator.has(elem)){
            return acc + translator.get(elem);
        }
        return acc + toMorse(elem);
    },'');
}

module.exports = {
    decode
}