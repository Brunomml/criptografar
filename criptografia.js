const caracteres = {
    a: "fazenda",
    e: "criptografia",
    i: "iei",
    o: "kkkkkkkkkkkkkkkkkkkk",
    u: "madureira"
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