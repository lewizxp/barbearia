 function validateName(){
 const element = document.querySelector("#nameInput")
 const message = document .querySelector ("#namehelp")
 element.addEventListener("blur"), (e) => {
const value = e.target.value
console.log (value)
if (value == ""){
    message.innerHTML = `<span class="text-danger"> valor invalido" </span>`

}
else{
    message.innerHTML= ""
}
 }
} 