function insertHeader(contentContainer){
    const semanticHeader = document.createElement("header");
    
    const navbarContainer = document.createElement("div");
    navbarContainer.classList.add("navbar");

    const semanticNav = document.createElement("nav");

    const restaurantName = document.createElement("span");
    restaurantName.textContent = "Dale's Restaurant";

    const navbarItemsContainer = document.createElement("div");
    navbarItemsContainer.classList.add("navbarItems");
    const listItems = ["Home", "About", "Contact"];

    for (let item of listItems){
        const navItem =  document.createElement("a");
        navItem.setAttribute("href", "/");
        navItem.textContent = item;
        navbarItemsContainer.appendChild(navItem);
    }

    semanticNav.appendChild(restaurantName);
    semanticNav.appendChild(navbarItemsContainer);
    navbarContainer.appendChild(semanticNav);
    semanticHeader.appendChild(navbarContainer);
    
    contentContainer.appendChild(semanticHeader);
    
}

export default insertHeader;