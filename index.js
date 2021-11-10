
// function addElement(el) {
//     const element = document.createElement("div");
  
//     element.innerHTML = `
//         <div class="mis-servicios__conteiner-full">
//             <div class="mis-servicios__conteiner">
//                 <div class="mis-servicios__card">
//                     <img class="mis-servicios__card__img" src="" alt="">
//                     <h3 class="mis-servicios__titulo"></h3>
//                     <p class="mis-servicios__parrafo"></p>
//                 </div>
//             </div>
//         </div>`;
//     el.appendChild(element);
// }

function addServiceCard (params){
    console.log(params);

    const template = document.querySelector("#template-card");
    const contentCard = document.querySelector(".servicio__conteiner");

    template.content.querySelector(".mis-servicios__titulo").textContent = params.title;
    template.content.querySelector(".mis-servicios__parrafo").textContent = params.description;
    template.content.querySelector(".mis-servicios__card__img").src = params.img;  
    

    const clone = document.importNode(template.content, true);
    contentCard.appendChild(clone);
}


function getServices(){
    return fetch('https://cdn.contentful.com/spaces/dxb7qs3xep4m/environments/master/entries?access_token=r3MKPI7nT3W0wQiibTHSZ6yOwnLnqY59BqiemAhzuiE&content_type=services')
    .then(res=>{
        return res.json();
    }).then((json)=>{
        const fieldsCollection = json.items.map((item)=>{
            return {
                title: item.fields.title,
                description: item.fields.description,
                img: item.fields.urlImg,
                url: item.fields.url
            }
        })
        console.log(json);
        return fieldsCollection;
    });
}


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