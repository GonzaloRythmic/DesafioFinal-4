function main () {
    //Apendeamos los elementos.
    //header
    headerComponent (document.querySelector(".bienvenida"));
    //presentacion
    addElement(document.querySelector(".presentacion"));
    //form
    formComponent (document.querySelector(".contacto"));
    //footer
    footerComponent (document.querySelector(".footer"));
    
    //JS del burguerMenu
    burguerMenu();
}

main ();