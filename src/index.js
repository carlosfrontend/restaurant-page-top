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
  window.scrollTo({ top: 0, behavior: "smooth" });
  removeContent();
  main.append(createHome());
};

const showsMenu = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
  removeContent();
  main.append(createMenu());
};

const showsContact = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
  removeContent();
  main.append(createContact());
};

const buttons = [...document.querySelectorAll(".nav-item")];
const homeBtn = buttons[0];
const menuBtn = buttons[1];
const contactBtn = buttons[2];
homeBtn.addEventListener("click", showsHome);
menuBtn.addEventListener("click", showsMenu);
contactBtn.addEventListener("click", showsContact);
