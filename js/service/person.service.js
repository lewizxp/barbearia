import { addPerson } from "../infra/person.repository.js"

export const personService = {
    add
   }
   
   function add(person){
   addPerson(person)
   .then(res=>{
console.log("adicionado:",res)
alert("adicionado com sucessso")
   })

   .catch(error=> {
    console.log("error",res)
    alert("error")

   })
}