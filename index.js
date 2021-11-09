function main () {
    //Apendeamos los elementos.
    //header
    headerComponent (document.querySelector(".header__header"));
    //presentacion
    addElement(document.querySelector(".presentacion"));
    //form
    formComponent (document.querySelector(".contacto"));
    //footer
    footerComponent (document.querySelector(".footer"));
    
    //JS del burguerMenu
    burguerMenu();

    addElement(document.querySelector("#template-card"))
    getServices().then(function (services) {
        for (const service of services) {
            addServiceCard(service);
        }
    })
}

main ();