import createContact from "./contact";
import createHome from "./home";
import initialPageLoader from "./initialPageLoader";
import createMenu from "./menu";

initialPageLoader();

const main = document.querySelector(".main");

const removeContent = () => {
  main.innerHTML = "";
};

const showsHome = () => {
  removeContent();
  window.scrollTo({ top: 100, behavior: "smooth" });
  main.append(createHome());
};

const showsMenu = () => {
  removeContent();
  window.scrollTo({ top: 100, behavior: "smooth" });
  main.append(createMenu());
};

const showsContact = () => {
  removeContent();
  window.scrollTo({ top: 100, behavior: "smooth" });
  main.append(createContact());
};

const buttons = [...document.querySelectorAll(".nav-item")];
const logoBtn = document.querySelector(".logo-container");
const titleBtn = document.querySelector(".title-container");
const homeBtn = buttons[0];
const menuBtn = buttons[1];
const contactBtn = buttons[2];
homeBtn.addEventListener("click", showsHome);
menuBtn.addEventListener("click", showsMenu);
contactBtn.addEventListener("click", showsContact);
logoBtn.addEventListener("click", showsHome);
titleBtn.addEventListener("click", showsHome);
