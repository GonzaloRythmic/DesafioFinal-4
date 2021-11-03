function headerComponent (el){
    const headerEL = document.createElement("div");

    headerEL.innerHTML = `
    <div class="content">
            <div class="cerrar-content">
                <img src="../img/Vector.png">
            </div>
            <div class="options">
                <h2 class="options__text">
                   <a href="./portfolio/portfolio.html">Portfolio</a>
                   <a href="./servicios/servicios.html">Servicios</a>
                   <a href="./contacto/contacto.html">Contacto</a>
                </h2>
            </div>
        </div>
    <header class="bienvenida__header">
            <img class="bienvenida__header__img" src="../img/Logo-Gonzalo.png">
            <div class="bienvenida__header__menu">
                <div class="bienvenida__burguer-button">
                    <img  src="./img/burger.png" alt="">
                </div>
            </div>
            <div class="header__options-teamplate">
                <a href="./portfolio/portfolio.html">Portfolio</a>
                   <a href="./servicios/servicios.html">Servicios</a>
                   <a href="./contacto/contacto.html">Contacto</a>   
            </div>
        </header>
        <div class="bienvenida__texto__conteiner">
        <h2 class="bienvenida__texto">Hola</h2>
        <h3 class="bienvenida__texto bienvenida__texto-subtitulo">Soy Gonzalo</h3>
        </div>`;

        el.appendChild(headerEL);
}

