validateName()
validadeRequired ()

function validadeName(){
    const element = document.querySelector("#nameInput")
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
        if(value == '' ){
            message.innerHTML = 'Valor invalido' 
        }
        else{
            message.innerHTML='' 
        }
    }
)
}