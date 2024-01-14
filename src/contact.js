const createContact = () => {
  const element = document.createElement("div");
  const text = document.createElement("p");
  text.textContent = "Hello Contact!";
  element.append(text);
  element.classList.add("white");
  return element;
};

export default createContact;
