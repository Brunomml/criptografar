const caracteres = {
    "a": "eeit",
    "b": "atey",
    "c": "ntte",
    "d": "saton",
    "e": "igna",
    "f": "ogla",
    "g": "owal",
    "h": "lyar",
    "i": "oxrd",
    "j": "atot",
    "k": "aron",
    "l": "rdon",
    "m": "atton",
    "n": "rper",
    "o": "arle",
    "p": "abken",
    "q": "erish",
    "r": "ckalo",
    "s": "shard",
    "t": "oghin",
    "u": "onlla",
    "v": "leter",
    "w": "cabug",
    "x": "nyard",
    "y": "maher",
    "z": "spcan",
    "á": "lfuin",
    "à": "aelnha",
    "â": "oserow",
    "ã": "oraonda",
    "è": "oalhark",
    "é": "osefish",
    "ê": "ynahant",
    "í": "olaingo",
    "ì": "ossefiesh",
    "î": "adarfly",
    "ó": "hrkaroo",
    "ò": "heppion",
    "ô": "nilfish",
    "õ": "nkeerfly",
    "ú": "qidibian",
    "ù": "iericoot",
    "û": "erakbird",
    "?": "eeleodile",
    " ": "lpcaelfly",
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