import { createForm, createSimpleElement } from "./htmlFactory";

const createContact = () => {
  const element = createSimpleElement("div", ".contact-container");
  const formContainer = createForm("form", "#contact-form", "/", "POST");
  const formTitle = createSimpleElement("h2", ".form-title");
  const submitBtn = document.createElement("input");
  const nameLabel = document.createElement("label");
  const nameInput = document.createElement("input");
  const dateLabel = document.createElement("label");
  const dateInput = document.createElement("input");
  const phoneLabel = document.createElement("label");
  const phoneInput = document.createElement("input");
  formTitle.textContent = "Don't wait any longer and book";
  nameLabel.setAttribute("for", "name");
  nameLabel.textContent = "Client Name";
  nameInput.setAttribute("id", "name");
  nameInput.setAttribute("type", "text");
  nameInput.setAttribute("required", true);
  nameInput.setAttribute("placeholder", "Your name here");

  dateLabel.setAttribute("for", "date");
  dateLabel.textContent = "Desired Date";
  dateInput.setAttribute("id", "date");
  dateInput.setAttribute("type", "date");
  dateInput.setAttribute("required", true);

  phoneLabel.setAttribute("for", "phone");
  phoneLabel.textContent = "Client Phone";
  phoneInput.setAttribute("id", "phone");
  phoneInput.setAttribute("type", "tel");
  phoneInput.setAttribute("required", true);
  phoneInput.setAttribute("placeholder", "Your phone here");

  submitBtn.setAttribute("type", "submit");
  submitBtn.setAttribute("id", "submit-button");
  submitBtn.setAttribute("value", "Reserve !");
  formContainer.appendChild(formTitle)
  formContainer.appendChild(nameLabel)
  formContainer.appendChild(nameInput)
  formContainer.appendChild(dateLabel)
  formContainer.appendChild(dateInput)
  formContainer.appendChild(phoneLabel)
  formContainer.appendChild(phoneInput)
  
  formContainer.appendChild(submitBtn);
  element.appendChild(formContainer);

  return element;
};

export default createContact;
