validadeName()
validarEmail()
validartel()


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
    element.addEventListener('keyup', (e) =>{
        const value = e.target.value
        console.log(value)
        let error = ''
        const regexTel = (/^[0-9]+$/g)
        if(!regexTel.test(value)){
            error = 'valor invalido'
        }
        message.innerHTML= error
    }
    )
}