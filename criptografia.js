import caracteres from "./caracteres.js"

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