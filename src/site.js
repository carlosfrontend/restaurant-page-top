import createHome from "./home";
import {
  createSimpleElement,
  createImg,
  createText,
  createLink,
} from "./htmlFactory";

const createHeader = () => {
  const header = createSimpleElement("header", ".header");
  const logoContainer = createSimpleElement("div", ".logo-container");
  const titleContainer = createSimpleElement("div", ".title-container");
  const navContainer = createSimpleElement("nav", ".nav");
  const logo = createImg(
    "img",
    ".logo",
    "./img/logo.svg",
    "A picture of three forks"
  );
  const title = createText("h1", ".title", "Three Forks");
  const navItems = [
    createText("div", ".nav-item", "Home"),
    createText("div", ".nav-item", "Menu"),
    createText("div", ".nav-item", "Contact"),
  ];
  logoContainer.appendChild(logo);
  titleContainer.appendChild(title);
  header.appendChild(logoContainer);
  header.appendChild(titleContainer);
  header.appendChild(navContainer);
  for (let i = 0; i <= navItems.length - 1; i++) {
    navContainer.appendChild(navItems[i]);
  }
  return header;
};

const createFooter = () => {
  const footer = createSimpleElement("footer", ".footer");
  const ghLogo = createSimpleElement("i", ".fa-brands");
  const footerNav = createSimpleElement("nav", ".footer-nav");
  const authorItem = createLink(
    "a",
    ".footer-nav-item",
    "_blank",
    "https://github.com/carlosfrontend",
    ``
  );
  const mentionTags = [
    createText("span", ".footer-nav-item", "Photo by "),
    createText("span", ".footer-nav-item", "Photo by "),
    createText("span", ".footer-nav-item", "Photo by "),
  ];

  mentionTags[0].appendChild(
    createLink(
      "a",
      ".author-link",
      "_blank",
      "https://unsplash.com/es/@anna_tukhfatullina?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
      "Anna Tukhfatullina"
    )
  );

  mentionTags[1].appendChild(
    createLink(
      "a",
      ".author-link",
      "_blank",
      "https://unsplash.com/es/@catrionaobrian?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
      "Ekaterina Novitskaya"
    )
  );

  mentionTags[2].appendChild(
    createLink(
      "a",
      ".author-link",
      "_blank",
      "https://unsplash.com/es/@andersjilden?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
      "Anders Jildén"
    )
  );

  const photoLinks = [
    createLink(
      "a",
      ".photo-link",
      "_blank",
      'https://unsplash.com/es/fotos/tarta-de-frambuesa-Mzy-OjtCI70?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash',
      "Unsplash"
    ),
    createLink(
      "a",
      ".photo-link",
      "_blank",
      'https://unsplash.com/es/fotos/textil-negro-sobre-textil-blanco-gLroHoWh_as?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash',
      "Unsplash"
    ),
    createLink(
      "a",
      ".photo-link",
      "_blank",
      'https://unsplash.com/es/fotos/vista-aerea-del-pueblo-en-el-acantilado-de-la-montana-durante-la-puesta-del-sol-naranja-cYrMQA7a3Wc?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash',
      "Unsplash"
    ),
  ];

  ghLogo.classList.add("fa-github");
  footer.appendChild(footerNav);
  authorItem.appendChild(ghLogo);
  authorItem.children[0].after(
    ` Coded by carlosfrontend - ${new Date().getFullYear()}`
  );
  footerNav.appendChild(authorItem);
  for (let i = 0; i < mentionTags.length; i++) {
    mentionTags[i].children[0].after(" in ");
    mentionTags[i].appendChild(photoLinks[i]);
    footerNav.appendChild(mentionTags[i]);
  }
  return footer;
};
const site = () => {
  const main = createSimpleElement("div", ".main");
  const content = document.querySelector("#content");
  content.appendChild(createHeader());
  content.appendChild(main);
  main.appendChild(createHome());
  content.appendChild(createFooter());
};

export default site;
