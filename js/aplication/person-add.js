import { validateEmail, validateName, validatePassword, validateTel } from '../service/validador.js'
import {Person} from "../domain/Person"

validateName()
validateEmail()
validateTel()
validatePassword() 
function getPerson(){
const person = new Person()
person.name = document.querySelector("#nameInput").value
person.phone = document.querySelector ("#telInput").value
person.email = document.querySelector("#emailInput").value
person.password = document.querySelector("#passwordInput").value

return person

}

function submitForm() {
    const buttonSubmit = document.querySelector("sumbitForm")
    buttonSubmit.addEventListener("click",() => {
        const person = getFormPerson()
        console.log (person)

})
}