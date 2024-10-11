navBarComponemt()

function navBarComponemt(){
    const element = document.getElementById(`navbar-component`)
    const navbar =`<nav class="navbar">
    <ul class="nav-links">
        <li><a href="index.html">Início</a></li>
        <li><a href="#services">Serviços</a></li>
        <li><a href="#about">Sobre Nós</a></li>
        <li><a href="#contact">Contato</a></li>
        <li><a href="login.html">Login</a></li>
    </ul>
</nav>`
element.innerHTML= navbar
}


cards()
function cards(){
    const element= document.getElementById(`card`)
    const card = `<div class="card">
    <div class="card-img">
        <img src="./imagens/barber-logo.jpg" alt="">
    </div>

    <div class="card-content">
        <h2>Barba</h2>
        <p>
            É uma forma de expressar a personalidade, realçar os traços do rosto e acompanhar as últimas
            tendências da moda masculina.
        </p>
    </div>
</div>`

element.innerHTML = card
for (i = 0 ; i card.length; i++){
    card[i] = card [i];
}
}