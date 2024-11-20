import { validateEmail, validateName, validatePassword, validateTel } from './service/validador.js'
import { navBarComponentTemplate } from "./../components/nav-component/nav-component.js"
import {cardComponent} from "./../components/card-componet/card-component.js"

navBarComponentTemplate()
cardComponent()

validateName()
validateEmail()
validateTel()
validatePassword()

//Função para pegar os elementos
function getElement(elementSelector) {
    return document.querySelector(elementSelector)
}

//Função para preencher do conteúdo do elemento
function setContentElement(elementSelector, content) {
    const element = getElement(elementSelector)
    if (element) {
        element.innerHTML = content
    }
}