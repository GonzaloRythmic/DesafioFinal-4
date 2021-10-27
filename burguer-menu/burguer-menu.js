function main (){
    const burguerButtonEl = document.querySelector(".bienvenida__burguer-button");
    const cerrarContentEl = document.querySelector(".cerrar-content");
    const contentEl =document.querySelector(".content");
    const bienvenidaEl = document.querySelector(".bienvenida");

    burguerButtonEl.addEventListener("click", ()=>{
        contentEl.style.display = "inherit";
        
    })
    cerrarContentEl.addEventListener("click", ()=>{
        contentEl.style.display = "";
    })
}
main ();
