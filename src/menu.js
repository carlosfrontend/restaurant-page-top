const createMenu = () => {
  const element = document.createElement("div");
  const text = document.createElement("p");
  element.appendChild(text);
  text.textContent = "Hello menu!";
  element.classList.add("white");
  return element;
};

export default createMenu;
