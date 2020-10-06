function insertContent(mainContainer){
    const container = document.createElement("div");
    container.classList.add("body");

    const semanticSection1 = document.createElement("section");
    const semanticHeader1 = document.createElement("header");
    const headerContainer = document.createElement("div");
        headerContainer.classList.add("header");
    const p1 = document.createElement("p");
        p1.textContent = "Welcome to my Restaurant!";

            headerContainer.appendChild(p1);
            semanticHeader1.appendChild(headerContainer);
            semanticSection1.appendChild(semanticHeader1);

    const semanticSection2 = document.createElement("section");
    const contentContainer = document.createElement("div");
        contentContainer.classList.add("contentcontainer");
    const p2 = document.createElement("p");
        p2.textContent = "What's new in our menu?";

            contentContainer.appendChild(p2);
            semanticSection2.appendChild(contentContainer);

    const semanticArticle = document.createElement("article");
    const imagesContainer = document.createElement("div");
        imagesContainer.classList.add("imagesContainer");
    const images = [
        {
            link: "https://www.revigorando.com.br/wp-content/uploads/ZucchiniPasta-InSeason-Walmart-Fr-Mai2015-778.jpg",
            alt: "Pesto"
        },
        {
            link: "https://wallpapercave.com/wp/wp3030132.jpg",
            alt: "Lasagna"
        },
        {
            link: "https://uncletnuc.files.wordpress.com/2016/04/pepperoni-pizza-wallpaper-1.jpg?w=640",
            alt: "Pizza"
        }
    ];

        for(let item of images){
            const imagesItem = document.createElement("img");
            imagesItem.setAttribute("src", item.link);
            imagesItem.setAttribute("alt", item.alt);
            imagesContainer.appendChild(imagesItem);

        }

            semanticSection2.appendChild(semanticArticle);

            container.appendChild(semanticSection1);
            container.appendChild(semanticSection2);
            semanticArticle.appendChild(imagesContainer);
            mainContainer.appendChild(container);
    
}

export default insertContent;