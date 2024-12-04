
export function validateTel() {
    //const element = getElement("#telInput")
    const element = document.querySelector("#telInput")
    const message = document.querySelector("#telHelp")
    if (!element) return
    element.setAttribute('maxlength', '15')
    element.addEventListener('keyup', (e) => {
        const value = e.target.value
        const regexTel = /^\([0-9]{2,3}\)\s[0-9]{5}-[0-9]{4}$/g
        let error = ""
        if (!regexTel.test(value)) {
            error = 'Telefone invalido. Formato: "(999) 99999-9999"'
        }
        message.innerHTML = error
        //setContentElement("#telHelp", error)
    })
}

export function validatePassword() {
    const element = document.querySelector("#passwordInput")
    const message = document.querySelector("#passwordHelp")
    if (!element) return
    element.addEventListener('keyup', (e) => {
        const value = e.target.value
        if (value.length < 8) {
            message.innerHTML = "Senha muito curta! Minimo de 8 caracteres"
        } else {
            message.innerHTML = ''
        }

    })
}



function validateRequired() {
    const elements = document.querySelectorAll("[required]")
    console.log(elements)
    //const message = document.querySelector("#nameHelp")
} 