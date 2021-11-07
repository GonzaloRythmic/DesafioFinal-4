function footerComponent (el){
    const headerEL = document.createElement("div");

    headerEL.innerHTML = `
    <div class="footer__img-conteiner">
        <a href=""><img class="bienvenida__header__img" src="../img/Logo-Gonzalo.png"></a>
    </div>
    <div class="footer__img-conteiner--redes">
        <a href="https://www.instagram.com/gonzalo.rythmic/?hl=es"><img src="../img/InstagramIcono.png"></a>
        <a href="https://www.linkedin.com/in/gonzalo-nahuel-cortez-salazar-346a3a138/"><img src="../img/LinkedinIcono.png"></a>
        <a href="https://github.com/GonzaloRythmic?tab=repositories"><img src="../img/GitHubIcono.png"></a>
    </div>`;

    el.appendChild(headerEL);
}