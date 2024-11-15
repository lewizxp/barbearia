



export async function CardComponent() {
    const localTemplate = 'components/card-component/card-component.html'
    const localStyle = 'components/card-component/card-component.css'
    const element = document.getElementById('card-component')
    if (!element) return

    //Dados
    const services = await getServices ()
    console.log (">>> services ",services);

    //Template -> HTML 
    fetch(localTemplate)
        .then((res) => res.text())
        .then((component) => {

            element.innerHTML = mountService(sevicos, component)

            element.innerHTML += `<link rel="stylesheet" href="${localStyle}">`

        })
        .catch((error) => {
            console.error("Erro ao montar o componente: ", error);
        })
}
function mountService(dados,template){
    let result = ""
    for (let i = 0; i < dados.length; i++){
        let newTemplate = template
        result += newTemplate
        .replace ("{{fotos}}", dados[i].fotos)
        .replace ("{{nome}}",dados[i].nome)
        .replace("{{descricao}}",dados[i].descricao)
    }
}


function mountService (dados,component)

async function getServices(){
    let result = []
    await fetch("mock/service.json")
    .then((res) => res.text())
    .then((data) => {
        result = data
    })
    .catch((error) => {
        console.error("Erro ao montar o componente: ", error);
    })
    return result
}