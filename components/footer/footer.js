function footerComponent (el){
    const headerEL = document.createElement("div");

    headerEL.innerHTML = `
    <div class="footer__img-conteiner">
        <a href=""><img class="bienvenida__header__img" src="./img/Logo-Gonzalo.png"></a>
    </div>
    <div class="footer__img-conteiner--redes">
        <a href="https://www.instagram.com/gonzalo.rythmic/?hl=es"><img src="https://github.com/GonzaloRythmic/DesafioFinal-4/blob/master/img/InstagramIcono.png?raw=true"></a>
        <a href="https://www.linkedin.com/in/gonzalo-nahuel-cortez-salazar-346a3a138/"><img src="https://github.com/GonzaloRythmic/DesafioFinal-4/blob/master/img/LinkedinIcono.png?raw=true"></a>
        <a href="https://github.com/GonzaloRythmic?tab=repositories"><img src="https://github.com/GonzaloRythmic/DesafioFinal-4/blob/master/img/GitHubIcono.png?raw=true"></a>
    </div>`;

    el.appendChild(headerEL);
}