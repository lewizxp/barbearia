navBarComponemt()

function navBarComponemt(){
    const element = document.getElementById(`navbar-component`)
    const navbar =  
    <nav class="navbar navbar-expand-lg fixed-top ">
        <div class="container">
            /*<a class="navbar-brand" href="#">Navbar</a>*/
           
            
            <button class="navbar-toggler bg-yellow" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">

                <ul class="navbar-nav me-auto ">
                    <li class="nav-item">
                        <a class="nav-link " aria-current="page" href="index.html">Home</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link " aria-current="page" href="#services">Serviços</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link " aria-current="page" href="#about">Sobre Nós</a>
                    </li>
                </ul>

                <ul class="navbar-nav ">
                     <li  class="nav-item">
                            <a class="nav-link "  href= "login.html">Login </a>
                     </li>
                    
                    
                </ul>

            </div>
        </div>
    </nav>

element.innerHTML= navbar
}
function navBarComponent (){
 const element = document.getElementById ("nav-component")
 const navbar =`
 `
}
function navBarComponentTemplate(){
    const element = document.getElementById( "nav-component")
    fetch ("../components/nav-component.html")
    .then ( (res)=> res.text())
    .then((nav) => {
        element.innerHTML - nav
    })
    .catch((error) => {
          console.log("erro ao montar a navbar:", error);
    })
}


