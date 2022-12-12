const caracteres = {
    "a": "[",
    "b": "]",
    "c": "{",
    "d": "}",
    "e": "~",
    "f": "^",
    "g": "/",
    "h": "?",
    "i": ";",
    "j": ":",
    "k": "-",
    "l": "_",
    "m": "=",
    "n": "+",
    "o": ">",
    "p": "<",
    "q": ".",
    "r": ",",
    "s": "!",
    "t": "@",
    "u": "#",
    "v": "$",
    "w": "%",
    "x": "¨",
    "y": "&",
    "z": "*",
    "á": "(",
    "à": ")",
    "â": "1",
    "ã": "2",
    "è": "3",
    "é": "4",
    "ê": "5",
    "í": "6",
    "ì": "7",
    "î": "8",
    "ó": "9",
    "ò": "0",
    "ô": "11",
    "õ": "12",
    "ú": "13",
    "ù": "14",
    "û": "|",
    "?": "22",
    " ": "₢"
}

const criptografar = 
    texto => texto
        .split("")
        .map(letra => caracteres[letra] ?? letra)
        .join("")

const descriptografar = texto => {
    for (const key in caracteres) {
        const letra = caracteres[key]

        if(texto.includes(letra)) texto = texto.replaceAll(letra, key)
    }

    return texto
}

export {
    criptografar,
    descriptografar
}