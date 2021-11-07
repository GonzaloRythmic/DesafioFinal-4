function sendData(formEl, inputs) {
  formEl.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(e.target);

    const object = Object.fromEntries(formData.entries());

    const message = `
        Nombre del usuario: ${object.userName} <br> <br>
        Mail: ${object.userEmail} <br> <br>
        Mensaje: ${object.message}
      `;

    fetch("https://apx-api.vercel.app/api/utils/dwf", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",

      body: JSON.stringify({
        to: "gonzalocortez1991@hotmail.com",

        message: message,
      }),
    })
      .then(() => {
        alert(
          "Mensaje enviado. Gracias, " + object.userName + " por cominucarte!"
        );

        inputs.forEach((input) => {
          input.value = "";
        });
      })
      .catch(() => {
        alert(
          "Error al enviar, revise haber completado los campos correctamente"
        );
      });
  });
}

function contactComponent(el) {
  const contactEl = document.createElement("div");
  contactEl.innerHTML = `
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
  </form>
  `;

  const form = contactEl.querySelector(".form");
  const inputs = contactEl.querySelectorAll(".form__input");

  sendData(form, inputs);

  el.appendChild(contactEl);
  
}

function main (){
  headerComponent(document.querySelector(".header__contact"));
  burguerMenu();
  contactComponent(document.querySelector(".contacto"))
  footerComponent(document.querySelector(".footer"))
}
main();