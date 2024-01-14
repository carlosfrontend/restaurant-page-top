const createContact = () => {
  const element = document.createElement("div");
  const contactTitle = document.createElement("h2");
  const mapBox = document.createElement("div");
  const addressContainer = document.createElement("div");
  const addressText = document.createElement("p");
  const locationLogo = `<i class="fa-solid fa-location-dot"></i>`;
  const phoneContainer = document.createElement("div");
  const phonelogo = `<i class="fa-solid fa-phone-volume"></i>`;
  const phoneText = document.createElement("p");
  phoneContainer.classList.add("phone-container");
  phoneText.classList.add("phone-text");
  contactTitle.textContent = "Where can you find us?";
  addressContainer.classList.add("address-container");
  addressText.classList.add("address-text");
  addressText.innerText = "Avenue without number near the beach 2800145";
  phoneText.textContent = "555-888-999"
  addressContainer.innerHTML = locationLogo;
  addressContainer.appendChild(addressText);
  phoneContainer.innerHTML = phonelogo;
  phoneContainer.appendChild(phoneText);
  mapBox.classList.add("map-box");
  contactTitle.classList.add("contact-title");
  const iframe = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22090.352271187105!2d-0.48787908939071833!3d38.16741749287431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd624fc6db3898e9%3A0x8aa5dd017ce61888!2sIsla%20de%20Tabarca!5e0!3m2!1ses!2ses!4v1705261946029!5m2!1ses!2ses" width="500" height="350" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
  element.append(contactTitle);
  element.append(mapBox);
  element.append(addressContainer);
  element.append(phoneContainer);
  mapBox.innerHTML = iframe;
  element.classList.add("contact-container");
  return element;
};

export default createContact;
