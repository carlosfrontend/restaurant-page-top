import { createSimpleElement, createImg, createText } from "./htmlFactory";
const createMenu = () => {
  const element = createSimpleElement("div", ".menu-container");
  const menuHeader = createSimpleElement("div", ".menu-header");
  const menuTitle = createText("h2", ".menu-title", "Daily Menu");
  const menuBox = createSimpleElement("div", ".menu-box");
  const menuSections = [
    createSimpleElement("div", ".menu-section"),
    createSimpleElement("div", ".menu-section"),
    createSimpleElement("div", ".menu-section"),
  ];
  const menuImages = [
    createImg("img", ".menu-image", "./img/salad.svg", "A salad logo"),
    createImg("img", ".menu-image", "./img/meal.svg", "A meal logo"),
    createImg("img", ".menu-image", "./img/cake-logo.svg", "A cake logo"),
  ];

  const menuTitles = [
    createText("h3", ".menu-section-title", "Starters"),
    createText("h3", ".menu-section-title", "Main Course"),
    createText("h3", ".menu-section-title", "Dessert"),
  ];

  const starters = [
    createText("p", ".menu-item", "Mediterran salad. 8 €"),
    createText("p", ".menu-item", "Andalusian gazpacho. 7 €"),
    createText("p", ".menu-item", "Ham and cheese saint jacobs. 6,50 €"),
    createText("p", ".menu-item", "Castilian soup. 7,20 €"),
  ];

  const mainCoursers = [
    createText("p", ".menu-item", "Beef ragout 10 €"),
    createText("p", ".menu-item", "Baked macaroni with sirloin 8 €"),
    createText("p", ".menu-item", "Lamb chops 14 €"),
    createText("p", ".menu-item", "Fried turbot with potatoes 12 €"),
  ];

  const desserts = [
    createText("p", ".menu-item", "Homemade cheese and blueberry pie 4.20 €"),
    createText(
      "p",
      ".menu-item",
      "Chocolate and pistachio macadamia nut ice cream 5 €"
    ),
    createText("p", ".menu-item", "Catalan cream 6 €"),
    createText("p", ".menu-item", "Fresh fruit 3.50 €"),
  ];
  const menuLogo = createImg(
    "img",
    ".menu-logo",
    "./img/chef-icon.svg",
    "A chef icon"
  );
  menuHeader.appendChild(menuLogo);
  menuHeader.appendChild(menuTitle);
  element.appendChild(menuHeader);

  for (let i = 0; i < menuSections.length; i++) {
    menuSections[i].appendChild(menuImages[i]);
    menuSections[i].appendChild(menuTitles[i]);
    menuBox.appendChild(menuSections[i]);
  }
  element.appendChild(menuBox);
  for (let j = 0; j < starters.length; j++) {
    menuSections[0].appendChild(starters[j]);
    menuSections[1].appendChild(mainCoursers[j]);
    menuSections[2].appendChild(desserts[j]);
  }
  return element;
};

export default createMenu;
