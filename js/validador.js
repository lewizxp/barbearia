validadeName()
validarEmail()
validartel()
validarpassaword()


function validadeName(){
    //seleciona o campo que a pessoa vai  digitar com o id de nameInput
    const element = document.querySelector("#nameInput")

    // seleciona o campo onde a mensagem vai aparacer 
    const message = document.querySelector("#nameHelp")

    element.addEventListener('blur', (e) =>{
        const value = e.target.value
        console.log(value)
        if(value== ""){
            message.innerHTML= '<span class= "text-danger"> Valor invalido </span>'
        }
        else{
            message.innerHTML= ''
        }
    }

)
}

function validarEmail(){
    const  element = document.querySelector ("#emailInput")
    const message = document.querySelector ("#emailHelp")
    element.addEventListener ('keyup', (e) => {
        const value = e.target.value
        console.log (value)
        let error = ''
        const regexEmail = (/^[0-9] + \@[a-z]+\.([a-z]{3})+$/g)
        if(!regexEmail.test(value)){
            error = 'Valor invalido' 
        }
        
            message.innerHTML= error
        })
}

function validartel(){
    const element= document.querySelector ("#telInput")
    const message = document.querySelector ("#telHelp")
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
function validarpassaword(){
    const element = document .querySelector("passwordInput")
    const message = document.querySelector("passwordHelp")
    element.setAttribute('maxlength', '8')
    element.addEventListener('keyup', (e) => {
    const value = e.target.value
    const regexpassaword = (/^[0-9] + [a-z]$/g)
    let erro = ""
    if(!regexpassaword.test(value)){
        error = 'senha invalida , tamanho maximo de 8 caracteres'
    }
    message.innerHTML = error


    })
}
