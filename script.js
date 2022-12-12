import { criptografar, descriptografar } from "./criptografia.js"

const input = document.querySelector("textarea#texto")
const buttonCriptografar = document.querySelector("button#criptografar")
const buttonDescriptografar = document.querySelector("button#descriptografar")
const resposta = document.querySelector("div#resposta")


buttonCriptografar.addEventListener("click", () => {
    const texto = input.value
    const texto_encriptografado = criptografar(texto)

    resposta.innerText = texto_encriptografado
})

buttonDescriptografar.addEventListener("click", () => {
    const texto = input.value
    const texto_encriptografado = descriptografar(texto)

    resposta.innerText = texto_encriptografado
})

