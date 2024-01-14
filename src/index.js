import createContact from "./contact";
import createHome from "./home";
import initialPageLoader from "./initialPageLoader";
import createMenu from "./menu";

initialPageLoader();

const main = document.querySelector(".main");
const homeBtn = document.querySelector("#home-btn");
const menuBtn = document.querySelector("#menu-btn");
const contactBtn = document.querySelector("#contact-btn");

const removeContent = () => {
  main.innerHTML = "";
};

const showsHome = () => {
  removeContent();
  main.append(createHome());
};

const showsMenu = () => {
  removeContent();
  main.append(createMenu());
};

const showsContact = () => {
  removeContent();
  main.append(createContact());
};

homeBtn.addEventListener("click", showsHome);
menuBtn.addEventListener("click", showsMenu);
contactBtn.addEventListener("click", showsContact);
