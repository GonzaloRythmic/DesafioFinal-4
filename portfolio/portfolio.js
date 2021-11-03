function addServiceCard (params){
    console.log(params);

    const template = document.querySelector("#template-card");
    const contentCard = document.querySelector(".portfolio__conteiner");

    template.content.querySelector(".mis-servicios__titulo").textContent = params.title;
    template.content.querySelector(".mis-servicios__parrafo").textContent = params.description;
    template.content.querySelector(".mis-servicios__card__img").src = params.img;  
    template.content.querySelector(".portfolio__url").href = params.url;

    const clone = document.importNode(template.content, true);
    contentCard.appendChild(clone);
}


function getServices(){
    return fetch('https://cdn.contentful.com/spaces/dxb7qs3xep4m/environments/master/entries?access_token=r3MKPI7nT3W0wQiibTHSZ6yOwnLnqY59BqiemAhzuiE&content_type=portfolio')
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


function main (){
    getServices().then(function (services) {
        for (const service of services) {
            addServiceCard(service);
        }
    })
    burguerMenu();
}   

main();