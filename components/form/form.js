function formComponent (el){
    const newEL = document.createElement("div");

    newEL.innerHTML = `
    <form class="form">
        <h2 class="form__title">Escribeme</h2>
        <div class="form--conteiner">
            <label class="label__name" for="input-name">
            <h2 class="form__subtitle">Nombre</h2>
            <input class="form__input" type="text" id="input-name">
            </label>
            <label for="input-email" class="label__email">
                <h2 class="form__subtitle">Email</h2>
                <input class="form__input" type="text" id="input-email">
            </label>
            <label for="input-message" class="label__message">
                <h2 class="form__subtitle">Mensaje</h2>
                <textarea class="form__input form__input__textarea" type="text" id="input-message" name="message"></textarea>
            </label>
            <button class="form__button"><div class="form__button-text" >Enviar</div></button>
        </div>
    </form>`;

    el.appendChild(newEL);
}