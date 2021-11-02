function addElement(el) {
    const element = document.createElement("div");
  
    element.innerHTML = `
<div class="presentacion__conteiner">
    <div class="presentacion__conteiner-title-parrafo">
        <h2 class="bienvenida__texto bienvenida__texto-subtitulo, presentacion__conteiner, presentacion__title">Soy Gonza</h2>
        <p class="presentacion__texto">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil minus obcaecati delectus ratione doloremque dolores quis voluptas hic voluptatem placeat nobis veritatis ex odio officiis illum, unde magni enim aperiam.</p>
    </div>
    <div class="presentacion__img-conteiner">
        <img class="presentacion__img" src="/img/image5.png" alt="">
    </div>
</div>`;
    el.appendChild(element);
}

function main (){
    addElement(document.querySelector(".presentacion"));
}

main();