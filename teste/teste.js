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

for(const key1 in caracteres){
    const n1 = caracteres[key1]
    
    for (const key2 in caracteres) {
        const n2 = caracteres[key2]


        if(n1.includes(n2) && key1 != key2){
            console.log(key1, key2, n1, n2);
        }
    }
}