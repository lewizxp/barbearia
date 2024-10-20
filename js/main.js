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


